import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
<<<<<<< HEAD
import { certifications, coursework, educationBackground, fyp } from '../utils/data'
import { CONTACT_EMAIL, CONTACT_PHONE, GITHUB_URL, LINKEDIN_URL } from '../utils/constants'
=======
import { educationBackground, fyp } from '../utils/data'
>>>>>>> origin/main
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
<<<<<<< HEAD
          <div className="mb-12">
            <p className="section-kicker mb-4">01 // profile</p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">Professional summary</h2>
            <p className="font-mono text-sm text-gray-300 mb-6">
              MUZAMMIL <span className="text-primary">/</span> Computer Science Graduate <span className="text-primary">|</span> AI &amp; Full Stack Developer <span className="text-primary">|</span> Karachi, Pakistan
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-gray-500 mb-6">
              <a className="hover:text-primary transition-colors" href={`mailto:${CONTACT_EMAIL}`}>Email: {CONTACT_EMAIL}</a>
              <a className="hover:text-primary transition-colors" href={`tel:${CONTACT_PHONE}`}>Mobile: {CONTACT_PHONE}</a>
              <a className="hover:text-primary transition-colors" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:text-primary transition-colors" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-4xl">
              Computer Science graduate from Sir Syed University of Engineering and Technology (2026) and current AI/ML Intern who builds and ships working systems end to end: AI-powered applications with Python, FastAPI, React and Flutter, SQL and Supabase/PostgreSQL databases, REST API integrations, and Power BI reporting. Built SafeTrip, an LLM-based travel safety platform using the Gemini API, as a Final Year Project with a 4.0/4.0 project grade. Comfortable using AI tools such as Claude to build faster, reviewing and testing their output, keeping work in Git and documenting changes. Freelance experience includes taking client requests through to on-time delivery.
            </p>
          </div>
=======
          <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Me</h2>
>>>>>>> origin/main

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                  <BookOpen size={28} className="text-primary animate-floatingUp" />
                  Educational Background
                </h3>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border-l-4 border-primary/25 backdrop-blur-sm hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/12">
                  <p className="text-gray-200 font-semibold">{educationBackground.degree}</p>
                  <p className="text-gray-300">{educationBackground.university}</p>
                  <p className="text-sm text-gray-400 mt-2">{educationBackground.semester}</p>
                  <p className="text-sm text-primary font-semibold mt-2">{educationBackground.specialization}</p>
                  <p className="text-xs text-gray-500 mt-4 uppercase tracking-wider">Coursework</p>
                  <p className="text-sm text-gray-400 mt-2">{coursework.join(' · ')}</p>
                </div>

                <div className="mt-10 terminal-card rounded-sm p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((certification) => (
                      <span key={certification} className="px-3 py-2 text-sm text-gray-300 border border-[#203326] rounded-sm">
                        {certification}
                      </span>
                    ))}
                  </div>
=======
                <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
                  <BookOpen size={28} className="text-cyan-400 animate-floatingUp" />
                  Educational Background
                </h3>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-lg border-l-4 border-cyan-500 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                  <p className="text-gray-200 font-semibold">{educationBackground.degree}</p>
                  <p className="text-gray-300">{educationBackground.university}</p>
                  <p className="text-sm text-gray-400 mt-2">Currently in {educationBackground.semester}</p>
                  <p className="text-sm text-cyan-400 font-semibold mt-2">Specialization: {educationBackground.specialization}</p>
>>>>>>> origin/main
                </div>
              </div>

              <div>
<<<<<<< HEAD
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
=======
                <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
>>>>>>> origin/main
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
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                <Briefcase size={28} className="text-secondary animate-floatingUp" style={{ animationDelay: '0.4s' }} />
                Final Year Project (FYP)
              </h3>
              <div className="bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 p-6 rounded-lg border border-primary/20 backdrop-blur-sm hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/12">
                <h4 className="text-lg font-bold text-primary/90 mb-2">{fyp.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-4">{fyp.description}</p>
                <div className="text-sm">
                  <p className="text-primary mb-2"><strong>Key Features:</strong></p>
=======
              <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-3">
                <Briefcase size={28} className="text-blue-400 animate-floatingUp" style={{ animationDelay: '0.4s' }} />
                Final Year Project (FYP)
              </h3>
              <div className="bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 p-6 rounded-lg border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">{fyp.title}</h4>
                <p className="text-gray-300 leading-relaxed mb-4">{fyp.description}</p>
                <div className="text-sm">
                  <p className="text-cyan-400 mb-2"><strong>Key Features:</strong></p>
>>>>>>> origin/main
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

<<<<<<< HEAD
=======
          {/* Bio Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated professional with a strong passion for leveraging AI and data science to solve real-world challenges. Through my academic journey and freelance work, I have developed expertise in building predictive models, conducting in-depth data analysis, and creating intelligent systems that drive business value. My commitment is to deliver high-quality solutions that transform complex data into meaningful insights and actionable recommendations.
            </p>
          </div>
>>>>>>> origin/main
        </div>
      </div>
    </section>
  )
}
