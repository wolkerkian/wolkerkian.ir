import React from 'react';
import { Link } from 'react-router-dom';

export default function WriteUp() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Page Header */}
      <div className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            My WriteUps
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* ==================== Writeup ==================== */}
        <section className="mt-12">
          <div className="space-y-6">

            <Link
              to="/3-vulnerabilities-in-university"
              className="block group"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-blue-500/40">
                <h3 className="text-2xl font-semibold mb-2 text-blue-500">
                  3 Vulnerabilities on University Website
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  2 IDORs + 1 High Business Logic + 1 Physical Race Condition vulnerability that can be chained
                  with a <b>Vital</b> vulnerability from two years ago.
                </p>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                  June 2026
                </p>
              </div>
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}