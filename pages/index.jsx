// pages/index.jsx
import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import ProblemCards from "../components/problem-cards";
import CompetitiveAuditSection from "../components/competitive-audit-section";
import ServicesSection from "../components/services-section";
import GTMStrategyModal from "../components/gtm-strategy-modal";

export default function Home() {
  const [isGTMModalOpen, setIsGTMModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>ABERCXO – Fractional Growth, Sales, Marketing & GTM</title>
        <meta name="description" content="Unlock hyper-growth with fractional CGO/CMO/CSO, GTM & international expansion. Get a data-driven audit with competitor benchmarking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Hero
       onOpenGTM={() => setIsGTMModalOpen(true)}
      />

      <ProblemCards />
      <ServicesSection />

      {/* Only GTM Modal */}
      <GTMStrategyModal
        isOpen={isGTMModalOpen}
        onClose={() => setIsGTMModalOpen(false)}
      />
    </>
  );
}
