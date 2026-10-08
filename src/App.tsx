import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
<<<<<<< HEAD
import { Experience } from './components/Experience'
=======
>>>>>>> origin/main
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(57,255,20,.14)_1px,transparent_1px)] bg-[length:28px_28px] opacity-20" />
        
        {/* Animated Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-[0.035]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-[0.025]" />
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-x-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
>>>>>>> origin/main
        
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
<<<<<<< HEAD
        <Experience />
=======
>>>>>>> origin/main
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
