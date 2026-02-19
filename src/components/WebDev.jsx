import React from 'react';

export default function WebDev() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Web Development
          </h1>
          <p className="text-xl leading-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            2+ years Web Development <br className="mb-2 block" />
            • Front-End (React) <br className="mb-2 block" />
            • Back-End (Api, Database, Authentication)
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* ==================== SKILLS ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold my-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 text-lg leading-relaxed">
            <div>• Create front of the web app <span className="font-semibold text-blue-600">HTML, CSS(Tailwind), JS</span></div>
            <div>• familiarity with JS Frameworks <span className="font-semibold text-blue-600">(React)</span></div>
            <div>• familiarity with Back-end Frameworks <span className="font-semibold text-blue-600">(Node.js , Python , PHP)</span></div>
            <div>• Implement different Authentication methods <span className="font-semibold text-sm text-blue-600">(Cookie, Session & Token)</span></div>
            <div>• familiarity with different Api types</div>
            <div>• <span className="font-semibold text-blue-600">MYSQL</span> Database implementation</div>
          </div>
        </section>

        {/* ==================== COURSES ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Courses & Learning</h2>
          
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">HTML, CSS, JS</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study ,online resources (FrontendMasters) & hand-on practice</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">React</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study & hand-on practice</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Linux Essentials, Network+</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study via YouTube</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">MYSQL database</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Self-study ,university & hand-on practice</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Web App Security</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">over 3+ years web application security (OWASP)</p>
            </div>
          </div>
        </section>


        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">web pages I Created</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <a href="https://drhamedipharma.com" target="_blank">
                <video
                src="/videos/drhamedipharma.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                >
                </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">drhamedipharma.com</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  i was <b className="text-blue-600">project manager</b> of this web shop! 
                </p>
              </div>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
                <video
                src="/videos/arman_collection.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                >
                </video>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Arman Collection</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Raw <b className="text-blue-600">HTML, CSS & JS.</b><br className="mb-2 block" />
                  Raw <b className="text-blue-600">PHP</b> back-end, <b className="text-blue-600"><i>MYSQL</i></b> Database.
                  No Frameworks!
                </p>
              </div>
            </div>
              <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <a href="https://wolkerkian.ir" target="_blank">
              <img 
                src="/images/portfolio.jpg" 
                alt="Portfolio"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">This Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  <b className="text-blue-600">React + Tailwind CSS</b><br className="mb-2 block" />
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