import React from 'react'
import { motion } from 'framer-motion'
import { technicalSkills, softSkills } from '../data/skills'

/**
 * Skills — Technical skills with official brand logos,
 * and soft skills as styled pill tags.
 */

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const itemVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 18 },
  show:   { opacity: 1, scale: 1,    y: 0, transition: { duration: 0.35 } },
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f1f0fb]">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">What I Know</span>
          <h2 className="section-heading">Skills &amp; <em>Expertise</em></h2>
          <div className="soft-divider mx-auto" />
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-brand-dark mb-7 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-brand-primary to-brand-accent inline-block" />
            Technical Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {technicalSkills.map(skill => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className={`flex flex-col items-center text-center gap-2.5 py-4 px-2 rounded-xl border-2 cursor-default bg-white shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-brand-primary transition-all duration-200 ${skill.color}`}
              >
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain" loading="lazy" />
                ) : (
                  <span className="text-3xl leading-none">{skill.fallback}</span>
                )}
                <span className="text-[11px] font-bold text-brand-dark leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-bold text-brand-dark mb-7 flex items-center gap-2">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-brand-accent to-brand-secondary inline-block" />
            Soft Skills
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {softSkills.map(skill => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-violet-300 text-brand-dark font-semibold text-sm shadow-sm hover:shadow-card hover:border-brand-accent hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}