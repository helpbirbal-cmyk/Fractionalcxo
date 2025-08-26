import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ABERCXO</title>
        <meta name="description" content="ABERCXO's privacy policy - how we collect, use, and protect your personal information." />
      </Head>
      
      <section className="min-h-screen bg-gradient-to-b from-brand-dark to-brand-mid/20 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
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
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-white/80">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out contact forms or consultation requests</li>
                  <li>Sign up for our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or feedback</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>This may include your name, email address, company information, role, and any other information you choose to provide.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-white/80">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our fractional leadership services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you relevant content and updates</li>
                  <li>Process payments and manage accounts</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <div className="space-y-4 text-white/80">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our business</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <div className="space-y-4 text-white/80">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <div className="space-y-4 text-white/80">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Request data portability</li>
                </ul>
                <p>To exercise these rights, please contact us at privacy@abercxo.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
              <div className="space-y-4 text-white/80">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic and usage</li>
                  <li>Improve our website functionality</li>
                  <li>Provide personalized content</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
              <div className="space-y-4 text-white/80">
                <p>Our website may contain links to third-party services. We are not responsible for the privacy practices of these services. We encourage you to review their privacy policies.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <div className="space-y-4 text-white/80">
                <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. International Transfers</h2>
              <div className="space-y-4 text-white/80">
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <div className="space-y-4 text-white/80">
                <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <div className="space-y-4 text-white/80">
                <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p><strong>Email:</strong> privacy@abercxo.com</p>
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
