import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { certificates } from '../data/certificates'

/**
 * Certificates — Grid cards with real certificate images.
 * Place images in /public/images/certs/ named as set in certificates.js
 * Falls back to emoji icon block if no image provided.
 */

function CertImage({ cert }) {
  const [imgError, setImgError] = useState(false)

  if (cert.image && !imgError) {
    return (
      <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-gray-100 border border-gray-200 group-hover:border-brand-primary/30 transition-colors">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  }

  return (
    <div className={`${cert.color} rounded-xl flex items-center justify-center text-4xl w-full h-20 mb-4 border border-black/5`}>
      {cert.emoji}
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="bg-[#f8f7ff]">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* <span className="section-label">Credentials</span> */}
          <h2 className="section-heading">Certifi<em>cations</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="card flex flex-col group"
            >
              {/* Image or emoji fallback */}
              <CertImage cert={cert} />

              {/* Platform badge */}
              <span className="text-xs font-black text-brand-accent uppercase tracking-wider mb-1">
                {cert.platform}
              </span>

              <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2 flex-1">
                {cert.title}
              </h3>

              <p className="text-xs text-brand-dark/70 font-medium leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-xs text-brand-dark font-semibold">{cert.date}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-primary hover:text-brand-accent transition-colors duration-200 flex items-center gap-1"
                >
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}