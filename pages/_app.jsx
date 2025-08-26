import React from "react"
import "../styles/globals.css"
import Nav from "../components/nav"
import Footer from "../components/footer"

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
