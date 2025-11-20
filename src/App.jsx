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
    <div className="min-h-screen bg-[#0a0b10] text-white selection:bg-white selection:text-black">
      <SEO />
      <BackgroundFX />

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
