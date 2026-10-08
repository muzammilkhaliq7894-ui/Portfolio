import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { NAVIGATION_ITEMS } from '../utils/constants'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-gray-400 hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition text-primary"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#080b09]/95 backdrop-blur-lg border-t border-[#1B241E]">
          <div className="px-4 py-2 space-y-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 font-mono text-sm text-gray-300 hover:bg-primary/10 hover:text-primary rounded-lg transition"
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
