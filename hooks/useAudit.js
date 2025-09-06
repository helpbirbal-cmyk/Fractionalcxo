// hooks/useAudit.js
import { useState } from 'react';

export const useAudit = (questions) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId, answerScore, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: { score: answerScore, answerId } }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  return {
    currentStep,
    answers,
    showResults,
    handleAnswerSelect,
    handleGoBack, // Add this
    handleRestart,
    setShowResults,
    setCurrentStep,
    setAnswers
  };
};
