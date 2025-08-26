import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl">ABERCXO</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Fractional CGO, CMO, CSO, GTM and International Expansion leaders—on-demand. 
              Transform your growth with world-class executive leadership.
            </p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                500+ companies served
              </span>
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                4.9/5 rating
              </span>
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                300% avg. growth
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/services" className="hover:text-primary transition-colors">Fractional CGO</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Fractional CMO</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Fractional CSO</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">GTM Specialists</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">International Expansion</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-slate-300">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ABERCXO. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              Made with <span className="text-red-400">❤️</span> for growth
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
