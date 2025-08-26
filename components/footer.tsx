export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/70">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <div className="text-white font-semibold">ABERCXO</div>
            <p className="mt-2 max-w-md">
              Fractional CGO, CMO, CSO, GTM and International Expansion
              leaders—on-demand.
            </p>
          </div>
          <div className="opacity-80">
            © {new Date().getFullYear()} ABERCXO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
