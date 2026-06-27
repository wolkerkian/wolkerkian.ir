import React, { useState } from "react";

const persianContent = {
  title: "سه آسیب‌پذیری در سامانه تغذیه یک دانشگاه",
  description: "در این WriteUp تجربه پیدا کردن چند آسیب‌پذیری در سامانه تغذیه یکی از دانشگاه‌های کشور را توضیح می‌دهم. تمامی موارد پیش از انتشار این مطلب fix شده‌اند و به دلیل محرمانگی، از ذکر نام دانشگاه، شرکت، Endpointها و جزئیات حساس خودداری شده است.",
};

const englishContent = {
  title: "Three Vulnerabilities in a University's Food Reservation System",
  description: "In this WriteUp, I explain my experience of finding several vulnerabilities in one of the country's university food reservation systems. All issues were fixed before publishing this post. Due to confidentiality, the name of the university, company, endpoints, and sensitive details have been omitted.",
};

export default function ThreeVulnerabilitiesInUniversity() {
  const [language, setLanguage] = useState('en');

  const isRtl = language === 'en';
  const content = language === 'en' ? persianContent : englishContent;

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-gray-200 dark:border-gray-800">
        
        <div className={`max-w-4xl mx-auto px-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                  {/* Language Switcher - at top of main */}
        <div className={`flex ${isRtl ? 'justify-end' : 'justify-start'} mb-8`}>
          <button
            onClick={() => setLanguage(language === 'fa' ? 'en' : 'fa')}
            className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm font-medium flex items-center gap-2 border border-gray-300 dark:border-gray-700"
          >
            <span>{language === 'fa' ? '🇬🇧 English' : '🇮🇷 فارسی'}</span>
          </button>
        </div>
          <p className="text-blue-500 font-semibold mb-3">
            Web Security • 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {content.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {content.description}
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-12">


        <img
          src="/images/writeups/university-cover.png"
          alt=""
          className="w-full rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800 mb-12"
        />

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* شروع ماجرا / How It Started */}
          <h2><b>{isRtl ? "شروع ماجرا" : "How It Started"}</b></h2>
          <p>
            {isRtl 
              ? "همه چیز از یک مشکل ساده شروع شد. به دلیل مشکل کارت بانکیم و از سر کنجکاوی تصمیم گرفتم سامانه رزرو غذای این دانشگاه را بررسی کنم و ببینم آیا آسیب‌پذیری جالبی روی آن وجود دارد یا خیر."
              : "Everything started with a simple problem. Because of an issue with my bank card and out of curiosity, I decided to examine the university's food reservation system to see if there were any interesting vulnerabilities."
            }
          </p>
          <p>
            {isRtl 
              ? "بررسی را از بخش پرداخت آغاز کردم و کم‌کم به فرآیند رزرو غذا رسیدم؛ جایی که طبق منطق سیستم، اعتبار کیف پول کم می‌شد و غذای انتخابی رزرو می‌شد."
              : "I started the investigation from the payment section and gradually reached the food reservation process; where, according to the system logic, wallet credit would be deducted and the selected meal would be reserved."
            }
          </p>

          <img src="/src/images/writeups/query1.png" alt="" className="rounded-sm my-8" />

          {/* اولین نشانه / First Sign */}
          <h2><b>{isRtl ? "اولین نشانه" : "First Sign"}</b></h2>
          <p>
            {isRtl 
              ? "بعد از بررسی فرآیند رزرو، سراغ لغو رزرو رفتم و شروع به تغییر پارامترهای درخواست POST کردم."
              : "After examining the reservation process, I went to the cancel reservation section and started changing the POST request parameters."
            }
          </p>
          <p>
            {isRtl 
              ? "اولین چیزی که توجهم را جلب کرد این بود که با تغییر شناسه غذا، می‌توانستم غذایی را رزرو کنم که اصلاً داخل برنامه غذایی نمایش داده نمی‌شد. همین موضوع اولین نشانه‌ای بود که مطمئن شوم اعتبارسنجی سمت سرور به درستی انجام نشده است."
              : "The first thing that caught my attention was that by changing the meal ID, I could reserve a meal that wasn't even displayed in the meal plan. This was the first sign that server-side validation wasn't done properly."
            }
          </p>
          <p>
            {isRtl 
              ? "دقیقاً یادم هست اولین آموزش Burp Suite را در سبزلرن دیده بودم و چون هنوز دیدگاه امنیتی ساختارمندی نداشتم، کاملاً ناخودآگاه شروع به تست‌های Out of the Box کردم."
              : "I clearly remember watching my first Burp Suite tutorial on Sabzlearn. Since I didn't yet have a structured security mindset, I unconsciously started doing Out of the Box tests."
            }
          </p>

          <br />
          <h2><b>{isRtl ? "اولین آسیب‌پذیری" : "First Vulnerability"}</b></h2>
          <p>
            {isRtl 
              ? "درخواست لغو رزرو را یک بار ارسال کردم و همه چیز طبیعی بود. اما در تست بعدی، همان خط مربوط به بدنه درخواست POST را دوباره کپی کردم و زیر خودش قرار دادم..."
              : "I sent the cancel reservation request once and everything was normal. But in the next test, I copied the same line from the POST request body and placed it under itself..."
            }
          </p>
          <p><strong>{isRtl ? "بنگ!!!" : "Bang!!!"}</strong></p>
          <p>
            {isRtl 
              ? "اعتبار کیف پولم دو بار افزایش پیدا کرد."
              : "My wallet credit increased twice."
            }
          </p>

          <img src="/src/images/writeups/query2.png" alt="" className="rounded-sm my-8" />

          <p>
            {isRtl 
              ? "این یعنی پردازش درخواست به شکلی انجام می‌شد که هر خط اضافه مجدداً اجرا می‌شد و امکان افزایش اعتبار بیش از مقدار واقعی وجود داشت."
              : "This meant the request processing was such that each additional line would be executed again, allowing credit to be increased beyond the actual amount."
            }
          </p>

          <h2>{isRtl ? "سورپرایز بعدی" : "Next Surprise"}</h2>
          <p>
            {isRtl 
              ? "در ادامه نگاهی به HTML صفحه انداختم و متوجه شدم Endpoint مربوط به انتقال اعتبار به صورت Comment داخل صفحه باقی مانده است."
              : "While looking at the page's HTML, I noticed that the credit transfer endpoint was left as a comment in the page."
            }
          </p>
          <p>
            {isRtl 
              ? "همان لحظه متوجه شدم اگر این آسیب‌پذیری با Endpoint انتقال اعتبار ترکیب شود، عملاً امکان ایجاد اعتبار نامحدود و انتقال آن به سایر کاربران وجود خواهد داشت."
              : "At that moment, I realized that if this vulnerability was combined with the credit transfer endpoint, it would effectively allow unlimited credit creation and transfer to other users."
            }
          </p>

          <img src="/src/images/writeups/transfer.gif" alt="" className="rounded-2xl my-8" />

          <h2>{isRtl ? "گزارش اولیه" : "Initial Report"}</h2>
          <p>
            {isRtl 
              ? "آسیب‌پذیری را به مسئولان مربوطه گزارش دادم تا برای شرکت توسعه‌دهنده ارسال شود. امیدوار بودم حداقل یک یادگاری یا Bounty کوچک دریافت کنم، اما هیچ پاسخی دریافت نشد."
              : "I reported the vulnerability to the relevant authorities to be forwarded to the development company. I hoped to at least receive a souvenir or a small bounty, but I received no response."
            }
          </p>

          <h2>{isRtl ? "یک سال بعد..." : "One Year Later..."}</h2>
          <p>
            {isRtl 
              ? "حدود یک سال گذشت و تصمیم گرفتم دوباره سامانه را بررسی کنم."
              : "About a year passed and I decided to check the system again."
            }
          </p>
          <p>
            {isRtl 
              ? "کمتر از نیم ساعت طول کشید تا یک IDOR دیگر در بخش فیش رزرو پیدا کنم. این اندپوینت کدملی و نام برمی‌گردوند. تجربه نشان داده بود وقتی یک قسمت از سیستم اعتبارسنجی درستی ندارد، معمولاً بخش‌های دیگر هم وضعیت مشابهی دارند."
              : "It took less than half an hour to find another IDOR in the reservation receipt section. This endpoint returned national ID and name. Experience had shown that when one part of the system lacks proper validation, other parts usually have similar issues."
            }
          </p>
          <p>POST /UserHome/ShowTransactions<br />ID=XXXXXXX</p>

          <img src="/images/writeups/IDOR.png" alt="" className="rounded-2xl my-8" />

          <h2>{isRtl ? "دومین IDOR" : "Second IDOR"}</h2>
          <p>
            {isRtl 
              ? "سپس Endpoint انتقال اعتبار را بررسی کردم و متوجه شدم با Brute Force می‌توان اطلاعات کاربران را استخراج کرد. این آسیب‌پذیری اطلاعاتی مانند نام و شماره دانشجویی کاربران را برمی‌گرداند."
              : "Then I examined the credit transfer endpoint and realized that user information could be extracted via Brute Force. This vulnerability returned information such as users' names and student numbers."
            }
          </p>

          <br />
          <h2>Chain Vulnerabilities ;)</h2>
          <p>
            {isRtl 
              ? "با کنار هم گذاشتن کدملی و کد دانشجویی، یوزر و پس تمام سامانه های تمام دانشجو هارو داشتم،"
              : "By combining national ID and student ID, I had the username and password for all students' accounts across all domains."
            }
          </p>
          <p>mass account takeover on all domains!!! Vital</p>

          <img src="/src/images/writeups/images.jpg" alt="" className="rounded-sm my-8" />
          <h2>{isRtl ? "برگشت آسیب‌پذیری اول!" : "Return of the First Vulnerability!"}</h2>
          <p>
            {isRtl 
              ? "در نهایت دوباره همان بخشی را که سال قبل اصلاح شده بود تست کردم."
              : "Finally, I tested the same section that had been fixed the previous year."
            }
          </p>
          <p>
            {isRtl 
              ? "محدودیت سیستم این بود که هر دانشجو فقط یک بار می‌توانست یک غذا را رزرو کند."
              : "The system restriction was that each student could only reserve one meal once."
            }
          </p>
          <p>
            {isRtl 
              ? "دوباره همان تکنیک قبلی را استفاده کردم و درخواست رزرو را چند بار داخل بدنه درخواست کپی کردم..."
              : "I used the same previous technique again and copied the reservation request multiple times inside the request body..."
            }
          </p>
          <p><strong>{isRtl ? "بنگ!" : "Bang!"}</strong></p>
          <p>
            {isRtl 
              ? "به تعداد خطوط کپی شده، غذا رزرو شد. مشخص شد فقط بخش لغو رزرو اصلاح شده و همان منطق آسیب‌پذیر همچنان در بخش رزرو وجود دارد."
              : "The number of meals reserved equaled the number of copied lines. It turned out that only the cancel reservation section had been fixed, while the same vulnerable logic still existed in the reservation section."
            }
          </p>


          <h2>{isRtl ? "پایان ماجرا" : "The End"}</h2>
          <p>
            {isRtl 
              ? "در مجموع چهار آسیب‌پذیری را مستقیماً به شرکت توسعه‌دهنده سامانه در تهران گزارش کردم."
              : "In total, I reported four vulnerabilities directly to the development company in Tehran."
            }
          </p>
          <p>
            {isRtl 
              ? "برخورد تیم بسیار حرفه‌ای و دوستانه بود و در نهایت یک Bounty کوچک اما ارزشمند دریافت کردم؛ هدیه‌ای که بعد از این مسیر، واقعاً لذت‌بخش بود. این اتفاقات از سه سال گذشته شروع شد!"
              : "The team was very professional and friendly, and I eventually received a small but valuable bounty — a truly enjoyable reward after this journey. These events started three years ago!"
            }
          </p>
          <p>
            {isRtl 
              ? "در WriteUpهای بعدی بیشتر از مسیر یادگیری و تجربه‌های Bug Bounty خواهم گفت."
              : "In future WriteUps, I'll talk more about the learning path and Bug Bounty experiences."
            }
          </p>

          <p className="text-center font-semibold mt-12">
            {isRtl ? "تا WriteUp بعدی، بدرود 👋" : "Until the next WriteUp, goodbye 👋"}
          </p>
        </article>
      </main>
    </div>
  );
}