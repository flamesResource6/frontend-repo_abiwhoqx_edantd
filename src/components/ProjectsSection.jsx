import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Pipe Fault Detection',
    tag: 'Deep Learning',
    color: 'from-cyan-400/30 to-cyan-500/20',
    href: '#',
  },
  {
    title: 'Crop Yield Predictor',
    tag: 'Machine Learning',
    color: 'from-purple-400/30 to-purple-500/20',
    href: '#',
  },
  {
    title: 'HireEase Job Portal',
    tag: 'Full-Stack Java',
    color: 'from-pink-400/30 to-pink-500/20',
    href: '#',
  },
  {
    title: 'Vision Tracking Suite',
    tag: 'Computer Vision',
    color: 'from-fuchsia-400/30 to-violet-500/20',
    href: '#',
  },
  {
    title: 'Energy Core Shader',
    tag: 'WebGL/GLSL',
    color: 'from-emerald-400/30 to-teal-500/20',
    href: '#',
  },
  {
    title: 'Realtime Analytics',
    tag: 'Full-Stack',
    color: 'from-sky-400/30 to-blue-500/20',
    href: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.12),transparent_40%),_radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.14),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-wider text-purple-300">
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-5 backdrop-blur-xl`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-125" />
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{p.tag}</div>
                  <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-4 h-28 w-full rounded-xl bg-black/30 ring-1 ring-white/10">
                <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.18),transparent_50%)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
