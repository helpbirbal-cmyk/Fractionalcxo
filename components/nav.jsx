import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from 'next/image';


const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image src="/aberdeenlogo.svg" alt="ABERCXO logo" width={50} height={50} />

        <Link href="/" className="flex items-center space-x-2 group">

          <div className="w-8 h-8 bg-gradient-to-br from-primary to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm"></span>
          </div>
          <span className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors">
            ABERCXO
          </span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-200 group ${
                router.pathname === link.href
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900"
              }`}>

              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full ${
                router.pathname === link.href ? "w-full" : ""
              }`} />

            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
              Book Session
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-600" />
          ) : (
            <Menu className="h-6 w-6 text-slate-600" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    router.pathname === link.href
                      ? "text-primary"
                      : "text-slate-600 hover:text-slate-900"
                  }`}>

                  {link.label}

                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="block w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Session
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
