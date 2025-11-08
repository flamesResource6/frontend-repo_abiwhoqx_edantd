import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.15),transparent_40%),_radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-wider text-pink-300">
          Contact
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-xs text-white/70">Name</span>
              <input className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-cyan-300/30 focus:ring" placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-xs text-white/70">Email</span>
              <input type="email" className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-cyan-300/30 focus:ring" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2">
            <span className="text-xs text-white/70">Message</span>
            <textarea rows={5} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-cyan-300/30 focus:ring" placeholder="Hello!" />
          </label>
          <div className="mt-6 flex items-center justify-between">
            <button className="rounded-md bg-gradient-to-r from-cyan-500/70 to-fuchsia-500/70 px-5 py-2 font-medium text-white shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:brightness-110">
              Initiate Transmission
            </button>
            <div className="flex items-center gap-3 text-white/70">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:vijay@example.com" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </motion.form>
        <p className="mt-6 text-center text-xs text-white/60">Engineered by Vijay Jagdale © 2025</p>
      </div>
    </section>
  );
}
