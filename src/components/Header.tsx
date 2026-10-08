<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
=======
import { useState } from 'react'
import { Menu, X, Code } from 'lucide-react'
>>>>>>> origin/main
import { NAVIGATION_ITEMS } from '../utils/constants'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-[#050505]/90 shadow-lg border-b border-[#1B241E]' : 'bg-[#050505]/70 border-b border-transparent'}`} aria-label="Primary navigation">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-primary" aria-hidden />
          <a href="#home" className="font-mono text-lg font-medium text-white focus:outline-none" aria-label="Home">
            muzammil<span className="text-primary">.dev</span>
=======
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-transparent backdrop-blur-lg z-50 border-b border-cyan-500/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code size={28} className="text-cyan-400 animate-slowRotate" style={{ animationDuration: '3s' }} />
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            &lt;Muzammil /&gt;
>>>>>>> origin/main
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
<<<<<<< HEAD
              className="font-mono text-xs text-gray-400 hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
=======
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
>>>>>>> origin/main
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition text-primary"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
=======
          className="md:hidden p-2 hover:bg-cyan-500/10 rounded-lg transition text-cyan-400"
>>>>>>> origin/main
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
<<<<<<< HEAD
        <div className="md:hidden bg-[#080b09]/95 backdrop-blur-lg border-t border-[#1B241E]">
=======
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
>>>>>>> origin/main
          <div className="px-4 py-2 space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
<<<<<<< HEAD
                className="block px-3 py-2 font-mono text-sm text-gray-300 hover:bg-primary/10 hover:text-primary rounded-lg transition"
=======
                className="block px-3 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition"
>>>>>>> origin/main
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
