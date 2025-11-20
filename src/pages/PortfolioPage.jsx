import Portfolio from '../components/Portfolio'

export default function PortfolioPage(){
  return (
    <div className="bg-slate-950 text-white pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Portfolio</h1>
        <p className="mt-2 text-slate-400">A selection of recent work.</p>
      </div>
      <Portfolio />
    </div>
  )
}
