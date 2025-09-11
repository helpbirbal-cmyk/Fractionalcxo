// pages/index.jsx (for Option 2)
import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import ProblemCards from "../components/problem-cards";
import CompetitiveAuditSection from "../components/competitive-audit-section"; // <-- Keep this
import ServicesSection from "../components/services-section";
import AuditModal from "../components/audit-modal"; // <-- This is the UPDATED one with competitor field

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>ABECXO – Fractional Growth, Sales, Marketing & GTM</title>
        <meta name="description" content="Unlock hyper-growth with fractional CGO/CMO/CSO, GTM & international expansion. Get a data-driven audit with competitor benchmarking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
      <ProblemCards />
      {/* This section explains the new key feature of the main audit
      <CompetitiveAuditSection onOpenAudit={() => setIsAuditModalOpen(true)} /> */}
      <ServicesSection />
      {/* This single modal now handles everything */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
