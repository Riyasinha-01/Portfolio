import React from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../data/achievements'

/**
 * Achievements — Highlight cards.
 * Renders a brand logo image if `logo` is set, otherwise falls back to emoji.
 */

function AchievementIcon({ ach }) {
  if (ach.logo) {
    return (
      <div className={`w-12 h-12 flex-shrink-0 rounded-xl ${ach.logoBg || 'bg-white'} border border-gray-200 flex items-center justify-center p-2`}>
        <img
          src={ach.logo}
          alt={ach.organization}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    )
  }
  return (
    <div className="text-4xl flex-shrink-0 leading-none">{ach.emoji}</div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="section-label">Recognition</span> */}
          <h2 className="section-heading">Achieve<em>ments</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`card flex items-start gap-5 border ${ach.color}`}
            >
              {/* Logo or Emoji */}
              <AchievementIcon ach={ach} />

              <div className="flex-1 min-w-0">
                {/* Badge + year */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white border border-current text-brand-accent">
                    {ach.badge}
                  </span>
                  <span className="text-xs text-brand-muted">{ach.year}</span>
                </div>

                <h3 className="font-bold text-brand-dark text-base mb-1">{ach.title}</h3>
                <p className="text-xs text-brand-muted font-medium mb-1.5">{ach.organization}</p>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}