import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'
import SEO from './components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* SEO meta */}
      <SEO />

      {/* Ambient animated background */}
      <BackgroundFX />

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
