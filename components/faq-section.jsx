import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react';
import AnimateIn from './animate-in';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How is fractional leadership different from consulting?",
      answer: "Fractional leadership is hands-on execution, not just advice. We become part of your team, attend your meetings, make decisions, and drive results. Unlike consultants who give recommendations and leave, we stay accountable for outcomes and work alongside your team daily."
    },
    {
      question: "What if we can't afford ₹50,000/month?",
      answer: "We understand budget constraints. Our fractional model costs 1/3 of a full-time CXO (₹2-3Cr annually). We also offer flexible payment terms and can start with a smaller engagement. The ROI typically pays for itself within 2-3 months through increased revenue and efficiency."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most clients see initial improvements within 30 days, significant results in 90 days, and full transformation in 6 months. Our turnaround specialist clients often see crisis resolution in 30-60 days. We provide weekly progress reports and monthly strategy reviews."
    },
    {
      question: "What if we're not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with our performance, we'll refund your payment. However, 95% of our clients see measurable results within the first month and choose to continue the engagement."
    },
    {
      question: "Do you work with companies outside India?",
      answer: "Yes, we work with companies globally. Our team has experience with international markets, time zones, and cultural differences. We've helped companies in the US, Europe, Southeast Asia, and the Middle East scale their operations."
    },
    {
      question: "What's the difference between your services?",
      answer: "CGMO focuses on growth strategy and marketing leadership. CSO specializes in sales team building and revenue scaling. Turnaround Specialist handles crisis management and rapid growth. GTM Strategy covers launch strategies and market entry. We'll recommend the best fit based on your specific challenges."
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "We sign comprehensive NDAs before any engagement. All team members are bound by strict confidentiality agreements. We've worked with Fortune 500 companies and startups alike, maintaining complete discretion about client strategies and operations."
    },
    {
      question: "Can we change or cancel our engagement?",
      answer: "Yes, you can upgrade, downgrade, or cancel your engagement with 30 days notice. We're flexible and understand that business needs change. We'll help transition smoothly and ensure continuity of your growth initiatives."
    },
    {
      question: "What if we need more than 15-30 hours per month?",
      answer: "We can increase hours or add additional team members as needed. Many clients start with our standard plans and scale up as they see results. We also offer custom enterprise solutions for larger engagements and complex requirements."
    },
    {
      question: "Do you provide references from previous clients?",
      answer: "Yes, we can provide references from clients in similar industries and stages. We have case studies and testimonials from 500+ companies we've helped. We're happy to connect you with previous clients who can share their experience working with us."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "30-Day Guarantee",
      description: "Not satisfied? Get your money back"
    },
    {
      icon: Clock,
      title: "Start in 48 Hours",
      description: "Quick onboarding and immediate impact"
    },
    {
      icon: Shield,
      title: "NDA Protected",
      description: "Complete confidentiality guaranteed"
    },
    {
      icon: Users,
      title: "500+ Companies",
      description: "Proven track record of success"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Frequently Asked Questions</span>
            </div>
            <h2 className="font-display-medium text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6">
              Got Questions? We Have Answers
            </h2>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Here are the most common questions we get from growth-stage startups. 
              Don't see your question? <a href="/contact" className="text-primary hover:underline">Ask us directly</a>.
            </p>
          </div>
        </AnimateIn>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-body-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="font-body text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {faqs.slice(5).map((faq, index) => (
              <motion.div
                key={index + 5}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 5) * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index + 5 ? -1 : index + 5)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-body-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      openIndex === index + 5 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index + 5 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="font-body text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl mb-4 mx-auto">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="font-body-semibold text-slate-900 mb-2">{benefit.title}</div>
                <div className="font-body text-slate-600 text-sm">{benefit.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 max-w-4xl mx-auto">
            <h3 className="font-display-medium text-3xl md:text-4xl text-slate-900 mb-6">
              Still Have Questions?
            </h3>
            <p className="font-body text-xl text-slate-600 mb-8 leading-relaxed">
              Book a free 30-minute consultation and get all your questions answered by our fractional leadership experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cta group"
              >
                <div className="flex items-center">
                  Book Free Consultation
                  <ChevronDown className="ml-3 h-6 w-6 group-hover:rotate-180 transition-transform" />
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group"
              >
                <div className="flex items-center">
                  Download Case Studies
                  <Star className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
