import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(57,255,20,.14)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20" />
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-[0.035]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-[0.025]" />
        
        {/* Tech Icons Scattered */}
        <svg className="absolute top-1/4 left-1/4 w-20 h-20 opacity-5 animate-slowRotate" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
