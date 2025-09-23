import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Premium Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="ABERCXO - World-class fractional CGO, CMO, CSO & GTM leadership. Scale your business with proven executives who've built companies from $0 to $100M+." />
        <meta name="keywords" content="fractional CGO, fractional CMO, fractional CSO, GTM strategy, growth consulting, executive leadership, business scaling" />
        <meta name="author" content="ABERCXO" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ABERCXO - Fractional Growth Leadership" />
        <meta property="og:description" content="Unlock hyper-growth with world-class fractional executives. Proven leaders who scale companies from startup to unicorn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abercxo.com" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABERCXO - Fractional Growth Leadership" />
        <meta name="twitter:description" content="Unlock hyper-growth with world-class fractional executives." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preload Critical Resources */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
