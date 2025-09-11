const AuditQuestion = ({ question, onSelect, onBack, step, totalSteps, showBackButton }) => {
  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{question.question}</h3>

      <div className="space-y-4 mb-8">
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

      <div className="progress-bar mb-8">
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-600 h-2 rounded-full"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">Question {step} of {totalSteps}</p>

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
  );
};

export default AuditQuestion;
