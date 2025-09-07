import React from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Home,
  ArrowLeft,
  Search,
  Users,
  Target,
  BookOpen
} from "lucide-react"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | ABERCXO</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let us help you find what you need." />
      </Head>
      <section className="min-h-screen bg-gradient-dark flex items-center justify-center py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* 404 Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="text-8xl md:text-9xl font-display font-bold text-white mb-8">
              404
            </div>
            <h1 className="font-display-medium text-4xl md:text-5xl text-white mb-6">
              Page Not Found
            </h1>
            <p className="font-body text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Let us help you find what you need.
            </p>

            {/* Action Buttons */}
                               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                     <Link href="/" className="btn-primary group" >
                       <div className="flex items-center">
                         <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                         Go Home
                       </div>
                     </Link>
                     <Link href="/contact" className="btn-secondary group" >
                       <div className="flex items-center">
                         <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                         Contact Support
                       </div>
                     </Link>
                   </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-display-medium text-2xl md:text-3xl text-white mb-8">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services" className="group" >
                <div className="bg-gradient-dark-card rounded-2xl p-8 border border-slate-700 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20 group-hover:scale-110 transition-transform">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-body-semibold text-white text-lg mb-2 group-hover:text-primary transition-colors">
                    Our Services
                  </h3>
                  <p className="font-body text-slate-300 text-sm">
                    Explore our fractional leadership services
                  </p>
                </div>
              </Link>

              <Link href="/solutions" className="group" >
                <div className="bg-gradient-dark-card rounded-2xl p-8 border border-slate-700 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-body-semibold text-white text-lg mb-2 group-hover:text-primary transition-colors">
                    Solutions
                  </h3>
                  <p className="font-body text-slate-300 text-sm">
                    Tailored solutions for your business
                  </p>
                </div>
              </Link>

              <Link href="/blog" className="group" >
                <div className="bg-gradient-dark-card rounded-2xl p-8 border border-slate-700 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20 group-hover:scale-110 transition-transform">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-body-semibold text-white text-lg mb-2 group-hover:text-primary transition-colors">
                    Blog
                  </h3>
                  <p className="font-body text-slate-300 text-sm">
                    Growth insights and strategies
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-dark-card rounded-3xl p-8 border border-slate-700"
          >
            <h2 className="font-display-medium text-2xl md:text-3xl text-white mb-6">
              Need Help?
            </h2>
            <p className="font-body text-slate-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate
              our services and find the right solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-cta group" >
                <div className="flex items-center">
                  Get in Touch
                  <ArrowLeft className="ml-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/how-it-works" className="btn-secondary group" >
                <div className="flex items-center">
                  How It Works
                  <ArrowLeft className="ml-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
