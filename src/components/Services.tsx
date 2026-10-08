import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { services } from '../utils/data'
import * as LucideIcons from 'lucide-react'

export const Services = () => {
  const { ref, isVisible } = useIntersectionObserver()

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      Brain: LucideIcons.Brain,
      BarChart3: LucideIcons.BarChart3,
      Zap: LucideIcons.Zap,
    }
    const Icon = iconMap[iconName] || LucideIcons.Star
    return Icon
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions tailored to transform your data into insights and drive business growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon)
              return (
                <div
                  key={service.id}
                  className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-primary/25 rounded-lg hover:border-primary transition-all hover:scale-105 group backdrop-blur-sm hover:shadow-lg hover:shadow-primary/12"
                  style={{
                    animation: isVisible ? `slideUp 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors border border-primary/25">
                    <Icon size={32} className="text-primary group-hover:text-primary/90 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional Services Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-primary/25 backdrop-blur-sm hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/12">
              <h3 className="text-lg font-bold text-primary mb-3">💼 Consulting & Strategy</h3>
              <p className="text-gray-300">Expert consultation on data strategy, AI implementation, and digital transformation to maximize business value.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-primary/25 backdrop-blur-sm hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/12">
              <h3 className="text-lg font-bold text-primary mb-3">🚀 Custom Development</h3>
              <p className="text-gray-300">Tailored solutions built to your unique requirements, from prototyping to production deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
