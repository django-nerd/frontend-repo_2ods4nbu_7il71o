import Header from '../components/Header'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <div className="pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
          <p className="mt-2 text-slate-400">DTF printing, large format, signage, corporate wear, embroidery and custom gifts.</p>
        </div>
        <Services />
      </div>
      <Footer />
    </div>
  )
}
