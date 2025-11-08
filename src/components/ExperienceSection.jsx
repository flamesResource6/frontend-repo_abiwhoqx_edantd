import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    role: 'Intern',
    place: 'BARC',
    period: '2023',
    details: 'Worked on secure data pipelines and analytics. Built ML models with precision metrics.',
  },
  {
    role: 'Research',
    place: 'CV Lab',
    period: '2022',
    details: 'Computer vision tracking and 3D reconstruction with real‑time performance.',
  },
  {
    role: 'Full‑Stack',
    place: 'HireEase',
    period: '2021',
    details: 'Designed scalable services and UI with modern component systems.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_40%),_radial-gradient(circle_at_0%_60%,rgba(236,72,153,0.16),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-wider text-cyan-300">
          Experience
        </motion.h2>

        <div className="mt-10">
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/60 via-purple-400/60 to-pink-400/60" />
            <ul className="space-y-8">
              {items.map((it, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative ml-10 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="absolute -left-8 top-5 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-semibold text-white">{it.role} · {it.place}</div>
                    <div className="text-xs text-white/70">{it.period}</div>
                  </div>
                  <p className="mt-2 text-sm text-white/80">{it.details}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
