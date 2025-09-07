import React, { useState } from 'react';
import AuditQuestion from './audit-question';
import AuditResults from './audit-results';

const GrowthAudit = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Define your questions and possible answers here.
  // In a real app, you might fetch this from a CMS or config file.
  const questions = [
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
    },
    // Add more questions (5-10 is a good number)
  ];

  const handleAnswerSelect = (questionId, answerScore, answerId) => {
    // Save the user's answer
    setAnswers(prev => ({ ...prev, [questionId]: { score: answerScore, answerId } }));

    // Move to next question or show results
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // This was the last question
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    // Calculate results based on the `answers` object and pass it down
    return <AuditResults answers={answers} questions={questions} onRestart={handleRestart} />;
  }

  // Show the current question
  return (
    <div id="growth-audit" className="bg-white py-24 sm:py-32">

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Free Growth Audit</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Uncover your biggest growth opportunities in just 2 minutes.
          </p>
        </div>
        <AuditQuestion
          question={questions[currentStep]}
          onSelect={(score, answerId) => handleAnswerSelect(questions[currentStep].id, score, answerId)}
          step={currentStep + 1}
          totalSteps={questions.length}
        />
      </div>
    </div>
  </div>
  );
};

export default GrowthAudit;
