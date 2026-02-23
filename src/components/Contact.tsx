import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Mail, Phone, Instagram, Linkedin, Send, Github } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../utils/constants'
import { EMAILJS_CONFIG } from '../config/emailjs'

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        to_email: CONTACT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Error sending email:', err)
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>

              {/* Email */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors border border-cyan-500/30">
                  <Mail size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-cyan-400 uppercase tracking-wide font-semibold">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors border border-cyan-500/30">
                  <Phone size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-cyan-400 uppercase tracking-wide font-semibold">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-cyan-400 uppercase tracking-wide font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/40 hover:text-cyan-300 transition-colors border border-cyan-500/30"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/40 hover:text-cyan-300 transition-colors border border-cyan-500/30"
                    title="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/40 hover:text-cyan-300 transition-colors border border-cyan-500/30"
                    title="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-cyan-500/30 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-cyan-500/30 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-cyan-500/30 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition resize-none placeholder:text-gray-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg text-center animate-fadeIn">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg text-center animate-fadeIn">
                    ✗ {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
