import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Users, Globe, ArrowRight, Star, Calendar } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "From $2M to $50M in 18 Months",
    company: "TechFlow Solutions",
    industry: "SaaS",
    challenge: "Struggling with sales plateau and poor customer acquisition",
    solution: "Implemented fractional CGO with complete GTM overhaul",
    results: [
      "300% revenue growth in 18 months",
      "CAC reduced by 65%",
      "Customer lifetime value increased 3x",
      "Team expanded from 15 to 85 employees"
    ],
    metrics: {
      revenue: "$50M",
      growth: "300%",
      timeline: "18 months",
      roi: "1200%"
    },
    testimonial: "ABERCXO transformed our entire growth strategy. Their fractional CGO became an integral part of our leadership team and delivered results beyond our expectations.",
    author: "Sarah Chen",
    role: "CEO & Founder",
    avatar: "SC",
    featured: true
  },
  {
    id: 2,
    title: "International Expansion Success",
    company: "GlobalScale Inc",
    industry: "E-commerce",
    challenge: "Failed attempts to enter European markets",
    solution: "Fractional International Expansion specialist",
    results: [
      "Successfully entered 3 European markets",
      "€15M revenue in first year",
      "Local partnerships established",
      "Zero failed market entries"
    ],
    metrics: {
      revenue: "€15M",
      markets: "3",
      timeline: "12 months",
      roi: "800%"
    },
    testimonial: "The international expansion expertise was invaluable. We went from struggling to enter one market to dominating three markets simultaneously.",
    author: "David Kim",
    role: "International Director",
    avatar: "DK"
  },
  {
    id: 3,
    title: "Product Launch Mastery",
    company: "InnovateCorp",
    industry: "FinTech",
    challenge: "Multiple failed product launches and poor market adoption",
    solution: "GTM specialist with proven launch framework",
    results: [
      "10x faster market penetration",
      "90% launch success rate",
      "Customer acquisition cost halved",
      "Market share leader in 6 months"
    ],
    metrics: {
      penetration: "10x",
      success: "90%",
      timeline: "6 months",
      roi: "950%"
    },
    testimonial: "Our product launches went from disasters to market-leading successes. The GTM framework is now our standard operating procedure.",
    author: "Lisa Park",
    role: "Product Lead",
    avatar: "LP"
  },
  {
    id: 4,
    title: "Sales Team Transformation",
    company: "GrowthCo",
    industry: "B2B Services",
    challenge: "Inefficient sales processes and low team productivity",
    solution: "Fractional CSO with sales optimization",
    results: [
      "Close rate improved from 12% to 34%",
      "Sales cycle reduced by 50%",
      "Team productivity increased 3x",
      "Revenue per rep doubled"
    ],
    metrics: {
      closeRate: "34%",
      cycle: "50%",
      productivity: "3x",
      roi: "650%"
    },
    testimonial: "The sales transformation was incredible. Our team went from struggling to hit targets to consistently exceeding them by 40%.",
    author: "Mike Rodriguez",
    role: "VP Sales",
    avatar: "MR"
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies - ABERCXO</title>
        <meta name="description" content="Real success stories from companies that transformed their growth with ABERCXO's fractional leadership services." />
      </Head>
      
      <section className="min-h-screen bg-gradient-to-b from-brand-dark to-brand-mid/20 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories That Inspire
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real results from real companies. See how our fractional leaders have transformed 
              businesses across industries and helped them achieve extraordinary growth.
            </p>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            {caseStudies.filter(cs => cs.featured).map(cs => (
              <div key={cs.id} className="bg-gradient-to-br from-primary/10 to-green-500/10 rounded-2xl p-8 border border-primary/20">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                        Featured Case Study
                      </span>
                      <span className="text-white/60 text-sm">{cs.industry}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{cs.title}</h2>
                    <p className="text-white/80 mb-6">{cs.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">{cs.metrics.revenue}</div>
                        <div className="text-sm text-white/60">Revenue</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">{cs.metrics.growth}</div>
                        <div className="text-sm text-white/60">Growth</div>
                      </div>
                    </div>

                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div>
                    <div className="bg-white/5 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4">Key Results</h3>
                      <div className="space-y-3">
                        {cs.results.map((result, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-white/80 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {cs.avatar}
                        </div>
                        <div>
                          <div className="font-semibold">{cs.author}</div>
                          <div className="text-sm text-white/60">{cs.role}</div>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm italic">"{cs.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* All Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-gradient-to-br from-brand-mid/40 to-brand-mid/20 rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60 text-sm">{cs.industry}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-white/60">Success Story</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{cs.title}</h3>
                <p className="text-white/70 text-sm mb-4">{cs.challenge}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(cs.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-lg p-3">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-white/60 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
                      {cs.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{cs.author}</div>
                      <div className="text-xs text-white/60">{cs.role}</div>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs italic">"{cs.testimonial.substring(0, 100)}..."</p>
                </div>

                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium py-2 px-4 rounded-lg transition-colors border border-primary/20 flex items-center justify-center gap-2">
                  <div className="flex items-center">
                    Read Story
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have transformed their growth with our fractional leadership services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  <div className="flex items-center">
                    Start Transformation
                  </div>
                </button>
                <button className="border border-white/20 text-white/90 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                  <div className="flex items-center">
                    Download PDF
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
