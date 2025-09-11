// pages/index.jsx
import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import ProblemCards from "../components/problem-cards";
import CompetitiveAuditSection from "../components/competitive-audit-section";
import ServicesSection from "../components/services-section";
import AuditModal from "../components/audit-modal";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>ABERCXO – Fractional Growth, Sales, Marketing & GTM</title>
        <meta name="description" content="Unlock hyper-growth with fractional CGO/CMO/CSO, GTM & international expansion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Pass the onOpenAudit function as a prop */}
      <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
      <ProblemCards />
      {/* Add the new component here */}
     <CompetitiveAuditSection onOpenAudit={() => setIsAuditModalOpen(true)} />
      <ServicesSection />
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
