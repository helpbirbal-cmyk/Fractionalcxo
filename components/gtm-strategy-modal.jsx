// components/gtm-strategy-modal.jsx
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const GTMStrategyModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    targetCustomer: '',
    coreValueProp: '',
    mainChannels: [],
    primaryGoal: '',
    email: ''
  });

  const industries = ['SaaS', 'E-commerce', 'FinTech', 'HealthTech', 'B2B Services', 'Marketplace', 'Other'];
  const goals = ['User Acquisition', 'Revenue Growth', 'Market Expansion', 'Product Launch', 'Brand Awareness'];
  const channels = ['SEO/Content', 'Paid Ads (PPC)', 'Social Media', 'Email Marketing', 'Partnerships', 'Events', 'Outreach'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
          ? [...prev.mainChannels, value]
          : prev.mainChannels.filter(channel => channel !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const generateStrategy = () => {
    const { industry, targetCustomer, coreValueProp, mainChannels, primaryGoal } = formData;

    const strategies = {
      acquisition: mainChannels.includes('Paid Ads (PPC)') ?
        `Launch targeted PPC campaigns focusing on "${coreValueProp}" for ${targetCustomer} segments.` :
        `Develop a content strategy around "${coreValueProp}" to attract ${targetCustomer} through organic search.`,

      messaging: `Refine your messaging to emphasize "${coreValueProp}" and how it specifically helps ${targetCustomer}.`,

      timeline: primaryGoal === 'Product Launch' ?
        '30-day pre-launch buzz building, 60-day intensive launch campaign, 90-day optimization phase.' :
        'Weeks 1-4: Foundation & Testing, Weeks 5-8: Scaling, Weeks 9-12: Optimization'
    };

    const recommendations = [
      `Focus on ${mainChannels.join(' and ')} as your primary acquisition channels.`,
      `Create a value proposition that clearly communicates: "${coreValueProp}"`,
      `Target your messaging specifically to ${targetCustomer}`,
      primaryGoal === 'Revenue Growth' ? 'Implement a lead scoring system to prioritize sales efforts.' : '',
      mainChannels.includes('SEO/Content') ? 'Develop pillar content around your core solution areas.' : '',
      industries.includes('SaaS') ? 'Consider a freemium or free trial model to reduce acquisition friction.' : ''
    ].filter(Boolean);

    return {
      strategies,
      recommendations,
      nextSteps: [
        'Finalize target customer personas',
        'Develop channel-specific KPIs',
        'Create 90-day execution roadmap',
        'Set up tracking and analytics'
      ]
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setShowResults(false);
    setFormData({
      companyName: '',
      industry: '',
      targetCustomer: '',
      coreValueProp: '',
      mainChannels: [],
      primaryGoal: '',
      email: ''
    });
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const strategy = showResults ? generateStrategy() : null;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                    onClick={handleClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                      {showResults ? 'Your GTM Plan Preview' : 'GTM Plan Builder'}
                    </Dialog.Title>

                    {!showResults ? (
                      <p className="text-sm text-gray-500 mt-2">
                        Generate GTM Plan & Get a Free Workshop
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500 mt-2">
                        Preliminary plan for {formData.companyName}
                      </p>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      {/* Step 1: Company Name */}
                      {currentStep === 1 && !showResults && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your company name"
                          />
                        </div>
                      )}

                      {/* Step 2: Industry */}
                      {currentStep === 2 && !showResults && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Industry *
                          </label>
                          <select
                            name="industry"
                            required
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select your industry</option>
                            {industries.map(industry => (
                              <option key={industry} value={industry}>{industry}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {/* Step 3: Target Customer */}
                      {currentStep === 3 && !showResults && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Who is your target customer? *
                          </label>
                          <input
                            type="text"
                            name="targetCustomer"
                            required
                            value={formData.targetCustomer}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., SaaS startups, e-commerce managers, etc."
                          />
                        </div>
                      )}

                      {/* Step 4: Value Proposition */}
                      {currentStep === 4 && !showResults && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What's your core value proposition? *
                          </label>
                          <textarea
                            name="coreValueProp"
                            required
                            value={formData.coreValueProp}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe what makes your solution unique"
                          />
                        </div>
                      )}

                      {/* Step 5: Goals & Channels */}
                      {currentStep === 5 && !showResults && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What are your primary goals? *
                          </label>
                          <select
                            name="primaryGoal"
                            required
                            value={formData.primaryGoal}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                          >
                            <option value="">Select primary goal</option>
                            {goals.map(goal => (
                              <option key={goal} value={goal}>{goal}</option>
                            ))}
                          </select>

                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Marketing Channels (Select all that apply)
                          </label>
                          <div className="space-y-2">
                            {channels.map(channel => (
                              <label key={channel} className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="mainChannels"
                                  value={channel}
                                  checked={formData.mainChannels.includes(channel)}
                                  onChange={handleChange}
                                  className="mr-2"
                                />
                                {channel}
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Results Display */}
                      {showResults && strategy && (
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Core Strategy</h4>
                              <p className="text-sm text-gray-700 mb-4">{strategy.strategies.acquisition}</p>
                              <p className="text-sm text-gray-700 mb-4">{strategy.strategies.messaging}</p>
                              <p className="text-sm text-gray-700">
                                <strong>Timeline:</strong> {strategy.strategies.timeline}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Key Recommendations</h4>
                              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                {strategy.recommendations.map((rec, index) => (
                                  <li key={index}>{rec}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                              {strategy.nextSteps.map((step, index) => (
                                <li key={index}>{step}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Get Your Full Strategy PDF</h4>
                            <p className="text-sm text-gray-600 mb-3">
                              Enter your email to receive the complete 12-page GTM strategy document.
                            </p>
                            <div className="flex gap-2">
                              <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                              <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                              >
                                Download PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      {!showResults && (
                        <div className="flex justify-between pt-4">
                          {currentStep > 1 && (
                            <button
                              type="button"
                              onClick={() => setCurrentStep(currentStep - 1)}
                              className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
                            >
                              ← Back
                            </button>
                          )}

                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm ml-auto"
                          >
                            {currentStep === 5 ? 'Generate Strategy' : 'Continue →'}
                          </button>
                        </div>
                      )}

                      {/* Results Actions */}
                      {showResults && (
                        <div className="flex justify-between pt-4">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
                          >
                            Start Over
                          </button>
                          <button
                            type="button"
                            onClick={handleClose}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
                          >
                            Close
                          </button>
                        </div>
                      )}
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
};

export default GTMStrategyModal;
