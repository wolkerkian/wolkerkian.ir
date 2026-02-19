import React from 'react';

export default function CyberSecurity() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Cyber Security
          </h1>
          <p className="text-xl leading-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            3+ years Bug Hunting <br className="mb-2 block" />
            • Web Application Security <br className="mb-2 block" />
            • Custom Tool Development
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* ==================== SKILLS ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold my-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-lg leading-relaxed">
            <div>• Code comprehension and reading: <span className="font-semibold text-blue-600">Python & JavaScript</span></div>
            <div>• Tool development using <span className="font-semibold">Linux Shell and Python</span></div>
            <div>• Web Scraping</div>
            <div>• TRP, VTR & ASVS Methodologies</div>
            <div>• Implement <span className="font-semibold text-blue-600">React, Node.js & PHP</span> Labs and Websites</div>
            <div>• Full stack web app development <span className="font-semibold text-blue-600">( Api , DB & Authentication )</span></div>
          </div>
        </section>

        {/* ==================== COURSES ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Courses & Learning</h2>
          
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">Web App Security</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">OWASP Zero & Hunt by Voorivex • Yashar Shahinzadeh</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Python Programming</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Tehran Technical Complex (Borujerd Branch)</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Linux Essentials, Network+, CEH</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study via YouTube</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">HTML, CSS, JavaScript</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study ,online resources & hand-on practice</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Burp Suite</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study ,online resources & hand-on practice</p>
            </div>
          </div>
        </section>

        {/* ==================== HONORS ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-12 text-center">Honors & Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl">
              <p className="text-2xl font-medium leading-relaxed">
                Rank <span className="font-bold text-blue-600">81</span> on Ravro Platform
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
              + Top 20 on multiple Bugparty events<br className="mb-2 block" />
              + Participated in the BluBank Deep Dive event
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl">
              <p className="text-2xl font-medium leading-relaxed">
                Organizer of cybersecurity seminar series
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <a href="src/documents/seminar.pdf">Hackers & Hunters I at Arak University (Slides PDF)</a><br className="mb-2 block" />
                <a href="src/documents/seminar2.pdf">Hackers & Hunters II at Arak University (Slides PDF)</a>
              </p>
            </div>
          </div>
        </section>

        {/* ==================== TOOLS (3 parts, 2 images) ==================== */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Tools I Created</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tool 1 - Burp Suite (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <a href="https://www.linkedin.com/posts/kian-darafshdar_bugbounty-bughunter-wideabrrecon-ugcPost-7362497634491604992-MF3P" target="_blank">
              <img 
                src="public/images/night_stalker.jpg" 
                alt="Night Stalker"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Night Stalker</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Gather all subdomains from: <b className="text-blue-600">subfinder, github-subdomains, gau + unfurl</b>.
                  bruteforce subdomains with <b className="text-blue-600">puredns</b>.
                  then merge, sort and uniqe them.
                </p>
              </div>
              </a>
            </div>

            {/* Tool 2 - Python Security Tools (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <a href="https://www.linkedin.com/posts/kian-darafshdar_paramizer-my-new-tool-that-gather-specific-ugcPost-7397573748133933056-Dcr5" target="_blank">
              <img 
                src="public/images/paramizer.png"
                alt="Paramizer"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Paramizer</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  gather specific URLs from <b className="text-blue-600">gau, Wayback & github</b>,
                  then use <b className="text-blue-600">Fallparams</b> from <i>Ayrix</i> on all them.
                </p>
              </div>
              </a>
            </div>

            {/* Tool 3 - Linux Shell Tools (no image - gradient placeholder) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <a href="https://www.linkedin.com/posts/kian-darafshdar_bugbounty-ugcPost-7359528983673114626-NWa-" target="_blank">
              <img 
                src="public/images/Desolator.jpg" 
                alt="Desolator"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Desolator</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  this tool gather all possible Url's from different sources and tools.<br className="mb-2 block" />
                  simple and fast.
                </p>
              </div>
              </a>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}