// components/gtm-strategy-tool.jsx
import React, { useState } from 'react';

const GTMStrategyTool = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    targetCustomer: '',
    coreValueProp: '',
    mainChannels: [],
    primaryGoal: '',
    email: '' // For downloading the full report
  });

  const industries = ['SaaS', 'E-commerce', 'FinTech', 'HealthTech', 'B2B Services', 'Marketplace', 'Other'];
  const goals = ['User Acquisition', 'Revenue Growth', 'Market Expansion', 'Product Launch', 'Brand Awareness'];
  const channels = ['SEO/Content', 'Paid Ads (PPC)', 'Social Media', 'Hybrid', 'Partnerships', 'Direct', 'Outreach'];

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
    // This is where the magic happens - simple AI-like logic
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

  const strategy = showResults ? generateStrategy() : null;

  if (showResults && strategy) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your GTM Strategy Preview</h2>
        <p className="text-gray-600 mb-6">Here's your preliminary plan for {formData.companyName}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Core Strategy</h3>
            <p className="text-gray-700 mb-4">{strategy.strategies.acquisition}</p>
            <p className="text-gray-700 mb-4">{strategy.strategies.messaging}</p>
            <p className="text-gray-700"><strong>Timeline:</strong> {strategy.strategies.timeline}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Recommendations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {strategy.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {strategy.nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-3">Get Your Full Strategy PDF</h3>
          <p className="text-gray-600 mb-3">Enter your email to receive the complete 12-page GTM strategy document.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Generate Your GTM Strategy</h2>
      <p className="text-gray-600 mb-6">Answer a few questions to get a customized go-to-market plan</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && (
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
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your company name"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry *
            </label>
            <select
              name="industry"
              required
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        )}

        {currentStep === 3 && (
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
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., SaaS startups, e-commerce managers, etc."
            />
          </div>
        )}

        {currentStep === 4 && (
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
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe what makes your solution unique"
            />
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What are your primary goals? *
            </label>
            <select
              name="primaryGoal"
              required
              value={formData.primaryGoal}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            >
              <option value="">Select primary goal</option>
              {goals.map(goal => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>

            <label className="block text-black text-sm font-medium text-gray-700 mb-2">
              Preferred Marketing Channels (Select all that apply)
            </label>
            <div className="text-black space-y-2">
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

        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              ← Back
            </button>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 ml-auto"
          >
            {currentStep === 5 ? 'Generate my Plan' : 'Continue →'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GTMStrategyTool;
