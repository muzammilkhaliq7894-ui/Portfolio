import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { skills } from '../utils/data'
import { CheckCircle, Brain, Database, Zap, TrendingUp, Users, Target } from 'lucide-react'

export const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="section-kicker mb-4 text-center">03 // toolkit</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4 text-center">Technical skills</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills developed through academic excellence and real-world experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-primary/25 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/12 backdrop-blur-sm"
                style={{
                  animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <h3 className="text-lg font-bold text-primary mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Expertise Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-white mb-2 text-center">What I bring to a team</h3>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Specialized knowledge and experience in key areas of AI, Data Science, and Technology
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'AI & Machine Learning',
                  description: 'Design and implement intelligent algorithms, neural networks, and ML solutions for complex problems.',
                  features: ['Neural Networks', 'Deep Learning', 'Model Optimization']
                },
                {
                  icon: Database,
                  title: 'Data Engineering',
                  description: 'Build scalable data pipelines, manage large datasets, and ensure data quality and integrity.',
                  features: ['ETL Pipelines', 'Database Design', 'Data Warehousing']
                },
                {
                  icon: TrendingUp,
                  title: 'Business Intelligence',
                  description: 'Transform raw data into actionable insights using advanced analytics and visualization techniques.',
                  features: ['Analytics', 'Dashboards', 'KPI Tracking']
                },
                {
                  icon: Zap,
                  title: 'Full-Stack Development',
                  description: 'Create end-to-end solutions combining front-end interfaces with robust back-end architecture.',
                  features: ['React', 'Python', 'API Design']
                },
                {
                  icon: Target,
                  title: 'Problem Solving',
                  description: 'Analyze complex challenges and develop innovative, data-driven solutions that drive results.',
                  features: ['Algorithm Design', 'Optimization', 'Strategic Planning']
                },
                {
                  icon: Users,
                  title: 'Collaboration & Leadership',
                  description: 'Work effectively in teams, communicate technical concepts clearly, and mentor other professionals.',
                  features: ['Team Work', 'Communication', 'Mentoring']
                },
              ].map((expertise, index) => {
                const IconComponent = expertise.icon
                return (
                  <div
                    key={expertise.title}
                    className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-lg border border-primary/25 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/12 backdrop-blur-sm hover:-translate-y-2"
                    style={{
                      animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-lg border border-primary/50 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                        <IconComponent size={28} className="text-primary group-hover:text-primary/90 transition-colors" />
                      </div>
                      <div className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                        Expert
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-primary/90 mb-2 group-hover:text-primary/80 transition-colors">
                      {expertise.title}
                    </h4>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {expertise.description}
                    </p>
                    
                    <div className="space-y-2">
                      {expertise.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary/90" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
