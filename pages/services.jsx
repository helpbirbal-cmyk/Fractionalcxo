import React from "react"
import Head from "next/head"
import ServicesSection from "../components/services-section"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - ABERCXO</title>
        <meta name="description" content="Fractional leadership services including CGO, CMO, CSO, and GTM specialists." />
      </Head>
      <ServicesSection />
    </>
  )
}
