// components/competitive-audit-section.jsx
import React from "react";

const CompetitiveAuditSection = ({ onOpenAudit }) => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Don't Fly Blind. Know Your Competition.
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our audits now include a powerful competitive benchmarking analysis, powered by SEMrush, to give you an undeniable edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div>
            <img
              className="rounded-lg shadow-xl border border-gray-200"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80" // Replace with an actual screenshot of a SEMrush competitor report or a relevant graphic
              alt="Competitive Analysis Dashboard"
            />
          </div>

          {/* Right Column - Features and CTA */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Uncover Your True Opportunities</h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Keyword & Traffic Gaps:</strong> Discover exactly what your competitors rank for that you don't.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Paid Strategy Insights:</strong> See their ad copy, spend, and landing pages to refine your own PPC strategy.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Backlink Analysis:</strong> Get a list of authoritative sites linking to them—your roadmap for superior link-building.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700"><strong>Actionable "Quick-Win" Report:</strong> We don't just give you data; we give you a prioritized plan of attack.</span>
              </li>
            </ul>

            {/* Call to Action Button */}
            <button
              onClick={onOpenAudit}
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-md transition-all duration-200"
            >
              Unlock Your Competitive Audit
            </button>
            <p className="mt-3 text-sm text-gray-500 text-center md:text-left">
              See exactly how you stack up and where your next win is hiding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAuditSection;
