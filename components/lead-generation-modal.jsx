import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Star, Clock, Users, TrendingUp, Target, DollarSign, Phone, Mail, Building, Calendar } from 'lucide-react';

const LeadGenerationModal = ({ isOpen, onClose, leadMagnet = "consultation" }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    companySize: '',
    currentChallenge: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const leadMagnets = {
    consultation: {
      title: "Free Growth Strategy Session",
      subtitle: "Get a personalized 30-minute strategy session with our fractional leadership experts",
      value: "₹50,000 value",
      benefits: [
        "Personalized growth roadmap",
        "Identify your biggest growth opportunities", 
        "Clear next steps to accelerate growth",
        "No obligation, just pure value"
      ]
    },
    audit: {
      title: "Free Growth Audit",
      subtitle: "Get a comprehensive analysis of your current growth strategy and opportunities",
      value: "₹25,000 value", 
      benefits: [
        "Complete growth assessment",
        "Competitor analysis",
        "Market opportunity mapping",
        "Actionable recommendations"
      ]
    },
    gtm: {
      title: "GTM Strategy Blueprint",
      subtitle: "Download our proven go-to-market framework used by 100+ startups",
      value: "₹15,000 value",
      benefits: [
        "Proven GTM framework",
        "Channel prioritization matrix",
        "Launch timeline template",
        "Success metrics dashboard"
      ]
    }
  };

  const currentMagnet = leadMagnets[leadMagnet];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Integrate with Resend API
      console.log('Lead data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep(4); // Success step
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const challenges = [
    "Stuck in growth plateau",
    "Can't afford full-time CXO", 
    "Sales team struggling",
    "Need turnaround fast",
    "Marketing ROI issues",
    "Product launch challenges",
    "Team scaling problems",
    "Revenue growth stalled"
  ];

  const timelines = [
    "Immediate (within 30 days)",
    "1-3 months", 
    "3-6 months",
    "6+ months"
  ];

  const budgets = [
    "₹50,000/month (Growth Accelerator)",
    "₹100,000/month (Turnaround Specialist)", 
    "Custom budget",
    "Need to discuss"
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="relative p-8 border-b border-slate-200">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-6 w-6 text-slate-500" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-body-semibold text-primary">Free Resource</span>
              </div>
              <h2 className="font-display-medium text-2xl md:text-3xl text-slate-900 mb-2">
                {currentMagnet.title}
              </h2>
              <p className="font-body text-slate-600 mb-4">
                {currentMagnet.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-body-semibold">
                <CheckCircle className="h-4 w-4" />
                {currentMagnet.value}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-8 py-4 border-b border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-body-semibold text-slate-700">Step {step} of 3</span>
              <span className="text-sm text-slate-500">{Math.round((step/3)*100)}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary to-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step/3)*100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display-medium text-xl text-slate-900 mb-2">Basic Information</h3>
                    <p className="font-body text-slate-600 mb-6">Tell us about yourself and your company</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Your Role *</label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        placeholder="CEO, Founder, etc."
                        required
                      />
                    </div>
                    <div>
                      <label className="font-body-semibold text-slate-900 mb-2 block">Company Size *</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="form-input-premium"
                        required
                      >
                        <option value="">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display-medium text-xl text-slate-900 mb-2">Growth Challenges</h3>
                    <p className="font-body text-slate-600 mb-6">Help us understand your current situation</p>
                  </div>

                  <div>
                    <label className="font-body-semibold text-slate-900 mb-2 block">Primary Challenge *</label>
                    <select
                      name="currentChallenge"
                      value={formData.currentChallenge}
                      onChange={handleInputChange}
                      className="form-input-premium"
                      required
                    >
                      <option value="">Select your main challenge</option>
                      {challenges.map((challenge) => (
                        <option key={challenge} value={challenge}>{challenge}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body-semibold text-slate-900 mb-2 block">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="form-input-premium"
                      required
                    >
                      <option value="">When do you need results?</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body-semibold text-slate-900 mb-2 block">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-input-premium"
                      required
                    >
                      <option value="">Select your budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body-semibold text-slate-900 mb-2 block">Additional Information</label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows="4"
                      className="form-input-premium"
                      placeholder="Tell us more about your current situation, goals, or any specific challenges you're facing..."
                    />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display-medium text-xl text-slate-900 mb-2">What Happens Next?</h3>
                    <p className="font-body text-slate-600 mb-6">Here's what you can expect after submitting</p>
                  </div>

                  <div className="space-y-4">
                    {currentMagnet.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-body text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-body-semibold text-slate-900 mb-3">Next Steps:</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>We'll review your information within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>You'll receive a confirmation email with next steps</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>We'll schedule your {currentMagnet.title.toLowerCase()} within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display-medium text-2xl text-slate-900 mb-2">Thank You!</h3>
                    <p className="font-body text-slate-600">
                      We've received your information and will be in touch within 2 hours.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-body-semibold text-slate-900 mb-3">What's Next?</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>Check your email for confirmation</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>We'll call you to schedule your session</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 4 && (
              <div className="flex justify-between pt-6 border-t border-slate-200 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Previous
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary ml-auto"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta ml-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My {currentMagnet.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="flex justify-center pt-6 border-t border-slate-200 mt-8">
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  Close
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadGenerationModal;
