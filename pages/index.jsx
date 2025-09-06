import React from "react"
import Head from "next/head"
import Hero from "../components/hero"
import ProblemCards from "../components/problem-cards"
import ServicesSection from "../components/services-section"
import GrowthAudit from "../components/growth-audit" // Import the new component


export default function Home() {
  return (
    <>
      <Head>
        <title>ABERCXO – Fractional Growth, Sales, Marketing & GTM</title>
        <meta name="description" content="Unlock hyper-growth with fractional CGO/CMO/CSO, GTM & international expansion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <ProblemCards />
      <ServicesSection />
      <GrowthAudit  id="growth-audit" /> {/* Add the new component here */}
    </>
  )
}
