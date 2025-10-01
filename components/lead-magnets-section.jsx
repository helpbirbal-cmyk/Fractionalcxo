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
      title: 'Free Growth Strategy Session',
      subtitle: '30-minute personalized consultation',
      value: '₹50,000 value',
      description: 'Get a personalized roadmap to accelerate your growth with our fractional leadership experts.',
      benefits: [
        'Personalized growth roadmap',
        'Identify biggest opportunities',
        'Clear next steps to scale',
        'No obligation consultation'
      ],
      cta: 'Book Free Session',
      color: 'from-primary/10 to-green-500/10',
      borderColor: 'border-primary/20',
      iconColor: 'text-primary'
    },
    {
      id: 'audit',
      icon: BarChart3,
      title: 'Free Growth Audit',
      subtitle: 'Comprehensive business analysis',
      value: '₹25,000 value',
      description: 'Get a complete assessment of your current growth strategy and identify opportunities.',
      benefits: [
        'Complete growth assessment',
        'Competitor analysis',
        'Market opportunity mapping',
        'Actionable recommendations'
      ],
      cta: 'Get Free Audit',
      color: 'from-blue-500/10 to-blue-600/10',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'gtm',
      icon: Download,
      title: 'GTM Strategy Blueprint',
      subtitle: 'Proven go-to-market framework',
      value: '₹15,000 value',
      description: 'Download our battle-tested GTM framework used by 100+ successful startups.',
      benefits: [
        'Proven GTM framework',
        'Channel prioritization matrix',
        'Launch timeline template',
        'Success metrics dashboard'
      ],
      cta: 'Download Blueprint',
      color: 'from-purple-500/10 to-purple-600/10',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
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
            Get Started with These Free Resources
          </h2>
          <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the resource that best fits your current needs. All resources are completely free and designed to give you immediate value.
          </p>
        </motion.div>

        {/* Lead Magnets Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <div className={`card-premium bg-gradient-to-br ${magnet.color} ${magnet.borderColor} hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500`}>
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-white/50 border border-slate-200`}>
                        <IconComponent className={`h-8 w-8 ${magnet.iconColor}`} />
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-700 text-xs font-body-semibold px-3 py-1 rounded-full">
                          {magnet.value}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="font-display-medium text-xl text-slate-900 mb-2">
                        {magnet.title}
                      </h3>
                      <p className="font-body-semibold text-slate-600 text-sm mb-3">
                        {magnet.subtitle}
                      </p>
                      <p className="font-body text-slate-700 leading-relaxed">
                        {magnet.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {magnet.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="font-body text-slate-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleMagnetClick(magnet.id)}
                      className="w-full btn-primary group"
                    >
                      <div className="flex items-center justify-center">
                        {magnet.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
