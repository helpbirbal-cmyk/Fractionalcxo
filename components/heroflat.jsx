// components/hero.jsx
import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle, Zap } from "lucide-react"

export default function Hero({ onOpenGTM }) {
  const handleGTMClick = () => {
    console.log("GTM button clicked");
    if (onOpenGTM) onOpenGTM();
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-green-500/10 px-8 py-4 rounded-2xl border border-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Trusted by Fortune 500 & Startups</span>
            <Zap className="h-5 w-5 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-8 font-bold"
          >
            <span className="text-gradient">Unlock Hyper-Growth</span>
            <br />
            <span className="text-white">Without the Full-Time Overhead</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Get instant access to world-class <span className="font-semibold text-white">CGOs, CMOs, CSOs & GTM leaders</span> who've scaled companies from $0 to $100M+.
          </motion.p>

          {/* CTA Buttons - Simplified to just GTM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <button
              onClick={handleGTMClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
            >
              Create GTM Plan
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>NDA protected</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
