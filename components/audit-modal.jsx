// components/audit-modal.jsx
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';


const simulateQuickAnalysis = (website, competitor) => {
  // This function creates a simple, predictable "fingerprint" from the website name
  // This ensures the same website always gets the same "result"
  const getSeedFromString = (str) => {
    let seed = 0;
    for (let i = 0; i < str.length; i++) {
      seed = ((seed << 5) - seed) + str.charCodeAt(i);
      seed = seed & seed; // Convert to 32-bit integer
    }
    return Math.abs(seed);
  };

  const websiteSeed = getSeedFromString(website);
  const competitorSeed = competitor ? getSeedFromString(competitor) : 0;

  // Use the seed to generate predictable "random" numbers for this website
  const pseudoRandom = (max) => (websiteSeed % max) + 1;
  const pseudoRandomCompetitor = (max) => ((websiteSeed + competitorSeed) % max) + 1;

  // Insights that vary based on the website and competitor
  const insights = [
    `Initial crawl shows ${pseudoRandomCompetitor(50) + 80} high-value keywords that ${competitor ? competitor + ' ranks for' : 'your competitors rank for'} but you don't.`,
    `Your site loads ${pseudoRandom(25) + 5}% slower than the average top-ranked site in your niche.`,
    `We identified ${pseudoRandom(4) + 1} major technical SEO issues that could be blocking your search visibility.`,
    `Your top competitor spends an estimated $${(pseudoRandomCompetitor(20) + 3).toLocaleString()}k/month on Google Ads targeting your core service terms.`,
    `Mobile responsiveness analysis shows ${pseudoRandom(5) + 2} key areas for improvement.`,
    `Content gap analysis reveals ${pseudoRandomCompetitor(7) + 2} missing cornerstone content pieces.`,
  ];

  // Always pick the first 2 insights for this website to ensure consistency
  const selectedInsights = insights.slice(0, 2);

  // Generate a consistent score for this website
  const consistentScore = 50 + (websiteSeed % 30); // Score between 50-80

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        insights: selectedInsights,
        opportunity: consistentScore > 65 ? 'High' : (consistentScore > 55 ? 'Medium' : 'Significant'),
        score: consistentScore
      });
    }, 2000);
  });
};

export default function AuditModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false); // New state for loading
  const [quickResults, setQuickResults] = useState(null); // New state for results
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    challenges: '',
    competitors: '',
    objectives: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // NEW FUNCTION: Handle the quick analysis
  const handleQuickAnalysis = async () => {
    if (!formData.website) return; // Don't run without a website
    setIsAnalyzing(true);
    try {
      const results = await simulateQuickAnalysis(formData.website, formData.competitors);
      setQuickResults(results);
      setCurrentStep(4); // Move to the results step (changed from 3 to 4)
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full form submitted with data:', formData);
    setCurrentStep(7); // Show final success message (changed from 6 to 7)
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const closeModal = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(1);
      setIsAnalyzing(false);
      setQuickResults(null);
      setFormData({
        name: '',
        email: '',
        website: '',
        challenges: '',
        competitors: '',
        objectives: ''
      });
    }, 500);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                      Request Your Free Growth Audit
                    </Dialog.Title>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      {/* Step 1: Contact Info */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-500">Tell us a bit about yourself.</p>
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                            />
                          </div>
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                              Website URL
                            </label>
                            <input
                              type="url"
                              name="website"
                              id="website"
                              required
                              value={formData.website}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Website & Competitor Analysis */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-500">Let's unlock some quick insights about your online presence.</p>
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                              Your Website URL *
                            </label>
                            <input
                              type="url"
                              name="website"
                              id="website"
                              required
                              value={formData.website}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="competitors" className="block text-sm font-medium text-gray-700">
                              Main Competitor's Website (Optional)
                            </label>
                            <input
                              type="text"
                              name="competitors"
                              id="competitors"
                              value={formData.competitors}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="https://competitor.com"
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Providing a competitor unlocks a comparative analysis.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Challenges */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-500">What are your biggest marketing challenges?</p>
                          <div>
                            <label htmlFor="challenges" className="block text-sm font-medium text-gray-700">
                              Current Challenges
                            </label>
                            <textarea
                              id="challenges"
                              name="challenges"
                              rows={4}
                              value={formData.challenges}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="e.g., Low website traffic, declining conversion rates, unclear ROI..."
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Quick Results */}
                      {currentStep === 4 && quickResults && (
                        <div className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                          <h4 className="text-lg font-bold text-gray-900">Here's a sneak peek at your potential:</h4>
                          <div className="flex items-baseline mb-4">
                            <span className="text-4xl font-extrabold text-blue-700">{quickResults.score}/100</span>
                            <span className="ml-2 text-sm font-medium text-blue-700">Initial Score</span>
                          </div>
                          <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${quickResults.opportunity === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {quickResults.opportunity} Opportunity
                            </span>
                          </div>
                          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                            {quickResults.insights.map((insight, index) => (
                              <li key={index}>{insight}</li>
                            ))}
                          </ul>
                          <p className="text-sm text-gray-600 font-medium mt-4">Imagine what we could find with a deep dive. Complete your audit request to get the full report.</p>
                        </div>
                      )}

                      {/* Step 6: Objectives */}
                      {currentStep === 6 && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-500">What are your primary goals for the next 90 days?</p>
                          <div>
                            <label htmlFor="objectives" className="block text-sm font-medium text-gray-700">
                              Primary Objectives
                            </label>
                            <textarea
                              id="objectives"
                              name="objectives"
                              rows={4}
                              value={formData.objectives}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="e.g., Increase lead volume by 20%, improve organic traffic, launch a new PPC campaign..."
                            />
                          </div>
                        </div>
                      )}


                      {/* Step 5: Competitors */}
                      {currentStep === 5 && (
                        <div className="space-y-4">
                          <p className="text-sm text-gray-500">Help us benchmark your performance. (Optional but recommended)</p>
                          <div>
                            <label htmlFor="competitors" className="block text-sm font-medium text-gray-700">
                              Who are your 2-3 main online competitors?
                            </label>
                            <textarea
                              id="competitors"
                              name="competitors"
                              rows={2}
                              value={formData.competitors}
                              onChange={handleChange}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                              placeholder="e.g., competitor1.com, competitor2.com..."
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Providing this allows us to include a detailed competitive analysis in your audit.
                            </p>
                          </div>
                        </div>
                      )}



                      {/* Step 7: Success Message */}
                      {currentStep === 7 && (
                        <div>
                          <p className="text-sm text-gray-500">
                            Thank you, <strong>{formData.name}</strong>! Your audit request has been received.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            We are now analyzing <strong>{formData.website}</strong>. If you provided competitor URLs, we are running a detailed benchmark against them. You can expect your comprehensive report in your inbox soon.
                          </p>
                        </div>
                      )}

                      {/* Navigation Buttons - FIXED */}
                      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                        {/* Back Button - Show on steps 2, 3, 5, 6 */}
                        {[2, 3, 4, 5, 6].includes(currentStep) && (
                          <button
                            type="button"
                            onClick={prevStep}
                            className="mt-3 sm:mt-0 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:text-sm"
                          >
                            Back
                          </button>
                        )}

                        {/* Next Button - Show on steps 1, 3 */}
                        {[1, 3,5].includes(currentStep) && (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            Next
                          </button>
                        )}

                        {/* Analyze Button - Show on step 2 */}
                        {currentStep === 2 && (
                          <button
                            type="button"
                            onClick={handleQuickAnalysis}
                            disabled={isAnalyzing || !formData.website}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed sm:col-start-2 sm:text-sm"
                          >
                            {isAnalyzing ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Analyzing...
                              </>
                            ) : (
                              'Analyze My Site'
                            )}
                          </button>
                        )}

                        {/* Continue Button - Show on step 4 (results) */}
                        {currentStep === 4 && (
                          <button
                            type="button"
                            onClick={nextStep}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            Continue to Full Audit
                          </button>
                        )}

                        {/* Submit Button - Show on step 6 */}
                        {currentStep === 6 && (
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            Request My Full Audit
                          </button>
                        )}
                        {currentStep === 7 && (
                          <button type="button" onClick={closeModal} className="...">
                            Close
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
