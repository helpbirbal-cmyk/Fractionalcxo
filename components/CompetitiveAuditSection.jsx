// components/CompetitiveAuditSection.jsx  GTM

import React from 'react';

const CompetitiveAuditSection = ({ onOpenAudit }) => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Uncover Your Edge with a Competitive Audit</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't just grow—outgrow your competition. Our data-driven audit provides
          a head-to-head comparison against your key rivals, revealing new opportunities
          and blind spots in your market.
        </p>
        <button
          onClick={onOpenAudit}
          className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Start Your Free Competitive Audit
        </button>
      </div>
    </section>
  );
};

export default CompetitiveAuditSection;
