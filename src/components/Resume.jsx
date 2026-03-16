import React from 'react'
import { motion } from 'framer-motion'

/**
 * Resume — Resume preview card with a download button.
 * Replace the href on the download button with the actual resume PDF path
 * e.g. "/resume/Riya_Sinha_Resume.pdf" after placing the file in /public/resume/
 */

export default function Resume() {
  return (
    <section id="resume" className="bg-white">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">My Resume</span>
          <h2 className="section-heading">Download <em>Resume</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto card border border-pastel-lavender text-center"
        >
          {/* Decorative resume preview */}
          <div className="bg-gradient-to-br from-pastel-lavender to-pastel-blue rounded-xl p-8 mb-6">
            <div className="bg-white rounded-lg p-5 shadow-soft text-left space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg">R</div>
                <div>
                  <div className="font-bold text-brand-dark">Riya Sinha</div>
                  <div className="text-xs text-brand-muted">AI/ML Engineer · Full Stack Developer</div>
                </div>
              </div>
              {['Skills Summary', 'Projects', 'Certifications', 'Education'].map(line => (
                <div key={line} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                  <div className="h-3 bg-gray-100 rounded flex-1" />
                  <span className="text-xs text-brand-muted">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-bold text-brand-dark mb-2">Riya Sinha — CV / Resume</h3>
          <p className="text-brand-muted text-sm mb-6">
            A concise overview of my skills, projects, certifications, and academic background.
            Updated 2025.
          </p>

          {/*
            To enable download:
            1. Place the PDF at: /public/resume/Riya_Sinha_Resume.pdf
            2. Update href below to: "/resume/Riya_Sinha_Resume.pdf"
          */}
          <a
            href="/resume/Riya_Sinha_Resume.pdf"
            download="Riya_Sinha_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            ⬇ Download PDF Resume
          </a>

          <p className="text-xs text-brand-muted mt-4">PDF · Updated 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
