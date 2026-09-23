/* =========================================
   EMAILJS CONFIGURATION
========================================= */

const EMAILJS_PUBLIC_KEY = "xK8p_kxids2kmfJ5w";
const EMAILJS_SERVICE_ID = "service_u96retb";
const EMAILJS_TEMPLATE_ID = "template_z32ja2c";


/* =========================================
   INITIALIZE EMAILJS
========================================= */

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});


/* =========================================
   SCENES
========================================= */

const scenes = document.querySelectorAll(".scene");
const prism = document.getElementById("prism");

let currentScene = 0;

function showScene(index) {

  if (index < 0 || index >= scenes.length) {
    return;
  }

  currentScene = index;

  scenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === index);
  });
}


/* =========================================
   PRISM TRANSITION
========================================= */

function transitionTo(index) {

  if (index < 0 || index >= scenes.length) {
    return;
  }

  prism.classList.remove("active");

  /*
    Force browser reflow so the animation
    can restart every time.
  */
  void prism.offsetWidth;

  prism.classList.add("active");

  /*
    Change scene while the prism is covering
    the screen.
  */
  setTimeout(() => {
    showScene(index);
  }, 420);

  /*
    Remove the prism after animation.
  */
  setTimeout(() => {
    prism.classList.remove("active");
  }, 1050);
}


/* =========================================
   NEXT BUTTONS
========================================= */

document.querySelectorAll("[data-next]").forEach(button => {

  button.addEventListener("click", () => {

    transitionTo(currentScene + 1);

  });

});


/* =========================================
   TIME SELECTION
========================================= */

let selectedTime = null;

const timeButtons = document.querySelectorAll(".time-option");

timeButtons.forEach(button => {

  button.addEventListener("click", () => {

    timeButtons.forEach(btn => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedTime = button.dataset.time;

    document
      .getElementById("time-error")
      .classList.remove("show");

  });

});


/* =========================================
   SUBMIT
========================================= */

const submitButton = document.getElementById("submit-plan");

submitButton.addEventListener("click", async () => {

  const opinion =
    document
      .getElementById("opinion")
      .value
      .trim();

  const error =
    document.getElementById("time-error");


  /*
    Require a time.
  */

  if (!selectedTime) {

    error.classList.add("show");

    return;
  }


  /*
    Disable button while sending.
  */

  submitButton.disabled = true;

  submitButton.textContent = "SENDING...";


  /*
    Data sent to EmailJS.
  */

  const templateParams = {

    time: selectedTime,

    opinion: opinion || "No additional opinion.",

    submitted_at: new Date().toLocaleString(),

    page: window.location.href

  };


  try {

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );


    /*
      Put selected time on final screen.
    */

    document.getElementById(
      "final-time"
    ).textContent = selectedTime;


    /*
      Move to final screen.
    */

    transitionTo(5);


  } catch (error) {

    console.error(
      "EmailJS error:",
      error
    );

    submitButton.disabled = false;

    submitButton.textContent =
      "ARE YOU IN, DEAR STAR? →";

    alert(
      "Something went wrong sending the plan. Please try again."
    );

  }

});