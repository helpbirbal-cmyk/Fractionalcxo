import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, TrendingUp, Sparkles, CheckCircle, Zap } from "lucide-react"
import Link from 'next/link';
import { Check } from "lucide-react";


export default function Hero({ onOpenGTM }) {
  const handleGTMClick = () => {
    console.log("GTM button clicked");
    if (onOpenGTM) onOpenGTM();
  };

  return (
      <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-dark">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-6 h-6 bg-green-500/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-500/20 rounded-full"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Hero Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-green-500/10 px-8 py-2 rounded-2xl border border-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-body-semibold text-primary">Trusted by 50+ Growth Startups</span>
            <Zap className="h-5 w-5 text-primary" />
          </motion.div>
                <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="font-display text-5xl md:text-6xl lg:text-7xl mb-8"
                 >
                   <span className="text-gradient-hero">Unlock Hyper-Growth</span>
                   <br />
                   <span className="text-white">Without the Full-Time Overhead</span>
                 </motion.h1>
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.3 }}
                   className="font-body text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                  >
                   Get instant access to world-class <span className="font-body-semibold text-white">CGOs, CMOs, CSOs & GTM Experts</span> who've scaled
                   companies from $0 to $100M+. Fractional leadership that delivers measurable results in weeks, not years.
                 </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-0 text-sm mb-4"
          >
          {/* Feature List */}
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-start gap-3">
                 <div className="pt-0.5">
                   <Check className="text-primary h-5 w-5" />
                 </div>
                 <span className="text-card-foreground text-base leading-6 font-medium">
                   Proven Experts
                 </span>
               </div>
               <div className="flex items-start gap-3">
                 <div className="pt-0.5">
                   <Check className="text-primary h-5 w-5" />
                 </div>
                 <span className="text-card-foreground text-base leading-6 font-medium">
                   Hands-On
                 </span>
               </div>
               <div className="flex items-start gap-3">
                 <div className="pt-0.5">
                   <Check className="text-primary h-5 w-5" />
                 </div>
                 <span className="text-card-foreground text-base leading-6 font-medium">
                   Flexible
                 </span>
               </div>
             </div>
  </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >

          <button
            onClick={handleGTMClick}
            className="ring-1 ring-red-600 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
          >
            GTM Plan Builder
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>


          </motion.div>

          {/* Bottom Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>NDA protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
