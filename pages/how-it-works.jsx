import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { 
  Search, 
  Users, 
  Target, 
  Rocket, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Award,
  Zap,
  Phone,
  Calendar,
  FileText
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "We start with a comprehensive analysis of your business, challenges, and growth goals.",
    icon: Search,
    details: [
      "Business model analysis",
      "Growth challenge identification",
      "Team and process audit",
      "Market opportunity assessment"
    ],
    duration: "1-2 weeks",
    deliverables: [
      "Growth audit report",
      "Challenge prioritization",
      "Initial recommendations"
    ]
  },
  {
    number: "02",
    title: "Leader Matching",
    description: "We match you with the perfect fractional leader based on your specific needs and challenges.",
    icon: Users,
    details: [
      "Expert profile review",
      "Experience alignment",
      "Cultural fit assessment",
      "Reference verification"
    ],
    duration: "3-5 days",
    deliverables: [
      "Leader recommendations",
      "Expert profiles",
      "Success track records"
    ]
  },
  {
    number: "03",
    title: "Strategy Development",
    description: "Your fractional leader creates a customized growth strategy and implementation roadmap.",
    icon: Target,
    details: [
      "Custom growth strategy",
      "Implementation roadmap",
      "Success metrics definition",
      "Resource planning"
    ],
    duration: "1-2 weeks",
    deliverables: [
      "Growth strategy document",
      "Implementation timeline",
      "Success metrics dashboard"
    ]
  },
  {
    number: "04",
    title: "Execution & Implementation",
    description: "Your fractional leader works with your team to execute the strategy and drive results.",
    icon: Rocket,
    details: [
      "Strategy execution",
      "Team coaching",
      "Process implementation",
      "Performance monitoring"
    ],
    duration: "Ongoing",
    deliverables: [
      "Weekly progress reports",
      "Performance dashboards",
      "Team training materials"
    ]
  },
  {
    number: "05",
    title: "Optimization & Scale",
    description: "We continuously optimize and scale your growth initiatives for maximum impact.",
    icon: TrendingUp,
    details: [
      "Performance optimization",
      "Scale strategies",
      "Process refinement",
      "Team expansion"
    ],
    duration: "Ongoing",
    deliverables: [
      "Optimization reports",
      "Scale recommendations",
      "Team growth plans"
    ]
  }
]

const benefits = [
  {
    icon: Clock,
    title: "Fast Start",
    description: "Get started within 48 hours of initial consultation"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "300% average revenue growth across all clients"
  },
  {
    icon: Zap,
    title: "Flexible Engagement",
    description: "Scale up or down based on your needs"
  },
  {
    icon: CheckCircle,
    title: "Risk-Free",
    description: "30-day money-back guarantee"
  }
]

const testimonials = [
  {
    quote: "The process was incredibly smooth. From discovery to implementation, ABERCXO made it feel effortless while delivering exceptional results.",
    author: "Lisa Park",
    role: "CEO",
    company: "TechFlow",
    rating: 5
  },
  {
    quote: "What impressed me most was how quickly they understood our business and matched us with the perfect fractional leader.",
    author: "David Kim",
    role: "Founder",
    company: "GrowthCo",
    rating: 5
  }
]

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works - ABERCXO</title>
        <meta name="description" content="Learn how ABERCXO's fractional leadership process works. From discovery to implementation, see how we transform your business growth." />
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
              <Rocket className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Our Process</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
              How We Transform
              <br />
              <span className="text-gradient-hero">Your Growth</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our proven 5-step process ensures you get the right fractional leader, 
              the right strategy, and the right results. Simple, transparent, and effective.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/20">
                <Clock className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-body-bold text-white">48 hours</div>
                  <div className="text-slate-300 text-xs">to get started</div>
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
                  <div className="font-body-bold text-white">300% growth</div>
                  <div className="text-slate-300 text-xs">average results</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="space-y-12 mb-20">
            {steps.map((step, i) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-green-500 rounded-2xl flex items-center justify-center">
                        <span className="font-display text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="font-display-medium text-3xl text-white mb-2">{step.title}</h3>
                        <p className="font-body text-slate-300 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Details */}
                      <div className="space-y-4">
                        <h4 className="font-body-semibold text-white text-lg">What We Do</h4>
                        <div className="space-y-3">
                          {step.details.map((detail, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span className="font-body text-slate-300 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-4">
                        <h4 className="font-body-semibold text-white text-lg">You Get</h4>
                        <div className="space-y-3">
                          {step.deliverables.map((deliverable, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="font-body text-slate-300 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span className="font-body-medium text-slate-300 text-sm">{step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700 w-full max-w-md">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                          <IconComponent className="h-12 w-12 text-primary" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-body-semibold text-white text-lg mb-2">{step.title}</h4>
                        <p className="font-body text-slate-300 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
                Why Choose Our Process?
              </h2>
              <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven methodology ensures you get results quickly and efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => {
                const IconComponent = benefit.icon
                return (
                  <div key={i} className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700 text-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-body-semibold text-white text-lg mb-3">{benefit.title}</h3>
                    <p className="font-body text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
                Real feedback from companies that have experienced our process.
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
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-dark-card rounded-3xl p-12 border border-slate-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl text-white">Ready to Start Your Growth Journey?</h3>
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Book your free consultation and see how our proven process can transform your business growth.
                Get started in as little as 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-cta group">
                  <div className="flex items-center">
                    Free Consultation
                    <Calendar className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
                <button className="btn-secondary group">
                  <div className="flex items-center">
                    Download Guide
                    <FileText className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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
                  <span className="font-body-medium text-sm">30-day guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
