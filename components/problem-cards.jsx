import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AnimateIn from "./animate-in"
import { TrendingDown, DollarSign, Target, Globe, ArrowRight, Star, Users, Clock, CheckCircle } from "lucide-react"

const problems = [
  {
    title: "Sales Plateau",
    description: "Pipeline stalls, long cycles, low close rates.",
    icon: TrendingDown,
    percentage: "75%",
    statText: "of companies struggle with sales growth",
    testimonial: "We increased our close rate from 12% to 34% in 6 months.",
    author: "Sarah Chen, VP Sales at TechFlow",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    metrics: {
      avgLoss: "$2.1M",
      timeToSolve: "3-6 months",
      successRate: "89%"
    }
  },
  {
    title: "Marketing Waste",
    description: "Poor ROAS, unclear messaging, weak GTM focus.",
    icon: DollarSign,
    percentage: "89%",
    statText: "of marketing spend is wasted",
    testimonial: "Our CAC dropped by 60% while scaling 3x faster.",
    author: "Mike Rodriguez, CMO at GrowthCo",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    metrics: {
      avgLoss: "$1.8M",
      timeToSolve: "4-8 months",
      successRate: "92%"
    }
  },
  {
    title: "Launch Stumbles",
    description: "Positioning misses; slow adoption post-launch.",
    icon: Target,
    percentage: "95%",
    statText: "of new products miss the mark ",
    testimonial: "We achieved 10x faster market penetration.",
    author: "Lisa Park, Product Lead at InnovateCorp",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    metrics: {
      avgLoss: "$3.2M",
      timeToSolve: "2-4 months",
      successRate: "94%"
    }
  },
  {
    title: "Global Entry Risk",
    description: "Pricing, channels, partners—too many unknowns.",
    icon: Globe,
    percentage: "82%",
    statText: "of international expansions fail",
    testimonial: "We entered 3 new markets profitably in 12 months.",
    author: "David Kim, International Director at ScaleUp",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    metrics: {
      avgLoss: "$4.5M",
      timeToSolve: "8-18 months",
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
              <span className="font-body-semibold text-red-600">Growth Challenges</span>
            </div>
            <h2 className="font-display-medium  text-black text-5xl md:text-6xl lg:text-7xl mb-8">
              What prevents CXOs from getting a good night's sleep?
            </h2>
            <p className="font-body text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              These are the exact challenges that stall growth and drain resources.
              We've solved them for hundreds of companies with proven frameworks.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => {
            const IconComponent = problem.icon
            return (
              <AnimateIn key={problem.title} delay={i * 0.1}>
                <div className="group">
                  <Card className={`card-premium group transition-all duration-500 hover:scale-105 bg-gradient-to-br ${problem.color} ${problem.borderColor} hover-lift premium-shadow group-hover:border-primary/30`}>
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
                      <button className="w-full btn-primary group">
                        <div className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </button>
                    </CardContent>
                  </Card>
                </div>
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
