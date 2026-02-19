import React from 'react';

export default function Experiances() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            My Experiances
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* ==================== SKILLS ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold my-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 text-lg leading-relaxed">
            <div>• Native Persian language & fluent English language</div>
            <div>• Web Project Managing</div>
            <div>• Marketing</div>
            <div>• Good team-work</div>
            <div>• CEO of <span className="font-semibold text-blue-600">Sianovatech</span> organization  (2023-2024)  Cyber security team </div>
            <div>• CEO of <span className="font-semibold text-blue-600">OriginX</span> organization  (2025-Now) Web Development Team </div>
          </div>
        </section>

        {/* ==================== COURSES ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Interests</h2>
          
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 px-8 py-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2 ">Music (Harmonica & Guitar)</h3>
            </div>

            <div className="bg-white dark:bg-gray-900 px-8 py-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2 ">Chess</h3>
            </div>

            <div className="bg-white dark:bg-gray-900 px-8 py-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2 ">Game (Minecraft & Dota2)</h3>
            </div>
          </div>
        </section>


        {/* ==================== TOOLS (3 parts, 2 images) ==================== */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Other activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tool 1 - Burp Suite (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
               <img 
                src="src/assets/images/sianovatech.jpg" 
                alt="sianovatech"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Computer World Conference <span className="text-sm text-blue-600">(Arak University)</span></h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All Programming fields, AI history,<br className="mb-2 block" /> cyber security & Differential privacy.<br className="mb-2 block" /> by Sianovatech team.
                </p>
              </div>
            </div>

            {/* Tool 2 - Python Security Tools (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
               <img 
                src="src/assets/images/originx.png" 
                alt="OriginX"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Web Development Team CEO</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  UI UX🎨, Front-end🖼, back-end🎛, security🔒, test📊 & deployment🛅
                </p>
              </div>
            </div>

            {/* Tool 3 - Linux Shell Tools (no image - gradient placeholder) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="src/assets/images/python.jpg" 
                alt="Portfolio"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Teaching python language</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <b className="text-blue-600">My own method embedded with AI.</b><br className="mb-2 block" />
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}