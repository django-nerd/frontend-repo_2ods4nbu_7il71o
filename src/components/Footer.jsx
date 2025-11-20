export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Boesman Creative Co. All rights reserved.</p>
        <p className="opacity-80">Windhoek, Namibia • Printing & Branding</p>
      </div>
    </footer>
  )
}
