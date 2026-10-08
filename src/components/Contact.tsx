import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Mail, Phone, Instagram, Linkedin, Send, Github, CheckCircle2, Loader2 } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL } from '../utils/constants'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvwqnep'

export const Contact = () => {
  const { ref, isVisible } = useIntersectionObserver()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setSubmitted(false)
    setError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
        }),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result?.errors?.[0]?.message || result?.message || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>

              {/* Email */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors border border-primary/25">
                  <Mail size={24} className="text-primary group-hover:text-primary/90 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-primary uppercase tracking-wide font-semibold">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Portfolio inquiry')}&body=${encodeURIComponent('Hello Muzammil,\n\nI would like to connect about a project opportunity.')}`}
                    className="text-lg font-semibold text-gray-200 hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors border border-primary/25">
                  <Phone size={24} className="text-primary group-hover:text-primary/90 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-primary uppercase tracking-wide font-semibold">Phone</p>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-lg font-semibold text-gray-200 hover:text-primary transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-primary uppercase tracking-wide font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 hover:text-primary/90 transition-colors border border-primary/25"
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 hover:text-primary/90 transition-colors border border-primary/25"
                    title="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 hover:text-primary/90 transition-colors border border-primary/25"
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
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-primary/25 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-primary/25 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-primary/25 bg-slate-800/50 text-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition resize-none placeholder:text-gray-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary/40 text-primary/90 rounded-lg text-center animate-fadeInScale">
                    <div className="flex items-center justify-center gap-2 text-primary/90 font-semibold mb-1 animate-glow rounded-md py-1">
                      <CheckCircle2 size={20} className="animate-pulse" />
                      <span>Message Sent</span>
                    </div>
                    <p className="text-sm text-primary/90">Your message was sent successfully. I will get back to you soon.</p>
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
