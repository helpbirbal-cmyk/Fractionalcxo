import React, { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Star, Users, TrendingUp, ArrowRight, Clock, Shield, Zap, Award, DollarSign, Target } from "lucide-react"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage companies looking to establish growth foundations",
      price: billingCycle === "monthly" ? "₹50,000" : "₹500,000",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      savings: billingCycle === "yearly" ? "Save ₹100,000" : "",
      features: [
        "~16 hours/month fractional leadership",
        "1 dedicated fractional leader",
        "Monthly strategy sessions",
        "Progress tracking & reporting",
        "Email & chat support",
        "Resource library access"
      ],
      results: ["Establish growth foundations", "Define clear KPIs", "Build initial processes"],
      popular: false,
      cta: "Start Growing",
      color: "from-blue-500/5 to-blue-600/5",
      borderColor: "border-blue-200",
      icon: Target,
      timeframe: "3-6 months",
      roi: "150% average"
    },
    {
      name: "Growth",
      description: "Ideal for scaling companies ready to accelerate their growth trajectory",
      price: billingCycle === "monthly" ? "₹100,000" : "₹1,000,000",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      savings: billingCycle === "yearly" ? "Save ₹200,000" : "",
      features: [
        "~32 hours/month fractional leadership",
        "1-2 dedicated fractional leaders",
        "Weekly planning & execution",
        "Sales & GTM strategy build",
        "Team coaching & training",
        "Priority support & dashboards",
        "Custom playbooks & frameworks"
      ],
      results: ["3x faster growth", "Optimized sales processes", "Scalable marketing systems"],
      popular: true,
      cta: "Accelerate Growth",
      color: "from-primary/5 to-green-500/5",
      borderColor: "border-primary/20",
      icon: TrendingUp,
      timeframe: "6-12 months",
      roi: "300% average"
    },
    {
      name: "Scale",
      description: "For established companies ready to dominate their market",
      price: billingCycle === "monthly" ? "₹200,000+" : "₹2,000,000+",
      period: billingCycle === "monthly" ? "/mo" : "/year",
      savings: billingCycle === "yearly" ? "Save ₹400,000+" : "",
      features: [
        "Multi-leader fractional pod",
        "GTM + Sales + International expansion",
        "Daily strategic guidance",
        "Priority support & dedicated account manager",
        "Custom dashboards & reporting",
        "Exclusive frameworks & methodologies",
        "Direct access to leadership network"
      ],
      results: ["Market leadership", "International expansion", "Unicorn trajectory"],
      popular: false,
      cta: "Dominate Market",
      color: "from-purple-500/5 to-purple-600/5",
      borderColor: "border-purple-200",
      icon: Zap,
      timeframe: "12-24 months",
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
            <h1 className="font-display-medium text-5xl md:text-6xl lg:text-7xl mb-8">
              Choose Your Growth Path
            </h1>
            <p className="font-body text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Select the perfect plan for your company's growth stage. All plans include 
              proven frameworks, guaranteed results, and world-class fractional leadership.
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
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => {
              const IconComponent = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative"
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
                  
                  <Card className={`card-premium group transition-all duration-500 hover:scale-105 ${
                    plan.popular ? "ring-2 ring-primary/20" : ""
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
                      <button className={`w-full py-5 rounded-2xl font-body-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                        plan.popular 
                          ? "btn-cta" 
                          : "btn-primary"
                      }`}>
                        {plan.cta}
                        <ArrowRight className="h-5 w-5" />
                      </button>
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
