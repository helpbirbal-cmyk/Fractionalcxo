import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AnimateIn from "./animate-in"
import { TrendingDown, DollarSign, Target, Globe, ArrowRight, Star, Users, Clock, CheckCircle } from "lucide-react"

const problems = [
  {
    title: "Losing ₹50L+ Monthly to Growth Plateaus",
    description: "Revenue stuck at ₹2-5Cr for months despite hiring more people and trying new strategies. Team is frustrated, investors are asking questions, and you're burning cash faster than you're growing.",
    icon: TrendingDown,
    percentage: "₹50L+",
    statText: "monthly revenue lost to plateaus",
    testimonial: "We were stuck at ₹3Cr for 18 months. ABERCXO helped us break through to ₹12Cr in 8 months.",
    author: "Sarah Chen, CEO at TechFlow",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    metrics: {
      avgLoss: "₹50L/month",
      timeToSolve: "3-6 months",
      successRate: "89%"
    }
  },
  {
    title: "Can't Afford ₹2Cr+ for Full-Time CXO",
    description: "You need world-class leadership but can't justify ₹2-3Cr+ annual cost for a full-time CXO. You're stuck between hiring junior people who can't scale or paying premium prices you can't afford.",
    icon: DollarSign,
    percentage: "₹2Cr+",
    statText: "annual cost of full-time CXO",
    testimonial: "We got world-class leadership at 1/3 the cost. Saved ₹1.5Cr annually while getting better results.",
    author: "Mike Rodriguez, Founder at GrowthCo",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    metrics: {
      avgLoss: "₹1.5Cr/year",
      timeToSolve: "48 hours",
      successRate: "95%"
    }
  },
  {
    title: "Sales Team Converting Only 15-20%",
    description: "Your sales team is working hard but only closing 15-20% of deals. Pipeline looks good but revenue isn't following. You're losing deals to competitors and can't figure out why.",
    icon: Target,
    percentage: "15-20%",
    statText: "average close rate for struggling teams",
    testimonial: "Our close rate went from 18% to 42% in 6 months. Pipeline value increased 3x.",
    author: "Lisa Park, VP Sales at InnovateCorp",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    metrics: {
      avgLoss: "₹2.5Cr/year",
      timeToSolve: "3-6 months",
      successRate: "92%"
    }
  },
  {
    title: "Crisis Mode: Need Results in 90 Days",
    description: "Investors are concerned, cash runway is shrinking, and you need immediate results. You can't wait 6-12 months for a turnaround. You need someone who can hit the ground running and deliver fast.",
    icon: Globe,
    percentage: "90 days",
    statText: "typical crisis timeline",
    testimonial: "We were in crisis mode. ABERCXO helped us turn around in 90 days and achieve 500% growth in 6 months.",
    author: "David Kim, CEO at ScaleUp",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    metrics: {
      avgLoss: "₹1Cr/month",
      timeToSolve: "90 days",
      successRate: "87%"
    }
  },
]

export default function ProblemCards() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 px-6 py-3 rounded-2xl border border-red-200 mb-6">
              <Target className="h-5 w-5 text-red-600" />
              <span className="font-body-semibold text-black">Growth Challenges</span>
            </div>
        <h2 className="font-display-medium text-black text-3xl md:text-4xl lg:text-5xl mb-6">
          Are You Losing ₹50L+ Monthly to These Problems?
        </h2>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These are the exact challenges costing growth-stage startups ₹50L+ every month.
              We've helped 500+ companies break through with 20+ years of major brand experience.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => {
            const IconComponent = problem.icon
            return (
              <AnimateIn key={problem.title} delay={i * 0.1}>
                <motion.div 
                  className="group"
                  whileHover={{ y: -15, scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Card className={`card-premium group transition-all duration-500 bg-gradient-to-br ${problem.color} ${problem.borderColor} hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10`}>
                    <CardHeader className="pb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-4 rounded-2xl ${problem.iconBg} border border-slate-200`}>
                          <IconComponent className={`h-8 w-8 ${problem.iconColor}`} />
                        </div>
                        <div className="text-right">
                          <div className="font-display text-3xl font-bold text-slate-900">{problem.percentage}</div>
                          <div className="font-body text-slate-500 text-sm">{problem.statText}</div>
                        </div>
                      </div>
                      <CardTitle className="font-display-medium text-2xl mb-3 text-slate-900">{problem.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-8">
                      <p className="font-body text-slate-600 leading-relaxed">{problem.description}</p>



                      {/* CTA */}
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full btn-primary group"
                      >
                        <div className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
      { /**  <AnimateIn delay={0.6}>
          <div className="text-center mt-20">
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl">Ready to Solve Your Growth Challenges?</h3>
                <Target className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a comprehensive growth audit that identifies your specific challenges and creates a
                personalized roadmap to overcome them. Join hundreds of companies that have transformed their growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-cta group">
                  <div className="flex items-center">
                    Get Free Audit
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
                <button className="btn-secondary group">
                  <div className="flex items-center">
                    View Stories
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Proven results</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn> **/ }
      </div>
    </section>
  )
}
