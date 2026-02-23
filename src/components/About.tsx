import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { educationBackground, fyp } from '../utils/data'
import { BookOpen, Briefcase, Trophy } from 'lucide-react'

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
                  <BookOpen size={28} className="text-cyan-400 animate-floatingUp" />
                  Educational Background
                </h3>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border-l-4 border-cyan-500 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="text-gray-200 font-semibold">{educationBackground.degree}</p>
                  <p className="text-gray-300">{educationBackground.university}</p>
                  <p className="text-sm text-gray-400 mt-2">Currently in {educationBackground.semester}</p>
                  <p className="text-sm text-cyan-400 font-semibold mt-2">Specialization: {educationBackground.specialization}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
                  <Trophy size={28} className="text-yellow-400 animate-floatingUp" style={{ animationDelay: '0.2s' }} />
                  Freelance Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With expertise in AI, Machine Learning, and Business Intelligence, I provide freelance services including model development, data analysis, and BI solutions to help businesses make data-driven decisions.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
                <Briefcase size={28} className="text-blue-400 animate-floatingUp" style={{ animationDelay: '0.4s' }} />
                Final Year Project (FYP)
              </h3>
              <div className="bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 p-6 rounded-lg border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">{fyp.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-4">{fyp.description}</p>
                <div className="text-sm">
                  <p className="text-cyan-400 mb-2"><strong>Key Features:</strong></p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>AI-powered destination recommendations</li>
                    <li>Real-time health and safety data analysis</li>
                    <li>Machine learning algorithms for risk assessment</li>
                    <li>User-friendly travel planning interface</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated professional with a strong passion for leveraging AI and data science to solve real-world challenges. Through my academic journey and freelance work, I have developed expertise in building predictive models, conducting in-depth data analysis, and creating intelligent systems that drive business value. My commitment is to deliver high-quality solutions that transform complex data into meaningful insights and actionable recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
