import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'GPA', value: '9.1/10' },
  { label: 'Experience', value: '3+ yrs' },
  { label: 'Projects', value: '20+' },
  { label: 'Papers/Certs', value: '6' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(34,211,238,0.15),transparent_40%),_radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.18),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-wider text-cyan-300">
          About
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            style={{ boxShadow: '0 0 60px rgba(34,211,238,0.08) inset, 0 0 40px rgba(168,85,247,0.08) inset' }}
          >
            <p className="text-balance text-white/80">
              I design and build intelligent systems across the stack — from interactive web experiences to machine learning pipelines and computer vision products. My focus is on robust engineering, model reliability, and beautifully animated human interfaces.
            </p>
            <p className="mt-4 text-white/70">
              Recent work spans fault detection via deep CNNs, precision agriculture forecasting, and end‑to‑end platforms deployed to cloud. I enjoy shipping fast, optimizing for performance, and crafting cinematic UX.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((m) => (
              <li key={m.label} className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center backdrop-blur">
                <div className="text-2xl font-extrabold text-cyan-200">{m.value}</div>
                <div className="text-xs tracking-wider text-cyan-100/70">{m.label}</div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
