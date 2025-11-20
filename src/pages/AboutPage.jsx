export default function AboutPage(){
  return (
    <div className="bg-slate-950 text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">About Boesman Creative Co.</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We’re a Namibia-born print and branding studio focused on precision production and reliable turnarounds. From startup launches to nationwide retail rollouts, our team brings craft, care and clarity to every order.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {k: 'Founded', v: '2018'},
            {k: 'HQ', v: 'Windhoek, Namibia'},
            {k: 'Specialty', v: 'DTF, Large Format, Signage, Apparel'},
          ].map((i)=> (
            <div key={i.k} className="rounded-xl border border-white/10 bg-slate-900/40 p-6">
              <div className="text-slate-400 text-sm">{i.k}</div>
              <div className="text-xl font-semibold mt-1">{i.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
