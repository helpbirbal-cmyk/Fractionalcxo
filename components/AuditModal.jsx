// components/AuditModal.jsx  GTM
import React, { useState } from 'react';


const AuditModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    competitorName: '',
    targetAudience: '',
    valueProposition: '',
    marketingChannels: '',
    kpis: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Final GTM Strategy Data:', formData);
    alert('Thank you for submitting! Your custom report will be generated shortly.');
    setStep(1); // Reset form
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">GTM Strategy Builder</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl font-light leading-none">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Business & Competitor */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 1: Your Business & Competitors</h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Are you a B2B or B2C business?</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="businessType" value="B2B" checked={formData.businessType === 'B2B'} onChange={handleInputChange} className="form-radio text-purple-600" />
                    <span className="ml-2">B2B</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="businessType" value="B2C" checked={formData.businessType === 'B2C'} onChange={handleInputChange} className="form-radio text-purple-600" />
                    <span className="ml-2">B2C</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="competitorName" className="block text-gray-700 font-medium mb-2">Who is your main competitor?</label>
                <input
                  type="text"
                  id="competitorName"
                  name="competitorName"
                  value={formData.competitorName}
                  onChange={handleInputChange}
                  placeholder="e.g., Shopify, Salesforce, etc."
                  className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <button type="button" onClick={nextStep} className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700">
                Next
              </button>
            </div>
          )}

          {/* Step 2: Customer & Value Prop */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 2: Customer & Value Proposition</h3>
              <div className="mb-4">
                <label htmlFor="targetAudience" className="block text-gray-700 font-medium mb-2">Describe your ideal customer.</label>
                <textarea
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., B2B: Small businesses in the tech sector, or B2C: Young adults interested in sustainability."
                  className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="valueProposition" className="block text-gray-700 font-medium mb-2">What's your unique value proposition?</label>
                <textarea
                  id="valueProposition"
                  name="valueProposition"
                  value={formData.valueProposition}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., We provide fast, eco-friendly delivery for local businesses."
                  className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400">
                  Back
                </button>
                <button type="button" onClick={nextStep} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Channels & KPIs */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 3: Channels & KPIs</h3>
              <div className="mb-4">
                <label htmlFor="marketingChannels" className="block text-gray-700 font-medium mb-2">Which channels will you use to reach your audience?</label>
                <textarea
                  id="marketingChannels"
                  name="marketingChannels"
                  value={formData.marketingChannels}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., Social media ads, content marketing, email newsletters, webinars."
                  className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kpis" className="block text-gray-700 font-medium mb-2">What are your key metrics for success?</label>
                <input
                  type="text"
                  id="kpis"
                  name="kpis"
                  value={formData.kpis}
                  onChange={handleInputChange}
                  placeholder="e.g., Conversion Rate, Customer Acquisition Cost (CAC), Churn Rate."
                  className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400">
                  Back
                </button>
                <button type="submit" className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                  Generate My Report
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuditModal;
