import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service - ABERCXO</title>
        <meta name="description" content="ABERCXO's terms of service - governing the use of our fractional leadership services." />
      </Head>
      
      <section className="min-h-screen bg-gradient-to-b from-brand-dark to-brand-mid/20 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white/70">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-brand-mid/40 to-brand-mid/20 rounded-2xl p-8 border border-white/10 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-white/80">
                <p>By accessing and using ABERCXO's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-white/80">
                <p>ABERCXO provides fractional leadership services including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fractional CGO, CMO, CSO services</li>
                  <li>GTM strategy and implementation</li>
                  <li>International expansion consulting</li>
                  <li>Sales and marketing optimization</li>
                  <li>Growth strategy development</li>
                  <li>Team coaching and training</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Service Engagement</h2>
              <div className="space-y-4 text-white/80">
                <p>Our services are provided on a retainer basis with the following terms:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Services commence upon agreement and payment</li>
                  <li>Minimum engagement periods may apply</li>
                  <li>Services are provided remotely unless otherwise agreed</li>
                  <li>Client cooperation and access to necessary information is required</li>
                  <li>Results depend on client implementation and market conditions</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <div className="space-y-4 text-white/80">
                <p>Payment terms and conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fees are billed monthly in advance</li>
                  <li>Payment is due within 15 days of invoice date</li>
                  <li>Late payments may result in service suspension</li>
                  <li>All fees are non-refundable except as specified in our guarantee</li>
                  <li>Price changes will be communicated 30 days in advance</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
              <div className="space-y-4 text-white/80">
                <p>Clients agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate with our team and implement recommendations</li>
                  <li>Maintain confidentiality of proprietary information</li>
                  <li>Pay fees in a timely manner</li>
                  <li>Not interfere with service delivery</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-white/80">
                <p>Intellectual property rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ABERCXO retains ownership of proprietary methodologies and frameworks</li>
                  <li>Client-specific deliverables become client property upon payment</li>
                  <li>We may use anonymized case studies for marketing purposes</li>
                  <li>Neither party may use the other's trademarks without permission</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
              <div className="space-y-4 text-white/80">
                <p>Both parties agree to maintain confidentiality of:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Business strategies and plans</li>
                  <li>Financial information</li>
                  <li>Customer and employee data</li>
                  <li>Proprietary methodologies</li>
                  <li>Any information marked as confidential</li>
                </ul>
                <p>Confidentiality obligations survive termination of services.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-white/80">
                <p>ABERCXO's liability is limited to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Direct damages up to the amount paid for services</li>
                  <li>Exclusion of indirect, consequential, or punitive damages</li>
                  <li>No liability for business decisions made by clients</li>
                  <li>No guarantee of specific business outcomes</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <div className="space-y-4 text-white/80">
                <p>Services may be terminated:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>By either party with 30 days written notice</li>
                  <li>Immediately for material breach of terms</li>
                  <li>Upon non-payment of fees</li>
                  <li>Upon mutual agreement</li>
                </ul>
                <p>Upon termination, clients remain responsible for fees through the notice period.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
              <div className="space-y-4 text-white/80">
                <p>Dispute resolution process:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Parties agree to attempt resolution through good faith negotiation</li>
                  <li>If unresolved, disputes will be settled through mediation</li>
                  <li>If mediation fails, disputes will be resolved through binding arbitration</li>
                  <li>Arbitration will be conducted in accordance with applicable rules</li>
                  <li>Each party bears their own costs unless otherwise determined</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <div className="space-y-4 text-white/80">
                <p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts of [Your Jurisdiction].</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <div className="space-y-4 text-white/80">
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of modified terms.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <div className="space-y-4 text-white/80">
                <p>For questions about these terms, please contact us:</p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong>Email:</strong> legal@abercxo.com</p>
                  <p><strong>Address:</strong> ABERCXO, [Your Business Address]</p>
                  <p><strong>Phone:</strong> [Your Phone Number]</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
