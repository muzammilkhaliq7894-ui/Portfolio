import { ArrowRight, Mail } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

export const Hero = () => {
  const fullText = "Meet your trusted AI & Data Science partner, crafting intelligent solutions for complex business challenges in the modern world."
  const displayedText = useTypewriter(fullText, 30)

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-center">
      <div className="max-w-3xl mx-auto text-center w-full">
        {/* Profile Section */}
        <div className="mb-12 inline-block w-full">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-cyan-400/30">
                <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Intro Line */}
        <p className="text-sm sm:text-base text-cyan-400 font-semibold uppercase tracking-widest mb-6 animate-slideDown" style={{ animationDelay: '0.1s' }}>
          Welcome to my portfolio
        </p>

        {/* Name - Bold Typography */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-4 animate-slideDown leading-tight" style={{ animationDelay: '0.2s' }}>
          MUZAMMIL
        </h1>

        {/* Underline Accent */}
        <div className="h-1.5 w-32 mx-auto mb-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-fadeIn" style={{ animationDelay: '0.3s' }} />

        {/* Title */}
        <p className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold mb-8 animate-slideDown" style={{ animationDelay: '0.4s' }}>
          AI Engineer & Data Scientist
        </p>

        {/* Description */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed h-auto flex flex-wrap items-center justify-center gap-1 animate-fadeInScale" style={{ animationDelay: '0.5s' }}>
            {displayedText}
            <span className="animate-blink text-cyan-400 text-2xl">|</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInScale" style={{ animationDelay: '0.7s' }}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all border border-cyan-400/30 text-base sm:text-lg"
          >
            View My Work
            <ArrowRight size={22} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-base sm:text-lg"
          >
            Get In Touch
            <Mail size={22} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-floatingUp" style={{ animationDelay: '1.2s' }}>
          <div className="flex justify-center gap-2">
            <span className="text-cyan-400/70 text-sm font-medium\">Scroll to explore</span>
            <svg className="w-5 h-5 text-cyan-400 animate-bounce\" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
