import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './components/Cursor.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0c0d0f]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Blog />
      <Booking />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
