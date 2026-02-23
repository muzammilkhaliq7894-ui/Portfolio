import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects } from '../utils/data'
import { Github } from 'lucide-react'
import { GITHUB_URL } from '../utils/constants'

export const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Portfolio & Projects</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A selection of noteworthy projects showcasing expertise in AI, machine learning, and business intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-500/30 overflow-hidden hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm"
                style={{
                  animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full group-hover:bg-cyan-500/40 group-hover:text-cyan-200 transition-colors border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 border-t border-cyan-500/20">
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all group/btn"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
