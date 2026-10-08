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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Portfolio & Projects</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A selection of noteworthy projects showcasing expertise in AI, machine learning, and business intelligence.
          </p>
          {/* Feature SafeTrip first */}
          {projects && (
            <>
              {projects.find(p => p.title.toLowerCase().includes('safetrip')) && (
                (() => {
                  const featured = projects.find(p => p.title.toLowerCase().includes('safetrip'))!
                  return (
                    <div className="mb-8 rounded-2xl overflow-hidden glass border border-primary/20">
                      <div className="p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-1">
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary/90 text-xs font-semibold mb-4">Featured</div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{featured.title}</h3>
                          <p className="text-gray-300 mb-6 max-w-2xl">{featured.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {featured.technologies.map(t => (
                              <span key={t} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary/90 rounded-full border border-primary/20">{t}</span>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold hover:scale-105 transition">View on GitHub <Github size={16} /></a>
                          </div>
                        </div>

                        <div className="w-full md:w-1/3">
                          <div className="w-full h-44 md:h-56 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 flex items-center justify-center">
                            <div className="text-primary/90 font-semibold">SafeTrip — AI insights</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })()
              )}

              <div className="grid md:grid-cols-2 gap-8">
                {projects.filter(p => !p.title.toLowerCase().includes('safetrip')).map((project, index) => (
                  <div
                    key={project.id}
                    className="group rounded-lg overflow-hidden glass border border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-transform hover:-translate-y-1"
                    style={{
                      animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.08}s forwards` : 'none',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary/90 mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/8 text-primary/90 rounded-full border border-primary/10">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-primary/10">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg transition-all group/btn"> <Github size={18} /><span>GitHub</span></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
