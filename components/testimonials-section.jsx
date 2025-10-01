import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import AnimateIn from './animate-in';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ABERCXO transformed our growth completely. We went from ₹2Cr to ₹8Cr revenue in just 8 months. Their fractional leadership model is genius - we got world-class expertise at 1/3 the cost of full-time CXOs.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "SaaS Platform",
      growth: "300% revenue growth",
      timeframe: "8 months",
      rating: 5,
      image: "/testimonials/sarah.jpg"
    },
    {
      quote: "We were stuck at ₹5Cr for 2 years. ABERCXO's turnaround specialist helped us break through to ₹25Cr in 12 months. The ROI was incredible - we paid ₹12L and got ₹2Cr+ in additional revenue.",
      author: "Michael Rodriguez",
      role: "Founder, GrowthCo",
      company: "E-commerce",
      growth: "400% revenue growth",
      timeframe: "12 months",
      rating: 5,
      image: "/testimonials/michael.jpg"
    },
    {
      quote: "Our sales team was struggling with 15% close rates. ABERCXO's fractional CSO helped us build a scalable sales process. Now we're at 35% close rates and 2x our pipeline.",
      author: "Lisa Park",
      role: "VP Sales, InnovateCorp",
      company: "B2B Software",
      growth: "133% close rate improvement",
      timeframe: "6 months",
      rating: 5,
      image: "/testimonials/lisa.jpg"
    },
    {
      quote: "We needed to scale from ₹10Cr to ₹50Cr but couldn't afford a full-time CMO. ABERCXO's fractional CGMO gave us the marketing leadership we needed at a fraction of the cost.",
      author: "David Kim",
      role: "CEO, ScaleUp",
      company: "Fintech",
      growth: "400% revenue growth",
      timeframe: "18 months",
      rating: 5,
      image: "/testimonials/david.jpg"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Helped", icon: Users },
    { number: "300%", label: "Average Growth", icon: TrendingUp },
    { number: "4.9/5", label: "Client Rating", icon: Star },
    { number: "₹2Cr+", label: "Avg. Revenue Increase", icon: Award }
  ];

  const companies = [
    "TechFlow", "GrowthCo", "InnovateCorp", "ScaleUp", "DataFlow", "CloudTech", "AI Solutions", "FinTech Pro"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <AnimateIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Client Success Stories</span>
            </div>
            <h2 className="font-display-medium text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6">
              Real Results from Real Companies
            </h2>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have achieved with our fractional leadership services.
            </p>
          </div>
        </AnimateIn>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl mb-4 mx-auto">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-body text-slate-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="bg-gradient-to-br from-primary/5 to-green-500/5 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-body-bold text-primary text-lg">{testimonial.growth}</div>
                      <div className="font-body text-slate-600 text-sm">in {testimonial.timeframe}</div>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-green-500/20 rounded-full flex items-center justify-center">
                    <span className="font-body-bold text-primary text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-body-semibold text-slate-900">{testimonial.author}</div>
                    <div className="font-body text-slate-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="font-body-semibold text-slate-600 mb-8">Trusted by leading companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="font-body-semibold text-slate-700">{company}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="font-display-medium text-3xl md:text-4xl text-slate-900 mb-6">
              Ready to Join These Success Stories?
            </h3>
            <p className="font-body text-xl text-slate-600 mb-8 leading-relaxed">
              Get your personalized growth strategy and start your journey to 300% revenue growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cta group"
            >
              <div className="flex items-center">
                Get Your Free Strategy Session
                <TrendingUp className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
