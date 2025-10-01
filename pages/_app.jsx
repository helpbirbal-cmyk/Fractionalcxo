// pages/_app.jsx
import React from "react"
import "../styles/globals.css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import ScrollIndicator from "../components/scroll-indicator"
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2G58PB06NP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2G58PB06NP');
        `}
      </Script>

      {/* App Layout */}
      <div className="min-h-screen bg-slate-900 text-white">
        <ScrollIndicator />
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
