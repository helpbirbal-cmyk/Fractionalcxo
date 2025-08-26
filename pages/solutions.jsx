import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  Rocket, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign
} from "lucide-react"

const solutions = [
  {
    title: "Startup Scaling",
    description: "Transform your startup from idea to market leader with proven growth frameworks.",
    icon: Rocket,
    challenges: [
      "Product-market fit validation",
      "GTM strategy development",
      "Team scaling and processes",
      "Funding preparation"
    ],
    results: [
      "10x faster market penetration",
      "Clear growth roadmap",
      "Scalable processes",
      "Investor-ready metrics"
    ],
    timeframe: "3-6 months",
    investment: "₹50,000-100,000/mo",
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-200"
  },
  {
    title: "SaaS Growth",
    description: "Accelerate your SaaS business with data-driven growth strategies and optimization.",
    icon: TrendingUp,
    challenges: [
      "Customer acquisition optimization",
      "Churn reduction strategies",
      "Pricing optimization",
      "International expansion"
    ],
    results: [
      "60% CAC reduction",
      "40% churn reduction",
      "3x faster scaling",
      "Global market entry"
    ],
    timeframe: "6-12 months",
    investment: "₹75,000-150,000/mo",
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-200"
  },
  {
    title: "E-commerce Optimization",
    description: "Maximize your e-commerce revenue with conversion optimization and growth hacking.",
    icon: Target,
    challenges: [
      "Conversion rate optimization",
      "Customer lifetime value",
      "Marketing channel optimization",
      "Inventory and operations"
    ],
    results: [
      "50% conversion improvement",
      "3x customer LTV",
      "ROAS optimization",
      "Operational efficiency"
    ],
    timeframe: "4-8 months",
    investment: "₹65,000-120,000/mo",
    color: "from-purple-500/10 to-purple-600/10",
    borderColor: "border-purple-200"
  },
  {
    title: "Enterprise Transformation",
    description: "Modernize and scale your enterprise with digital transformation strategies.",
    icon: Users,
    challenges: [
      "Digital transformation",
      "Process optimization",
      "Team restructuring",
      "Technology adoption"
    ],
    results: [
      "30% efficiency gains",
      "Modern tech stack",
      "Optimized processes",
      "Scalable operations"
    ],
    timeframe: "12-18 months",
    investment: "₹150,000-300,000/mo",
    color: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-200"
  },
  {
    title: "International Expansion",
    description: "Expand globally with confidence using proven market entry and localization strategies.",
    icon: Globe,
    challenges: [
      "Market research and selection",
      "Localization strategy",
      "Regulatory compliance",
      "Partnership development"
    ],
    results: [
      "3 markets in 12 months",
      "Profitable from day 1",
      "Local market dominance",
      "Scalable expansion"
    ],
    timeframe: "8-18 months",
    investment: "₹100,000-200,000/mo",
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-200"
  },
  {
    title: "Crisis Recovery",
    description: "Turn around struggling businesses with strategic restructuring and growth initiatives.",
    icon: Zap,
    challenges: [
      "Cash flow optimization",
      "Team restructuring",
      "Product portfolio review",
      "Market repositioning"
    ],
    results: [
      "Positive cash flow in 90 days",
      "Optimized team structure",
      "Focused product strategy",
      "Market repositioning"
    ],
    timeframe: "3-9 months",
    investment: "₹80,000-150,000/mo",
    color: "from-yellow-500/10 to-yellow-600/10",
    borderColor: "border-yellow-200"
  }
]

const testimonials = [
  {
    quote: "ABERCXO helped us scale from $1M to $10M ARR in just 18 months. Their fractional leadership model is game-changing.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    company: "SaaS Startup",
    rating: 5
  },
  {
    quote: "We entered 3 new markets profitably within 12 months. The international expansion expertise was invaluable.",
    author: "Michael Rodriguez",
    role: "Founder",
    company: "E-commerce Platform",
    rating: 5
  }
]

export default function SolutionsPage() {
  return (
    <>
      <Head>
        <title>Solutions - ABERCXO</title>
        <meta name="description" content="Tailored solutions for startups, SaaS, e-commerce, and enterprise companies. Transform your business with proven growth strategies." />
      </Head>

      <section className="min-h-screen bg-gradient-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Tailored Solutions</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
              Solutions for Every
              <br />
              <span className="text-gradient-hero">Growth Stage</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From startup to enterprise, we have proven solutions for every business challenge. 
              Our fractional leaders adapt their expertise to your specific needs and goals.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Users className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-body-bold text-white">500+ companies</div>
                  <div className="text-slate-300 text-xs">transformed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Star className="h-6 w-6 text-yellow-500" />
                <div className="text-left">
                  <div className="font-body-bold text-white">4.9/5 rating</div>
                  <div className="text-slate-300 text-xs">client satisfaction</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="font-body-bold text-white">300% avg. growth</div>
                  <div className="text-slate-300 text-xs">revenue increase</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, i) => {
              const IconComponent = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-dark-card rounded-3xl border border-slate-700 p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display-medium text-2xl text-white mb-2">{solution.title}</h3>
                        <p className="font-body text-slate-300 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Challenges */}
                      <div>
                        <h4 className="font-body-semibold text-white text-lg mb-4">Key Challenges We Solve</h4>
                        <div className="space-y-3">
                          {solution.challenges.map((challenge, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span className="font-body text-slate-300 text-sm">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <h4 className="font-body-semibold text-primary text-lg mb-4">Expected Results</h4>
                        <div className="space-y-3">
                          {solution.results.map((result, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="font-body text-slate-300 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                        <div className="text-center">
                          <Clock className="h-5 w-5 text-slate-400 mx-auto mb-2" />
                          <div className="font-body-bold text-white text-sm">{solution.timeframe}</div>
                          <div className="text-xs text-slate-400">Timeline</div>
                        </div>
                        <div className="text-center">
                          <DollarSign className="h-5 w-5 text-slate-400 mx-auto mb-2" />
                          <div className="font-body-bold text-white text-sm">{solution.investment}</div>
                          <div className="text-xs text-slate-400">Investment</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className="w-full btn-primary group">
                        <div className="flex items-center justify-center">
                          Get Solution
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
                Real results from real companies that have transformed their business with our solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-body text-slate-300 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-body-semibold text-white text-lg">{testimonial.author}</p>
                    <p className="font-body text-slate-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-dark-card rounded-3xl p-12 border border-slate-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl text-white">Ready to Transform Your Business?</h3>
                <Award className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a personalized solution recommendation based on your specific challenges, 
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
              <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-700">
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Proven results</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
