<<<<<<< HEAD
import { ArrowRight, Check, Mail, Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

export const Hero = () => {
  const [hasRun, setHasRun] = useState(false)
=======
import { ArrowRight, Mail } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

export const Hero = () => {
>>>>>>> origin/main
  const fullText = "Meet your trusted AI & Data Science partner, crafting intelligent solutions for complex business challenges in the modern world."
  const displayedText = useTypewriter(fullText, 30)

  return (
<<<<<<< HEAD
    <section id="home" className="min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative flex items-start lg:items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="hero-profile group flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="relative mb-5">
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border border-white/20 bg-[#050505] p-1 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:border-primary/70">
              <img src="/profile/Muzammil.jpeg" alt="Muzammil Khaliq" className="h-full w-full rounded-full object-cover object-[center_18%] brightness-110 contrast-105" />
            </div>
          </div>
          <h2 className="hero-profile-name text-3xl sm:text-4xl font-semibold tracking-tight text-white transition-all duration-300 group-hover:text-primary group-hover:tracking-wide">
            Muzammil
          </h2>
          <p className="hero-profile-title mt-2 font-mono text-sm sm:text-base text-primary transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">
            AI Engineer
          </p>
          <span className="mt-4 h-px w-12 bg-primary/60 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <p className="section-kicker mb-6 animate-slideDown">Available for selected projects</p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-white mb-6 animate-slideDown leading-[0.98]" style={{ animationDelay: '0.1s' }}>
              I build<br /><span className="text-primary">intelligent systems.</span>
            </h1>
            <p className="font-mono text-sm text-primary/80 mb-5">&gt; computer_science_graduate // software_developer</p>
            <div className="mb-10 max-w-xl">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            {displayedText}
            <span className="animate-blink text-primary text-lg" aria-hidden>|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 animate-fadeInScale" style={{ animationDelay: '0.6s' }}>
              <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-sm hover:bg-secondary transition-all text-sm"
          >
            Explore work
            <ArrowRight size={22} />
          </a>
              <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1B241E] text-gray-300 font-medium rounded-sm hover:border-primary hover:text-primary transition-all text-sm"
          >
            Start a conversation
            <Mail size={22} />
          </a>
            </div>
          </div>
          <div className="terminal-card rounded-lg overflow-hidden font-mono text-sm animate-fadeInScale" style={{ animationDelay: '0.35s' }}>
            <div className="flex items-center gap-2 bg-[#0d1210] border-b border-[#203326] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-auto text-[10px] text-gray-500">muzammil / portfolio</span>
              <span className="text-gray-500">⌁</span>
            </div>
            <div className="flex items-center gap-3 bg-[#080b09] border-b border-[#203326] px-5 py-3 text-xs">
              <span className="text-primary">◈</span><span className="text-gray-300">developer.py</span><span className="ml-auto text-gray-500">●</span>
            </div>
            <div className="bg-[#050706] px-4 py-5 text-xs sm:text-sm leading-6 overflow-x-auto">
              <div className="grid grid-cols-[2rem_1fr] gap-x-3 min-w-[25rem]">
                <div className="select-none text-right text-gray-600">1<br />2<br />3<br />4<br />5<br />6<br />7<br /><br />8<br />9<br />10<br />11<br />12<br />13</div>
                <div className="text-gray-400">
                  <p><span className="text-gray-600">#</span> A little about the developer</p>
                  <p><span className="text-secondary">class</span> <span className="text-blue-300">Developer</span>:</p>
                  <p className="pl-5"><span className="text-primary">name</span> = <span className="text-secondary">&quot;Muzammil&quot;</span></p>
                  <p className="pl-5"><span className="text-primary">role</span> = <span className="text-secondary">&quot;AI &amp; Full Stack Developer&quot;</span></p>
                  <p className="pl-5"><span className="text-primary">location</span> = <span className="text-secondary">&quot;Karachi, Pakistan&quot;</span></p>
                  <p className="pl-5"><span className="text-primary">stack</span> = [<span className="text-secondary">&quot;Python&quot;</span>, <span className="text-secondary">&quot;React&quot;</span>, <span className="text-secondary">&quot;FastAPI&quot;</span>]</p>
                  <p className="pl-5"><span className="text-primary">passion</span> = <span className="text-secondary">&quot;Building intelligent systems&quot;</span></p>
                  <p>&nbsp;</p>
                  <p className="pl-1"><span className="text-secondary">def</span> <span className="text-blue-300">introduce</span>(self):</p>
                  <p className="pl-9"><span className="text-secondary">return</span> self.professional_summary</p>
                  <p>&nbsp;</p>
                  <p><span className="text-blue-300">developer</span> = Developer()</p>
                  <p><span className="text-blue-300">print</span>(developer.introduce())</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 bg-[#0d1210] border-y border-[#203326] px-5 py-3 text-xs text-gray-500">
              <span><span className="text-blue-400">●</span> Python · profile demo</span>
              <div className="flex items-center gap-4">
                <button type="button" onClick={() => setHasRun(false)} className="hover:text-white transition-colors" aria-label="Reset output"><RotateCcw size={16} /></button>
                <button type="button" onClick={() => setHasRun(true)} className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 font-sans text-sm font-semibold text-white hover:bg-blue-400 transition-colors"><Play size={14} fill="currentColor" /> Run</button>
              </div>
            </div>
            <div className="min-h-24 bg-[#050706] px-5 py-4 text-xs leading-5">
              <p className="mb-3 text-gray-500">&gt;_ OUTPUT <span className="float-right">{hasRun ? <span className="inline-flex items-center gap-1 text-emerald-400"><Check size={13} /> Exit code 0</span> : 'Ready'}</span></p>
              {hasRun && (
                <div className="font-sans text-gray-400 animate-fadeIn">
                  <p className="font-semibold text-gray-200">Muzammil — Professional summary</p>
                  <p className="mt-2">Computer Science graduate and AI/ML Intern building end-to-end AI applications with Python, FastAPI, React and Flutter, SQL and Supabase/PostgreSQL, REST APIs and Power BI. Built SafeTrip, an LLM-based travel safety platform with the Gemini API. Experienced with Claude-assisted development, Git, testing, documentation and freelance delivery.</p>
                </div>
              )}
              {!hasRun && <p className="text-gray-600">Click Run to execute developer.introduce()</p>}
            </div>
            <div className="flex justify-between bg-[#111a25] px-5 py-2 text-[10px] text-gray-500">
              <span>main*</span><span>UTF-8&nbsp;&nbsp; Python 3</span>
            </div>
=======
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
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </section>
  )
}
