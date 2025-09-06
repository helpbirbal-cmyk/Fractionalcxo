import React, { useState } from 'react';
import { calculateResults } from '../data/audit-questions';

const AuditResults = ({ answers, questions, onRestart, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use the imported calculation function
  const { profile, description, recommendation } = calculateResults(answers, questions);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to save results
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
        <p className="mt-4">Your personalized report has been sent to your email.</p>
        <button onClick={onClose} className="mt-8 px-6 py-2 bg-green-600 text-white rounded-lg">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="text-3xl font-bold text-gray-900">Your Growth Profile: <span className="text-green-600">{profile}</span></h3>
      <p className="mt-6 text-lg text-gray-600">{description}</p>

      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <h4 className="font-semibold text-green-800">Our Recommendation:</h4>
        <p className="mt-2 text-green-700">{recommendation}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <p className="text-sm text-gray-500 mb-4">Enter your email to receive your detailed report.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="your.email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
          >
            Get My Report
          </button>
        </div>
      </form>

      <div className="mt-6 flex gap-4 justify-center">
        <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700">
          Close
        </button>
        
      </div>
    </div>
  );
};

export default AuditResults;
