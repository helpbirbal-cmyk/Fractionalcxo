import React, { useState } from "react"
import Head from "next/head"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp, 
  Clock, 
  Shield,
  Zap,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Target,
  DollarSign,
  Check
} from "lucide-react"

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    challenge: "",
    timeline: "",
    budget: "",
    phone: "",
    message: ""
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const steps = [
    {
      title: "Basic Information",
      description: "Tell us about yourself and your company",
      fields: ["name", "email", "company", "role", "companySize"]
    },
    {
      title: "Growth Challenges & Goals",
      description: "What specific challenges are you facing and what's your timeline?",
      fields: ["challenge", "timeline", "budget", "phone", "message"]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "48-Hour Response",
      description: "Get your personalized growth strategy within 48 hours"
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "All discussions are protected by strict NDAs"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Join 500+ companies that have accelerated growth"
    },
    {
      icon: Zap,
      title: "No Obligation",
      description: "Free consultation with no pressure to commit"
    }
  ]

  const testimonials = [
    {
      quote: "ABERCXO transformed our growth strategy completely. We went from struggling to scale to 300% revenue growth in 12 months.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow",
      rating: 5
    },
    {
      quote: "The fractional leadership model is genius. We got world-class expertise without the full-time overhead.",
      author: "Michael Chen",
      role: "Founder, GrowthCo",
      rating: 5
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us - ABERCXO</title>
        <meta name="description" content="Get in touch with ABERCXO for fractional leadership solutions. Book your free consultation today." />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-green-500/10 px-6 py-3 rounded-2xl border border-primary/20 mb-6">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Get Started Today</span>
            </div>
        <h1 className="font-display-medium text-3xl md:text-4xl lg:text-5xl mb-6">
          Let's Transform Your Growth
        </h1>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Ready to unlock hyper-growth? Book your free consultation and get a personalized 
              roadmap to scale your business with world-class fractional leadership.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-lg">
                <Users className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-body-bold text-slate-900">500+ companies</div>
                  <div className="text-slate-500 text-xs">trust our leadership</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-lg">
                <Star className="h-6 w-6 text-yellow-500" />
                <div className="text-left">
                  <div className="font-body-bold text-slate-900">4.9/5 rating</div>
                  <div className="text-slate-500 text-xs">client satisfaction</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-lg">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="font-body-bold text-slate-900">300% avg. growth</div>
                  <div className="text-slate-500 text-xs">revenue increase</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-premium p-10 shadow-2xl"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {steps.map((s, i) => (
                      <div key={i} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-body-semibold ${
                          step > i + 1 ? 'bg-primary text-white' : 
                          step === i + 1 ? 'bg-primary/20 text-primary border-2 border-primary' : 
                          'bg-slate-100 text-slate-400'
                        }`}>
                          {step > i + 1 ? <Check className="h-5 w-5" /> : i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`w-16 h-1 mx-2 ${step > i + 1 ? 'bg-primary' : 'bg-slate-200'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <h3 className="font-body-semibold text-slate-900 text-lg">{steps[step - 1].title}</h3>
                    <p className="font-body text-slate-600">{steps[step - 1].description}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid md:grid-cols-2 gap-6"
                      >
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Company Name *</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          />
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Your Role *</label>
                          <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          >
                            <option value="">Select your role</option>
                            <option value="CEO">CEO / Founder</option>
                            <option value="CTO">CTO</option>
                            <option value="CMO">CMO</option>
                            <option value="VP Sales">VP Sales</option>
                            <option value="VP Marketing">VP Marketing</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="font-body-semibold text-slate-900 mb-2 block">Company Size *</label>
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          >
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Primary Challenge *</label>
                          <select
                            name="challenge"
                            value={formData.challenge}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          >
                            <option value="">Select your main challenge</option>
                            <option value="Growth Plateau">Stuck in growth plateau</option>
                            <option value="Sales Team Struggling">Sales team struggling</option>
                            <option value="Need Turnaround">Need turnaround fast</option>
                            <option value="Can't Afford Full-Time CXO">Can't afford full-time CXO</option>
                            <option value="Marketing ROI">Poor marketing ROI</option>
                            <option value="Product Launch">Product launch struggles</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Timeline *</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          >
                            <option value="">Select your timeline</option>
                            <option value="Immediate">Immediate (within 30 days)</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6+ months">6+ months</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Budget Range *</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            required
                          >
                            <option value="">Select budget range</option>
                            <option value="₹50,000/month">₹50,000/month (Growth Accelerator)</option>
                            <option value="₹100,000/month">₹100,000/month (Turnaround Specialist)</option>
                            <option value="Custom">Custom budget</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input-premium"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="font-body-semibold text-slate-900 mb-2 block">Additional Details</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="form-input-premium"
                            placeholder="Tell us more about your specific needs, goals, or any questions you have..."
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary group"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Previous
                      </button>
                    )}
                    {step < 2 ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={nextStep}
                        className="btn-primary group ml-auto"
                      >
                        Next Step
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn-cta group ml-auto"
                      >
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Benefits */}
              <div className="card-premium p-8">
                <h3 className="font-display-medium text-2xl mb-6">Why Choose ABERCXO?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, i) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-body-semibold text-slate-900 mb-1">{benefit.title}</h4>
                          <p className="font-body text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Testimonials */}
              <div className="card-premium p-8">
                <h3 className="font-display-medium text-2xl mb-6">What Our Clients Say</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="font-body text-slate-700 text-sm italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-body-semibold text-slate-900 text-sm">{testimonial.author}</p>
                        <p className="font-body text-slate-500 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="card-premium p-8">
                <h3 className="font-display-medium text-2xl mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body-semibold text-slate-900">Email</p>
                      <p className="font-body text-slate-600 text-sm">hello@abercxo.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body-semibold text-slate-900">Phone</p>
                      <p className="font-body text-slate-600 text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-green-500/10 border border-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body-semibold text-slate-900">Office</p>
                      <p className="font-body text-slate-600 text-sm">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-20"
          >
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl">Ready to Start Your Growth Journey?</h3>
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Don't let growth challenges hold you back. Join hundreds of companies that have 
                transformed their business with our fractional leadership services.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-cta group">
                  <div className="flex items-center">
                    Schedule Call
                    <Calendar className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  </div>
                </button>
                <button className="btn-secondary group">
                  <div className="flex items-center">
                    Download Cases
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">48-hour response</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
