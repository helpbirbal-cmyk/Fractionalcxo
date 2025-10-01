import React, { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Star, Users, TrendingUp, ArrowRight, Clock, Shield, Zap, Award, DollarSign, Target } from "lucide-react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  
  const plans = [
    {
      name: "Growth Accelerator",
      description: "Perfect for growth-stage startups looking to accelerate their trajectory",
      price: billingCycle === "monthly" ? "₹50,000" : "₹500,000",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      savings: billingCycle === "yearly" ? "Save ₹100,000" : "",
      features: [
        "15 hours/month fractional leadership",
        "Choose: CGMO, CSO, or GTM Strategy",
        "Weekly strategy sessions",
        "Progress tracking & reporting",
        "Email & chat support",
        "Start in 48 hours"
      ],
      results: ["Establish growth foundations", "Define clear KPIs", "Build scalable processes"],
      popular: true,
      cta: "Start Growing",
      color: "from-primary/5 to-green-500/5",
      borderColor: "border-primary/20",
      icon: TrendingUp,
      timeframe: "3-6 months",
      roi: "300% average"
    },
    {
      name: "Turnaround Specialist",
      description: "For companies needing immediate results and crisis management",
      price: billingCycle === "monthly" ? "₹100,000" : "₹1,000,000",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      savings: billingCycle === "yearly" ? "Save ₹200,000" : "",
      features: [
        "30 hours/month intensive leadership",
        "Crisis management & rapid growth",
        "Daily strategic guidance",
        "Priority support & dedicated account manager",
        "Custom dashboards & reporting",
        "Immediate intervention & results"
      ],
      results: ["6-month turnaround", "500% growth acceleration", "Crisis resolution"],
      popular: false,
      cta: "Get Turnaround",
      color: "from-red-500/5 to-red-600/5",
      borderColor: "border-red-200",
      icon: Zap,
      timeframe: "3-6 months",
      roi: "500% average"
    },
  ]

  return (
    <>
      <Head>
        <title>Pricing - ABERCXO</title>
        <meta name="description" content="Flexible pricing plans for fractional leadership services. Choose the plan that fits your growth stage and budget." />
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
              <Award className="h-5 w-5 text-primary" />
              <span className="font-body-semibold text-primary">Flexible Pricing Plans</span>
            </div>
        <h1 className="font-display-medium text-3xl md:text-4xl lg:text-5xl mb-6">
          Simple, Clear Pricing
        </h1>
            <p className="font-body text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Choose the engagement model that fits your needs. Both plans include 
              20+ years of major brand experience and start in 48 hours.
            </p>

            {/* Premium Billing Toggle */}
            <div className="flex items-center justify-center gap-6">
              <span className={`font-body-semibold text-lg ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-500"}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                  billingCycle === "yearly" ? "bg-gradient-to-r from-primary to-green-500" : "bg-slate-200"
                }`}
              >
                <div className={`absolute top-1 w-8 h-8 bg-white rounded-full transition-all duration-300 shadow-lg ${
                  billingCycle === "yearly" ? "translate-x-10" : "translate-x-1"
                }`} />
              </button>
              <div className="flex items-center gap-3">
                <span className={`font-body-semibold text-lg ${billingCycle === "yearly" ? "text-slate-900" : "text-slate-500"}`}>
                  Yearly
                </span>
                {billingCycle === "yearly" && (
                  <span className="bg-gradient-to-r from-primary/10 to-green-500/10 text-primary text-sm px-4 py-2 rounded-full font-body-semibold border border-primary/20">
                    Save 17%
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const IconComponent = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-green-500 text-white text-sm px-6 py-3 rounded-full font-body-semibold shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-white" />
                          Most Popular
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Card className={`card-premium group transition-all duration-500 ${
                    plan.popular ? "ring-2 ring-primary/20 shadow-2xl shadow-primary/10" : "shadow-xl"
                  }`}>
                    <CardHeader className="text-center pb-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <CardTitle className="font-display-medium text-3xl mb-4 text-slate-900">{plan.name}</CardTitle>
                      <p className="font-body text-slate-600 leading-relaxed">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {/* Pricing */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="font-display text-5xl font-bold text-slate-900">{plan.price}</span>
                          <span className="font-body text-slate-500 text-xl">{plan.period}</span>
                        </div>
                        {plan.savings && (
                          <div className="text-primary font-body-semibold text-lg">{plan.savings}</div>
                        )}
                        
                        {/* Plan Metrics */}
                        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
                          <div className="text-center">
                            <Clock className="h-5 w-5 text-slate-500 mx-auto mb-2" />
                            <div className="font-body-bold text-slate-900">{plan.timeframe}</div>
                            <div className="text-xs text-slate-500">Timeline</div>
                          </div>
                          <div className="text-center">
                            <DollarSign className="h-5 w-5 text-slate-500 mx-auto mb-2" />
                            <div className="font-body-bold text-slate-900">{plan.roi}</div>
                            <div className="text-xs text-slate-500">ROI</div>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="font-body-semibold text-slate-900 text-lg">What's Included:</h4>
                        {plan.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-4">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-body text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Expected Results */}
                      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
                        <h4 className="font-body-semibold text-primary text-lg mb-4">Expected Results:</h4>
                        <div className="space-y-3">
                          {plan.results.map((result, j) => (
                            <div key={j} className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span className="font-body text-slate-700 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 rounded-2xl font-body-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                          plan.popular 
                            ? "btn-cta" 
                            : "btn-primary"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="card-premium p-6 mb-4">
                <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="font-body-medium text-slate-600">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="card-premium p-6 mb-4">
                <Star className="h-10 w-10 text-primary mx-auto mb-3" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900 mb-2">4.9/5</div>
              <div className="font-body-medium text-slate-600">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="card-premium p-6 mb-4">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900 mb-2">300%</div>
              <div className="font-body-medium text-slate-600">Avg. Growth</div>
            </div>
            <div className="text-center">
              <div className="card-premium p-6 mb-4">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
              </div>
              <div className="font-display text-3xl font-bold text-slate-900 mb-2">100%</div>
              <div className="font-body-medium text-slate-600">Satisfaction</div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="card-premium p-12 mb-20"
          >
            <h3 className="font-display-medium text-3xl md:text-4xl text-center mb-12">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-body-semibold text-slate-900 text-lg mb-3">Can I change plans anytime?</h4>
                <p className="font-body text-slate-600 leading-relaxed">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with no penalties.</p>
              </div>
              <div>
                <h4 className="font-body-semibold text-slate-900 text-lg mb-3">What if I'm not satisfied?</h4>
                <p className="font-body text-slate-600 leading-relaxed">We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment.</p>
              </div>
              <div>
                <h4 className="font-body-semibold text-slate-900 text-lg mb-3">How quickly can we start?</h4>
                <p className="font-body text-slate-600 leading-relaxed">Most clients start within 48 hours of signing up. We'll have your fractional leader ready to go immediately.</p>
              </div>
              <div>
                <h4 className="font-body-semibold text-slate-900 text-lg mb-3">Do you offer custom plans?</h4>
                <p className="font-body text-slate-600 leading-relaxed">Absolutely! Contact us for custom enterprise solutions tailored to your specific needs and scale.</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="card-premium p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="font-display-medium text-3xl md:text-4xl">Ready to Transform Your Growth?</h3>
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <p className="font-body text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of companies that have accelerated their growth with our fractional leadership services.
                Start your journey to hyper-growth today.
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
                    Download Guide
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-10 pt-10 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">30-day guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">No setup fees</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="font-body-medium text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
