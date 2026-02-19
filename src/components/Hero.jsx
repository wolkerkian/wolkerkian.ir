export default function Hero() {
  return (
    <section className="relative md:h-[90vh] flex items-center justify-center px-6 pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="relative z-10 max-w-6xl w-full md:h-full grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Image */}
        <div className="relative aspect-square md:aspect-[4/5] md:h-full md:ml-[15vh] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40">
          <img
            src="/src/assets/images/avatar.jpg"
            alt="my portrait"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* optional overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:hidden" />
        </div>

        {/* Right - Info Card */}
<div className="relative md:h-[40vh] bg-white/90 md:t-0 dark:bg-gray-900/90 backdrop-blur-sm p-8 md:py-9 md:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-between">
  <div>
    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
      Kian Darafshdar
    </h2>
    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6 md:mb-8 leading-relaxed">
      <a href="/cyber-security">• Cyber Security</a><br className="mb-2 block" />
      <a href="/web-development">• Web Development</a><br className="mb-2 block" />
      <a href="/forex-automation">• Forex Automation</a>
    </p>
    
  </div>

  {/* Social links at bottom */}
      <div className="flex items-center justify-center gap-10 md:gap-16">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/kian-darafshdar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] transition-colors duration-200"
          aria-label="LinkedIn profile"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/wolkerkian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-[#E1306C] transition-colors duration-200"
          aria-label="Instagram profile"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.225.273 2.648.12 7.006.062 8.287.048 8.694.048 12c0 3.306.014 3.714.072 4.994.153 4.358 2.575 6.781 6.933 6.934 1.28.058 1.688.072 4.948.072 3.26 0 3.668-.014 4.948-.072 4.358-.153 6.78-2.576 6.933-6.934.058-1.28.072-1.688.072-4.994 0-3.306-.014-3.714-.072-4.994C23.727 2.648 21.205.225 16.847.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
          </svg>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/WolkerKian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-[#26A5E4] transition-colors duration-200"
          aria-label="Telegram profile"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.639-17.121c.373-1.747-.678-2.567-1.962-2.012l-17.998 6.917c-1.855.742-1.838 1.786-.308 2.258l4.617 1.438 10.724-6.751c.503-.313.943-.144.606.313l-8.604 7.769z"/>
          </svg>
        </a>

        {/* Gmail */}
        <a
          href="mailto:wolkerkian@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-[#EA4335] transition-colors duration-200"
          aria-label="Send email"
        >
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>    
      <p className="text-base mt-12 md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Hello! I'm Kian! 👋<br />
        I've been passionate about programming for over 9 years now — starting with simple scripts and evolving into cybersecurity, full-stack web development, and automated trading systems.<br />
        I truly value <i><b>teamwork</b></i> & <i><b>honesty</b></i>. Whether it's hunting bugs, crafting clean code, or optimizing trading bots, I love collaborating with people who share the same drive.<br />
        <p className="text-sm py-6">Feel free to check out any part of this portfolio!</p>
      </p>
    </div>

      </div>
    </section>
  );
}