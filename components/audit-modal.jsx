import React, { useEffect } from 'react';
import AuditQuestion from './audit-question';
import AuditResults from './audit-results';
import { useAudit } from '../hooks/useAudit';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

// Import the default export and access auditQuestions from it
import auditData from '../data/audit-questions';
console.log('Default export content:', auditData);

// Use the questions from the default export
const auditQuestions = auditData?.auditQuestions || [
  {
    id: 'marketing_strategy',
    question: "How would you describe your current marketing strategy?",
    options: [
      { id: 'a', text: "Mostly ad-hoc and reactive", score: 1 },
      { id: 'b', text: "We have a plan but struggle with execution", score: 2 },
      { id: 'c', text: "Data-driven with clear KPIs and regular review", score: 3 },
    ]
  },
  {
    id: 'sales_process',
    question: "Is your sales process defined and repeatable?",
    options: [
      { id: 'a', text: "No, it's different for every deal", score: 1 },
      { id: 'b', text: "Somewhat, but not consistently followed", score: 2 },
      { id: 'c', text: "Yes, it's well-documented and optimized", score: 3 },
    ]
  }
];

console.log('Questions to use:', auditQuestions.length);

const AuditModal = ({ isOpen, onClose }) => {
  const {
    currentStep,
    answers,
    showResults,
    handleAnswerSelect,
    handleGoBack,
    handleRestart
  } = useAudit(auditQuestions);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    console.log('Modal opened with questions:', auditQuestions.length);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    handleRestart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {showResults ? 'Your Growth Audit Results' : 'Free Growth Audit'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {showResults ? (
            <AuditResults
              answers={answers}
              questions={auditQuestions}
              onRestart={handleRestart}
              onClose={handleClose}
            />
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Uncover your biggest growth opportunities in just {auditQuestions.length} questions.
              </p>
              {auditQuestions.length > 0 && currentStep < auditQuestions.length ? (
                <AuditQuestion
                  question={auditQuestions[currentStep]}
                  onSelect={(score, answerId) => handleAnswerSelect(auditQuestions[currentStep].id, score, answerId)}
                  onBack={handleGoBack}
                  step={currentStep + 1}
                  totalSteps={auditQuestions.length}
                  showBackButton={currentStep > 0}
                />
              ) : (
                <div className="text-center py-8">
                  <p className="text-red-500 mb-4">Error loading questions. Please try again.</p>
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
