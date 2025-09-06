// data/audit-questions.js
const AuditQuestion = ({ question, onSelect, onBack, step, totalSteps, showBackButton }) => {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Bar */}
      <div className="progress-bar mb-8">
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-500">Question {step} of {totalSteps}</p>
          {showBackButton && (
            <button
              onClick={onBack}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              ← Back
            </button>
          )}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{question.question}</h3>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.score, option.id)}
            className="w-full text-left p-4 border border-gray-300 rounded-lg text-gray-900 hover:border-green-500 hover:bg-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuditQuestion;

export const calculateResults = (answers, questions) => {
  const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
  const maxScore = questions.length * 3;

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

  return { profile, description, recommendation, totalScore, maxScore };
};
