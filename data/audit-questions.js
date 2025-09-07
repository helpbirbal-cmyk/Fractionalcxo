// data/audit-questions.js
  // Audit questions data
export const auditQuestions = [
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
      {
          id: 'customer_retention',
          question: "How focused are you on customer retention vs. acquisition?",
          options: [
              { id: 'a', text: "Mostly focused on acquisition", score: 1 },
              { id: 'b', text: "We try to balance both but could improve", score: 2 },
              { id: 'c', text: "We have strong retention strategies and measure LTV", score: 3 },
          ]
      },
      {
          id: 'content_strategy',
          question: "Do you have a documented content strategy?",
          options: [
              { id: 'a', text: "No, we create content as needed", score: 1 },
              { id: 'b', text: "We have a basic strategy but it's not documented", score: 2 },
              { id: 'c', text: "Yes, we have a documented strategy aligned with business goals", score: 3 },
          ]
      },
      {
          id: 'conversion_optimization',
          question: "How do you approach conversion rate optimization?",
          options: [
              { id: 'a', text: "We don't actively work on conversion optimization", score: 1 },
              { id: 'b', text: "We occasionally test changes but not systematically", score: 2 },
              { id: 'c', text: "We regularly run A/B tests and have a structured process", score: 3 },
          ]
      },
      {
          id: 'data_driven',
          question: "How data-driven are your marketing decisions?",
          options: [
              { id: 'a', text: "Mostly based on intuition and experience", score: 1 },
              { id: 'b', text: "We use data but lack resources for deep analysis", score: 2 },
              { id: 'c', text: "Decisions are primarily based on data analysis and insights", score: 3 },
          ]
      },
      {
          id: 'budget_allocation',
          question: "How do you allocate your marketing budget?",
          options: [
              { id: 'a', text: "Mostly reactive without clear ROI measurement", score: 1 },
              { id: 'b', text: "We have a budget but don't consistently track ROI", score: 2 },
              { id: 'c', text: "Based on historical performance and projected ROI", score: 3 },
          ]
      },
      {
          id: 'team_structure',
          question: "How is your marketing/growth team structured?",
          options: [
              { id: 'a', text: "We don't have dedicated marketing resources", score: 1 },
              { id: 'b', text: "We have marketing staff but lack specialized expertise", score: 2 },
              { id: 'c', text: "We have a structured team with specialized roles", score: 3 },
          ]
      },
      {
          id: 'competitive_analysis',
          question: "How systematically do you analyze competitors?",
          options: [
              { id: 'a', text: "We rarely conduct formal competitive analysis", score: 1 },
              { id: 'b', text: "We occasionally review competitors but not systematically", score: 2 },
              { id: 'c', text: "We regularly analyze competitors and track their moves", score: 3 },
          ]
      },
      {
          id: 'technology_stack',
          question: "How would you describe your marketing technology stack?",
          options: [
              { id: 'a', text: "Limited or non-existent", score: 1 },
              { id: 'b', text: "We have basic tools but aren't leveraging them fully", score: 2 },
              { id: 'c', text: "We have an integrated stack that supports our strategy", score: 3 },
          ]
      }
  ];

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
