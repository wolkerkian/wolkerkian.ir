import React from 'react';

export default function ForexAuto() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Forex Automation
          </h1>
          <p className="text-xl leading-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            8+ years Forex Expert Advisor<br className="mb-2 block" />
            • Meta Qoutes Language 4 <span className="font-semibold text-blue-600">(MQL4)</span> <br className="mb-2 block" />
            • TradingView Indicators <span className="font-semibold text-blue-600">(Pine Script)</span>
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* ==================== SKILLS ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold my-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-lg leading-relaxed">
            <div>• Metatrader 4 Expert Advisor Coding <span className="font-semibold text-blue-600">MQL4</span></div>
            <div>• TradingView Indicator Coding <span className="font-semibold text-blue-600">Pine Script</span></div>
          </div>
        </section>

        {/* ==================== COURSES ==================== */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Courses & Learning</h2>
          
          <div className="space-y-2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">Meta Qoutes Language 4 (MQL4)</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">Books, online courses & hand-on practice</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Pine Script</h3>
              <p className="text-gray-600 md:text-base text-sm dark:text-gray-400">self-study & hand-on practice</p>
            </div>
          </div>
        </section>


        {/* ==================== TOOLS (3 parts, 2 images) ==================== */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Bots & Indicators I Created</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Tool 1 - Burp Suite (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="public/images/Tradingview.png" 
                alt="R & S Indicator"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">R & S Indicator (Tradingview)</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Calculate most powerful <b className="text-blue-600"> resistance and support</b> of the chart.
                </p>
              </div>
            </div>

            {/* Tool 2 - Python Security Tools (with image) */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="public/images/MQL4.png"
                alt="Market Structure"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Market Structure (MQL4)</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Calculate Reactions of the <b className="text-blue-600">chart, candles & market</b>.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}