import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, Star, Users, TrendingUp, Sparkles, CheckCircle, Zap, Clock } from "lucide-react"
import Link from 'next/link';
import { Check } from "lucide-react";
import LeadGenerationModal from "./lead-generation-modal";


export default function Hero({ onOpenGTM }) {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadMagnet, setLeadMagnet] = useState("consultation");

  const handleGTMClick = () => {
    console.log("GTM button clicked");
    if (onOpenGTM) onOpenGTM();
  };

  const handleLeadClick = (magnet) => {
    setLeadMagnet(magnet);
    setIsLeadModalOpen(true);
  };

  return (
      <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl"
        />

        {/* Premium Floating Elements */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-br from-primary/30 to-green-500/30 rounded-full shadow-lg shadow-primary/20"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full shadow-lg shadow-green-500/20"
        />
        <motion.div
          animate={{ 
            y: [-25, 25, -25],
            x: [0, 10, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-4 h-4 bg-gradient-to-br from-blue-500/30 to-primary/30 rounded-full shadow-lg shadow-blue-500/20"
        />

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(23,177,111,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,177,111,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Hero Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 sm:px-8 py-4 rounded-2xl border border-primary/20 backdrop-blur-md shadow-lg shadow-primary/10"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="font-body-semibold text-primary text-base sm:text-lg">Trusted by 50+ Growth Startups</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="h-5 w-5 text-primary" />
              </motion.div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/20 to-green-500/20 border-2 border-white/20 flex items-center justify-center">
                    <span className="text-xs font-body-bold text-primary">+</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
                 <motion.h1
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight"
                 >
                   <motion.span 
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     className="text-white block mb-3"
                   >
                     Stop Losing ₹50L+ Monthly to
                   </motion.span>
                   <motion.span 
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.6 }}
                     className="text-gradient-hero block"
                   >
                     Growth Plateaus & Poor Leadership
                   </motion.span>
                 </motion.h1>
                 <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.8 }}
                   className="font-body text-lg md:text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                  >
                   Get <span className="font-body-bold text-white">20+ years of major brand expansion experience</span> at 1/3 the cost of full-time CXOs. We help growth-stage startups break through plateaus and achieve <span className="font-body-bold text-primary">300% revenue growth</span> in 6 months.
                 </motion.p>

                 {/* Social Proof Bar */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 1.0 }}
                   className="flex flex-wrap justify-center items-center gap-8 mb-12 text-slate-300"
                 >
                   <div className="flex items-center gap-2">
                     <div className="flex -space-x-2">
                       {[1,2,3,4,5].map((i) => (
                         <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-green-500/20 border-2 border-white/20 flex items-center justify-center">
                           <span className="text-xs font-body-bold text-primary">+</span>
                         </div>
                       ))}
                     </div>
                     <span className="font-body-semibold">500+ companies trust us</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                     <span className="font-body-semibold">4.9/5 rating</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <TrendingUp className="h-5 w-5 text-green-400" />
                     <span className="font-body-semibold">300% avg. growth</span>
                   </div>
                 </motion.div>

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLeadClick("consultation")}
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-green-500 to-emerald-500 text-white font-body-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center">
                Get Free ₹50,000 Strategy Session
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLeadClick("audit")}
              className="group bg-white/10 backdrop-blur-md text-white font-body-semibold px-8 py-4 rounded-2xl border-2 border-white/20 transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <div className="flex items-center">
                Download Growth Blueprint
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </motion.div>

          {/* Urgency Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200/30 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-red-600">
              <Clock className="h-5 w-5" />
              <span className="font-body-semibold">Limited Time: Only 5 spots left this month</span>
            </div>
            <p className="text-center text-slate-400 text-sm mt-2">
              Join 47 companies who've already booked their free strategy sessions
            </p>
          </motion.div>

          {/* Premium Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300"
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-body-medium">30-day money-back guarantee</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300"
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-body-medium">NDA protected</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-300"
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-body-medium">Start in 48 hours</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Lead Generation Modal */}
      <LeadGenerationModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        leadMagnet={leadMagnet}
      />
    </section>
  )
}
