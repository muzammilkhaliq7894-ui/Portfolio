import { Briefcase } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { experiences } from '../utils/data'

export const Experience = () => {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="section-kicker mb-4">02 // experience</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">Professional experience</h2>
          <p className="text-gray-400 max-w-2xl mb-12">Practical experience across applied AI, data science, web development and digital delivery.</p>

          <div className="relative border-l border-[#203326] ml-3 md:ml-5">
            {experiences.map((experience, index) => (
              <article key={`${experience.role}-${experience.company}`} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-[#07100A]" />
                <div className="terminal-card rounded-sm p-6" style={{ animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.12}s both` : 'none' }}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div className="flex items-start gap-3">
                      <Briefcase size={20} className="text-primary mt-1 shrink-0" aria-hidden />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                        <p className="font-mono text-sm text-primary">{experience.company}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-gray-500 md:text-right">{experience.period}</span>
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-gray-400">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-primary mt-1">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
