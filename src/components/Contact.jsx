import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

/**
 * Contact — EmailJS-powered contact form + social links.
 * Sending / Success / Error states shown as centered full-screen overlays.
 *
 * Required .env variables:
 *   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
 */

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const EmailIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const PhoneIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

// ─── Contact links ────────────────────────────────────────────────────────────

const contactLinks = [
  {
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/riyasinha04',
    href: 'https://www.linkedin.com/in/riyasinha04',
    iconBg: 'bg-[#E8F0FE]',
    iconColor: 'text-[#0A66C2]',
    border: 'border-blue-200 hover:border-[#0A66C2]',
  },
  {
    Icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/Riyasinha-01',
    href: 'https://github.com/Riyasinha-01',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-800',
    border: 'border-gray-300 hover:border-gray-700',
  },
  {
    Icon: EmailIcon,
    label: 'Email',
    value: 'riyasinha5319@gmail.com',
    href: 'mailto:riyasinha5319@gmail.com',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    border: 'border-red-200 hover:border-red-400',
  },
  {
    Icon: PhoneIcon,
    label: 'Mobile',
    value: '+91 8521790274',
    href: 'tel:+918521790274',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    border: 'border-green-200 hover:border-green-500',
  },
]

// ─── Full-screen status overlay ───────────────────────────────────────────────

function StatusOverlay({ status }) {
  const isVisible = status === 'sending' || status === 'success' || status === 'error'

  const content = {
    sending: {
      title: 'Sending your message…',
      sub: 'Please wait a moment.',
      accent: 'border-gray-200',
      titleColor: 'text-brand-dark',
    },
    success: {
      title: 'Message sent.',
      sub: 'Thanks for reaching out — I\'ll get back to you within 24 hours.',
      accent: 'border-green-200',
      titleColor: 'text-green-800',
    },
    error: {
      title: 'Something went wrong.',
      sub: 'Please try again or email me directly at riyasinha5319@gmail.com',
      accent: 'border-red-200',
      titleColor: 'text-red-700',
    },
  }[status] || {}

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`bg-white rounded-2xl shadow-xl border-2 ${content.accent} px-10 py-8 max-w-sm w-full mx-4 text-center`}
          >
            {/* Spinner for sending */}
            {status === 'sending' && (
              <div className="flex justify-center mb-5">
                <svg className="animate-spin w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                  <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"/>
                </svg>
              </div>
            )}

            {/* Thin top accent line for success/error */}
            {status === 'success' && (
              <div className="w-10 h-0.5 bg-green-400 rounded-full mx-auto mb-5" />
            )}
            {status === 'error' && (
              <div className="w-10 h-0.5 bg-red-400 rounded-full mx-auto mb-5" />
            )}

            <p className={`text-base font-bold mb-2 ${content.titleColor}`}>
              {content.title}
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              {content.sub}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isSending = status === 'sending'

  return (
    <>
      {/* Full-screen status overlay */}
      <StatusOverlay status={status} />

      <section id="contact" className="bg-[#f1f0fb]">
        <div className="section-wrapper">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            {/* <span className="section-label">Let&apos;s Connect</span> */}
            <h2 className="section-heading">Get in <em>Touch</em></h2>
            <div className="soft-divider mx-auto" />
            <p className="text-brand-dark font-medium text-sm max-w-md mx-auto">
              Have an exciting project, job opportunity, or just want to say hi?
              I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">

            {/* Left: contact link cards */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-5">Reach me on</h3>
              {contactLinks.map(({ Icon, label, value, href, iconBg, iconColor, border }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 bg-white transition-all duration-200 hover:-translate-x-1 hover:shadow-card group ${border}`}
                >
                  <div className={`w-11 h-11 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-brand-muted uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-bold text-brand-dark truncate">{value}</div>
                  </div>
                  <div className="text-brand-muted group-hover:text-brand-primary transition-colors font-bold">→</div>
                </motion.a>
              ))}
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card border-2 border-gray-300"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-5">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    disabled={isSending}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 text-sm text-brand-dark placeholder-gray-400 font-medium focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    disabled={isSending}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 text-sm text-brand-dark placeholder-gray-400 font-medium focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-brand-dark uppercase tracking-wider block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    disabled={isSending}
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 text-sm text-brand-dark placeholder-gray-400 font-medium focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all duration-200 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-soft disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  Send Message
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}