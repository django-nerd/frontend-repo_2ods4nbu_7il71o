import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import LogoStrip from '../components/LogoStrip'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <LogoStrip />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
