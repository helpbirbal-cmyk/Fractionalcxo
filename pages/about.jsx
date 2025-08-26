import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Zap,
  Clock,
  Shield
} from "lucide-react"

const stats = [
  {
    number: "500+",
    label: "Companies Served",
    description: "From startup to enterprise"
  },
  {
    number: "4.9/5",
    label: "Client Rating",
    description: "Average satisfaction score"
  },
  {
    number: "300%",
    label: "Avg. Growth",
    description: "Revenue increase"
  },
  {
    number: "20+",
    label: "Years Experience",
    description: "Per fractional leader"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and tangible business impact."
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your success is our success. We're invested in your growth journey."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Open communication and honest feedback at every step."
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description: "Move fast, adapt quickly, and stay ahead of the competition."
  }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    experience: "Former VP Growth at TechCorp",
    expertise: "SaaS scaling, GTM strategy"
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    experience: "Ex-Operations Director at ScaleUp",
    expertise: "Process optimization, team scaling"
  },
  {
    name: "Lisa Park",
    role: "Head of Client Success",
    experience: "Former Customer Success at GrowthCo",
    expertise: "Client relationships, success metrics"
  }
]

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ABERCXO</title>
        <meta name="description" content="Learn about ABERCXO's mission to democratize access to top-tier executive leadership." />
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
              <Users className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">About ABERCXO</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
              Democratizing
              <br />
              <span className="text-gradient-hero">Executive Leadership</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We believe every company deserves access to world-class executive leadership. 
              Our mission is to make proven growth expertise accessible, affordable, and effective.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700">
                  <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="font-body-semibold text-slate-300 text-lg mb-1">{stat.label}</div>
                  <div className="font-body text-slate-400 text-sm">{stat.description}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-display-medium text-3xl text-white">Our Mission</h2>
              </div>
              <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
                ABERCXO exists to democratize access to top-tier executive leadership. Our seasoned leaders 
                (20+ years avg.) have scaled startups across SaaS, ecommerce, fintech, healthtech and more—aligning 
                product, marketing and sales to deliver measurable growth.
              </p>
              <p className="font-body text-slate-300 leading-relaxed">
                We believe that every company, regardless of size or stage, deserves access to the same level 
                of strategic thinking and execution excellence that Fortune 500 companies enjoy.
              </p>
            </div>

            <div className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-display-medium text-3xl text-white">Our Vision</h2>
              </div>
              <p className="font-body text-slate-300 text-lg leading-relaxed mb-6">
                To become the world's most trusted platform for fractional executive leadership, 
                enabling companies to scale faster, smarter, and more sustainably.
              </p>
              <p className="font-body text-slate-300 leading-relaxed">
                We envision a future where every entrepreneur has access to the strategic guidance 
                they need to build world-changing companies, without the traditional barriers of cost and commitment.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
                Our Core Values
              </h2>
              <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => {
                const IconComponent = value.icon
                return (
                  <div key={i} className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700 text-center">
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-body-semibold text-white text-lg mb-3">{value.title}</h3>
                    <p className="font-body text-slate-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
                Meet Our Leadership
              </h2>
              <p className="font-body text-xl text-slate-300 max-w-3xl mx-auto">
                The team behind ABERCXO's mission to democratize executive leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-body-semibold text-white text-xl mb-2">{member.name}</h3>
                  <p className="font-body-medium text-primary text-lg mb-4">{member.role}</p>
                  <p className="font-body text-slate-300 text-sm mb-3">{member.experience}</p>
                  <p className="font-body text-slate-400 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-gradient-dark-card rounded-3xl p-12 border border-slate-700 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl text-white">Ready to Work With Us?</h3>
                <Award className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of companies that have transformed their growth with our fractional leadership services.
                Let's discuss how we can help you scale your business.
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
                    View Cases
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
