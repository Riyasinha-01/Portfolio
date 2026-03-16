import React from 'react'
import { motion } from 'framer-motion'

/**
 * Education — Vertical timeline of Riya's education journey.
 */

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    duration: 'August 2023 – Present',
    description:
      'Pursuing B.Tech in Computer Science with a focus on AI/ML, full-stack development, and software engineering. Active participant in hackathons and tech communities.',
    highlights: [
      'Machine Learning',
      'Data Structures & Algorithms',
      'Database Management System',
      'Robotic Process Automation',
    ],
    emoji: '🎓',
    color: 'bg-pastel-lavender',
    dotColor: 'bg-brand-accent',
  },
  {
    id: 2,
    degree: 'Class XII — Science (PCM)',
    institution: 'Rajkamal Saraswati Vidya Mandir School',
    location: 'Dhanbad, Jharkhand',
    duration: 'April 2020 – March 2022',
    description:
      'Completed senior secondary education with an 80% aggregate, specializing in Physics, Chemistry, and Mathematics.',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
    score: '80%',
    emoji: '📚',
    color: 'bg-pastel-blue',
    dotColor: 'bg-brand-primary',
  },
  {
    id: 3,
    degree: 'Class X — Secondary Education',
    institution: 'D.A.V. Public School',
    location: 'Dhanbad, Jharkhand',
    duration: 'April 2019 – March 2020',
    description:
      'Completed secondary schooling with an outstanding 88% aggregate, building a strong academic foundation.',
    highlights: [],
    score: '88%',
    emoji: '🏫',
    color: 'bg-pastel-mint',
    dotColor: 'bg-brand-secondary',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-pastel-bg">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="section-label">Academic Journey</span> */}
          <h2 className="section-heading">Education <em>Timeline</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-accent to-transparent" />

          <div className="space-y-10">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-4 w-12 h-12 rounded-full ${edu.color} flex items-center justify-center text-xl shadow-card border-2 border-white`}>
                  {edu.emoji}
                </div>

                {/* Card */}
                <div className="card">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-brand-dark text-base leading-snug">{edu.degree}</h3>
                      <p className="text-brand-primary font-semibold text-sm mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-brand-muted">{edu.location}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-semibold bg-pastel-lavender text-brand-accent px-2.5 py-1 rounded-full">
                        {edu.duration}
                      </span>
                      {edu.score && (
                        <div className="mt-1 text-sm font-bold gradient-text">{edu.score}</div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-3">{edu.description}</p>

                  {edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs text-brand-muted font-medium mr-1">Courses:</span>
                      {edu.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-pastel-bg text-brand-dark font-medium border border-gray-200">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
