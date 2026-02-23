import { Heart } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-gray-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 border-b border-cyan-500/10">
          <div className="flex items-center gap-2 text-gray-300">
            <span>© {currentYear} Muzammil. Built with</span>
            <Heart size={16} className="text-cyan-400 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">React & Tailwind</span>
          </div>

          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </a>
          </div>

          <p className="text-sm text-gray-600">
            All rights reserved
          </p>
        </div>
        <div className="text-center pt-4 text-xs text-gray-500">
          Crafted with development precision and attention to detail
        </div>
      </div>
    </footer>
  )
}
