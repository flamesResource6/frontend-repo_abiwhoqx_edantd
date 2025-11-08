import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (soundOn) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundOn]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft neon gradients and grid overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,255,255,0.15),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_40%),_radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.18),transparent_40%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md/30"
        >
          <p className="mb-3 text-sm tracking-widest text-cyan-300/80">VIJAY JAGDALE</p>
          <h1 className="text-balance bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Building Intelligent Systems that Shape the Future
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">Software Engineer · Machine Learning · Full‑Stack Developer</p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-cyan-200 backdrop-blur-md transition hover:bg-cyan-400/20">
              Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-400/10 px-5 py-2.5 text-purple-200 backdrop-blur-md transition hover:bg-purple-400/20">About</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-400/10 px-5 py-2.5 text-pink-200 backdrop-blur-md transition hover:bg-pink-400/20">Contact</a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-center gap-5 text-white/70">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:vijay@example.com" className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Sound toggle */}
        <motion.button
          onClick={() => setSoundOn((s) => !s)}
          className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/80 backdrop-blur-md hover:bg-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {soundOn ? 'Sound: ON' : 'Sound: OFF'}
        </motion.button>

        <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2021/12/07/audio_e4d392c3c1.mp3?filename=deep-ambient-110997.mp3" />
      </div>
    </section>
  );
}
