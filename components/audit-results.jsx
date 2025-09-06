import React, { useState } from 'react';

const AuditResults = ({ answers, questions, onRestart }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple scoring logic: sum all answer scores
  const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
  const maxScore = questions.length * 3; // Assuming max score per question is 3

  // Determine a "stage" or "profile" based on the score
  let profile = '';
  let description = '';
  let recommendation = '';

  if (totalScore / maxScore < 0.4) {
    profile = 'Emerging';
    description = 'Your growth engine is still in its early stages. Focus on establishing foundational strategies.';
    recommendation = 'A Fractional CXO can help you build a scalable GTM plan from the ground up.';
  } else if (totalScore / maxScore < 0.7) {
    profile = 'Scaling';
    description = 'You have solid foundations but face challenges in execution and optimization.';
    recommendation = 'A Fractional CXO can optimize your processes and accelerate your growth trajectory.';
  } else {
    profile = 'Performing';
    description = 'Your growth engine is strong and data-driven. The focus is on maximizing ROI.';
    recommendation = 'A Fractional CXO can help you enter new markets and fine-tune for hyper-growth.';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Send the email and the `answers` data to your backend/API
    // await fetch('/api/save-audit', { method: 'POST', body: JSON.stringify({ email, answers }) })
    // 2. Mark as submitted
    setIsSubmitted(true);
    // 3. (Optional) Redirect to a thank you page or show a download link
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
        <p className="mt-4">Your personalized report has been sent to your email.</p>
        <p className="mt-2">A CXO specialist will contact you shortly to discuss your results.</p>
        <button onClick={onRestart} className="mt-8 text-green-600 hover:underline">
          Take the audit again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h3 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Your Growth Profile: <span className="text-green-600">{profile}</span></h3>
      <p className="mt-6 text-lg leading-8 text-gray-100">
        {description}
      </p>
      <div className="mt-10 bg-green-50 p-8 rounded-lg text-gray-800">
        <h4 className="font-semibold">Our Recommendation:</h4>
        <p className="mt-2">{recommendation}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 sm:mx-auto sm:max-w-sm">
        <p className="text-sm text-gray-100 mb-4">Enter your email to receive your detailed diagnostic report.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            required
            placeholder="your.email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Get My Report
          </button>
        </div>
      </form>
      <button onClick={onRestart} className="mt-8 text-sm text-green-600 hover:underline">
        Start Over
      </button>
    </div>
  );
};

export default AuditResults;
