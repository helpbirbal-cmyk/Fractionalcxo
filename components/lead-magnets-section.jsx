import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Calendar, 
  BarChart3, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  Clock,
  Award,
  Zap
} from 'lucide-react';
import LeadGenerationModal from './lead-generation-modal';

const LeadMagnetsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMagnet, setSelectedMagnet] = useState('consultation');

  const handleMagnetClick = (magnet) => {
    setSelectedMagnet(magnet);
    setIsModalOpen(true);
  };

  const leadMagnets = [
    {
      id: 'consultation',
      icon: Calendar,
      title: 'Free ₹50,000 Growth Strategy Session',
      subtitle: '30-minute personalized consultation with our fractional leadership experts',
      value: '₹50,000 value',
      description: 'Get a personalized roadmap to accelerate your growth and break through plateaus. This session alone has helped companies identify ₹2Cr+ in growth opportunities.',
      benefits: [
        'Personalized growth roadmap worth ₹50,000',
        'Identify your biggest growth opportunities',
        'Clear next steps to achieve 300% revenue growth',
        'No obligation - just pure value',
        'Get started in 48 hours'
      ],
      cta: 'Book Free ₹50,000 Session',
      color: 'from-primary/10 to-green-500/10',
      borderColor: 'border-primary/20',
      iconColor: 'text-primary',
      popular: true
    }
  ];

  const stats = [
    { icon: Users, label: '500+ Companies', value: 'Helped Scale' },
    { icon: TrendingUp, label: '300% Average', value: 'Revenue Growth' },
    { icon: Target, label: '48 Hours', value: 'Start Time' },
    { icon: Award, label: '20+ Years', value: 'Experience' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
            <Star className="h-5 w-5 text-primary" />
            <span className="font-body-semibold text-primary">Free Resources</span>
          </div>
          <h2 className="font-display-medium text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6">
            Get Your Free ₹50,000 Growth Strategy Session
          </h2>
          <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            This single session has helped 500+ companies identify ₹2Cr+ in growth opportunities. 
            Get your personalized roadmap to break through plateaus and achieve 300% revenue growth.
          </p>
        </motion.div>

        {/* Main Lead Magnet */}
        <div className="max-w-4xl mx-auto mb-16">
          {leadMagnets.map((magnet, index) => {
            const IconComponent = magnet.icon;
            return (
              <motion.div
                key={magnet.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className={`card-premium bg-gradient-to-br ${magnet.color} ${magnet.borderColor} hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden`}>
                  {magnet.popular && (
                    <div className="absolute top-6 right-6">
                      <div className="bg-gradient-to-r from-primary to-green-500 text-white text-sm px-4 py-2 rounded-full font-body-semibold shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-white" />
                          Most Popular
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-12">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className={`p-6 rounded-3xl bg-white/50 border border-slate-200`}>
                        <IconComponent className={`h-12 w-12 ${magnet.iconColor}`} />
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-700 text-lg font-body-bold px-6 py-3 rounded-full">
                          {magnet.value}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-8">
                      <h3 className="font-display-medium text-3xl text-slate-900 mb-4">
                        {magnet.title}
                      </h3>
                      <p className="font-body-semibold text-slate-600 text-xl mb-6">
                        {magnet.subtitle}
                      </p>
                      <p className="font-body text-slate-700 leading-relaxed text-lg">
                        {magnet.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                      {magnet.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-body text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMagnetClick(magnet.id)}
                      className="w-full btn-cta group text-lg py-6"
                    >
                      <div className="flex items-center justify-center">
                        {magnet.cta}
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-8">
            <h3 className="font-display-medium text-2xl text-slate-900 mb-2">
              Trusted by Growth-Stage Startups
            </h3>
            <p className="font-body text-slate-600">
              Join hundreds of companies that have accelerated their growth with our fractional leadership
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl mb-4 mx-auto">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-display text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-slate-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-body text-slate-600 mb-6">
            Not sure which resource is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMagnetClick('consultation')}
            className="btn-cta group"
          >
            <div className="flex items-center">
              <Calendar className="mr-3 h-6 w-6" />
              Get a Free Strategy Session
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Lead Generation Modal */}
      <LeadGenerationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadMagnet={selectedMagnet}
      />
    </section>
  );
};

export default LeadMagnetsSection;
