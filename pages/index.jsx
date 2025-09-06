import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import ProblemCards from "../components/problem-cards";
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
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2G58PB06NP"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2G58PB06NP');
        </script>
      </Head>

      {/* Pass the onOpenAudit function as a prop */}
      <Hero onOpenAudit={() => setIsAuditModalOpen(true)} />
      <ProblemCards />
      <ServicesSection />
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </>
  );
}
