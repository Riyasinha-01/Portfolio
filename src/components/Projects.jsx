import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

/**
 * Projects — Cards with real project images.
 * Place images in /public/images/ named as set in projects.js (e.g. apneaview.png).
 * Falls back to gradient+emoji banner if image is missing.
 */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

function ProjectImage({ project }) {
  const [imgError, setImgError] = useState(false)

  if (project.image && !imgError) {
    return (
      <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgError(true)}
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    )
  }

  // Fallback: gradient banner
  return (
    <div className={`bg-gradient-to-br ${project.color} rounded-xl mb-4 h-44 flex items-center justify-center`}>
      <span className="text-6xl">{project.emoji}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">What I&apos;ve Built</span>
          <h2 className="section-heading">Featured <em>Projects</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card flex flex-col group"
            >
              {/* Image or fallback */}
              <ProjectImage project={project} />

              {/* Subtitle + date row */}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${project.accent} text-brand-dark border border-black/5`}>
                  {project.subtitle}
                </span>
                <span className="text-xs text-brand-muted font-medium">{project.date}</span>
              </div>

              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-brand-dark/75 font-medium leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="tech-badge font-semibold">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-brand-dark text-brand-dark text-sm font-bold hover:bg-gray-50 transition-colors duration-200"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-lg bg-gradient-to-r from-brand-primary to-brand-accent text-white text-sm font-bold hover:opacity-90 transition-opacity duration-200"
                >
                  🚀 Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Riyasinha-01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-dark text-white font-bold hover:bg-brand-dark/85 transition-colors duration-200 shadow-soft"
          >
            <GitHubIcon /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}