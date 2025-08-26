import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AnimateIn from "./animate-in"
import { TrendingUp, Target, Users, Globe, Rocket, CheckCircle, ArrowRight, Star, Zap, Award, Clock, DollarSign } from "lucide-react"

const services = [
  {
    role: "Fractional CGO",
    icon: TrendingUp,
    points: ["Growth roadmap & metrics", "Cross-functional alignment", "Revenue acceleration"],
    description: "Transform your growth strategy with proven frameworks that scale.",
    results: ["300% avg. revenue growth", "6-month implementation", "Full team alignment"],
    startingPrice: "₹75,000/mo",
    popular: true,
    color: "from-primary/5 to-green-500/5",
    borderColor: "border-primary/20",
    gradient: "from-primary/20 to-green-500/20",
    iconBg: "bg-gradient-to-br from-primary/10 to-green-500/10",
    iconColor: "text-primary",
    timeframe: "6-12 months",
    roi: "300% average",
    clients: "150+ companies"
  },
  {
    role: "Fractional CMO",
    icon: Target,
    points: ["GTM & positioning", "Acquisition funnels", "ROI-driven media"],
    description: "Build high-converting marketing systems that drive predictable growth.",
    results: ["60% CAC reduction", "3x faster scaling", "Predictable pipeline"],
    startingPrice: "₹65,000/mo",
    popular: false,
    color: "from-blue-500/5 to-blue-600/5",
    borderColor: "border-blue-200",
    gradient: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-gradient-to-br from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
    timeframe: "4-8 months",
    roi: "250% average",
    clients: "120+ companies"
  },
  {
    role: "Fractional CSO",
    icon: Users,
    points: ["Sales process & playbooks", "Pipeline & forecasting", "Team coaching"],
    description: "Create repeatable sales processes that close more deals faster.",
    results: ["34% close rate improvement", "50% shorter sales cycles", "Team productivity 3x"],
    startingPrice: "₹55,000/mo",
    popular: false,
    color: "from-purple-500/5 to-purple-600/5",
    borderColor: "border-purple-200",
    gradient: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-gradient-to-br from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
    timeframe: "3-6 months",
    roi: "200% average",
    clients: "100+ companies"
  },
  {
    role: "GTM Specialists",
    icon: Rocket,
    points: ["Launch plans", "Channel selection", "Early adoption loops"],
    description: "Launch products that gain immediate market traction and adoption.",
    results: ["10x faster market penetration", "90% launch success rate", "Sustainable growth"],
    startingPrice: "₹45,000/mo",
    popular: false,
    color: "from-orange-500/5 to-orange-600/5",
    borderColor: "border-orange-200",
    gradient: "from-orange-500/20 to-orange-600/20",
    iconBg: "bg-gradient-to-br from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
    timeframe: "2-4 months",
    roi: "400% average",
    clients: "80+ companies"
  },
  {
    role: "International Expansion",
    icon: Globe,
    points: ["Entry strategy", "Localization & pricing", "Partners & distribution"],
    description: "Expand globally with confidence using proven market entry strategies.",
    results: ["3 markets in 12 months", "Profitable from day 1", "Local market dominance"],
    startingPrice: "₹85,000/mo",
    popular: false,
    color: "from-green-500/5 to-green-600/5",
    borderColor: "border-green-200",
    gradient: "from-green-500/20 to-green-600/20",
    iconBg: "bg-gradient-to-br from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
    timeframe: "8-18 months",
    roi: "500% average",
    clients: "60+ companies"
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateIn>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Leadership Services</span>
            </div>
            <h2 className="font-display-medium text-5xl md:text-6xl lg:text-7xl mb-8">
              Fractional Leadership
            </h2>
            <p className="font-body text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Get world-class executive leadership on-demand. Our proven leaders have scaled 
              companies from startup to unicorn status with measurable results.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const IconComponent = s.icon
            return (
              <AnimateIn key={s.role} delay={i * 0.1}>
                <Card className={`card-premium group transition-all duration-500 hover:scale-105`}>
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${s.iconBg} border border-slate-200`}>
                        <IconComponent className={`h-8 w-8 ${s.iconColor}`} />
                      </div>
                      {s.popular && (
                        <div className="flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 text-primary text-sm px-4 py-2 rounded-full font-body-semibold border border-primary/20">
                          <Star className="h-4 w-4 fill-primary" />
                          Most Popular
                        </div>
                      )}
                    </div>
                    <CardTitle className="font-display-medium text-2xl mb-3 text-slate-900">{s.role}</CardTitle>
                    <p className="font-body text-slate-600 leading-relaxed">{s.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Key Points */}
                    <div className="space-y-4">
                      <h4 className="font-body-semibold text-slate-900 text-lg">What You'll Get</h4>
                      {s.points.map((p) => (
                        <div key={p} className="flex items-center gap-4">
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="font-body text-slate-700">{p}</span>
                        </div>
                      ))}
                    </div>

                    {/* Results & Metrics */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                      <h4 className="font-body-semibold text-primary text-lg mb-4">Typical Results</h4>
                      <div className="space-y-3">
                        {s.results.map((r) => (
                          <div key={r} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="font-body text-slate-700 text-sm">{r}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Clock className="h-4 w-4 text-slate-500" />
                          </div>
                          <div className="font-body-bold text-slate-900 text-sm">{s.timeframe}</div>
                          <div className="text-xs text-slate-500">Timeline</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <DollarSign className="h-4 w-4 text-slate-500" />
                          </div>
                          <div className="font-body-bold text-slate-900 text-sm">{s.roi}</div>
                          <div className="text-xs text-slate-500">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Users className="h-4 w-4 text-slate-500" />
                          </div>
                          <div className="font-body-bold text-slate-900 text-sm">{s.clients}</div>
                          <div className="text-xs text-slate-500">Served</div>
                        </div>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                        <div>
                          <span className="font-body text-slate-500 text-sm">Starting at</span>
                          <div className="font-body-bold text-2xl text-slate-900">{s.startingPrice}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-body-semibold text-primary text-sm">No Setup Fee</div>
                          <div className="text-xs text-slate-500">Cancel anytime</div>
                        </div>
                      </div>
                      
                      <button className="w-full btn-primary group">
                        <div className="flex items-center justify-center">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </button>
                      
                      <button className="w-full btn-tertiary group">
                        <div className="flex items-center justify-center">
                          View Cases
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </AnimateIn>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <AnimateIn delay={0.6}>
          <div className="text-center mt-20">
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl">Not Sure Which Service You Need?</h3>
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a personalized recommendation based on your specific challenges, 
                company size, and growth goals. Our experts will create a custom roadmap for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-cta group">
                  <div className="flex items-center">
                    Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
                <button className="btn-secondary group">
                  <div className="flex items-center">
                    Download Guide
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">30-day guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Proven results</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
