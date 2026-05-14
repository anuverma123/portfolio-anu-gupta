import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiWebflow } from "react-icons/si";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/13f8bec5-99f6-42cf-9271-a78ebb62bb49/images/53df5305ff6ef9293d985d20aca361fc592ace9875a8655f9ddedfdc194d49bf.png";
const PORTRAIT = "https://static.prod-images.emergentagent.com/jobs/13f8bec5-99f6-42cf-9271-a78ebb62bb49/images/db98c863f40d9cd9151981474b24456d3d82118fb8d7329a62d78b3d1148d60f.png";

const ORBIT_ICONS = [
  { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
  { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  { Icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
  { Icon: FaReact, color: "#61DAFB", label: "React" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
  { Icon: FaBootstrap, color: "#7952B3", label: "Bootstrap" },
  { Icon: SiWebflow, color: "#146EF5", label: "Webflow" },
  { Icon: FaFigma, color: "#F24E1E", label: "Figma" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-32 pb-20"
      data-testid="hero-section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
        {/* Radial neon glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(176,38,255,0.35) 0%, transparent 60%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 60%)", filter: "blur(40px)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* LEFT: Text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-widest text-white/70"
            data-testid="hero-availability-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for UI Frontend and Designer Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95]"
            data-testid="hero-headline"
          >
            Frontend Developer
            <br />
            <span className="text-gradient">& UI Engineer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            data-testid="hero-tagline"
          >
            Crafting scalable, pixel-perfect, high-performance web experiences.
            6+ years transforming Figma designs into production-ready interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap lg:flex-nowrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary group"
              data-testid="hero-view-projects-btn"
            >
              View Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
              data-testid="hero-download-resume-btn"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-secondary"
              data-testid="hero-contact-btn"
            >
              <Mail size={18} /> Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-6 pt-4"
            data-testid="hero-trust-strip"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-white/30">Stack</span>
            <div className="flex items-center gap-4 text-white/40">
              {ORBIT_ICONS.slice(0, 6).map(({ Icon, label }) => (
                <Icon key={label} size={18} title={label} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Orbit + Portrait */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center" data-testid="hero-orbit">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 m-auto w-[440px] h-[440px] rounded-full border border-white/[0.06]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {ORBIT_ICONS.slice(0, 4).map(({ Icon, color, label }, i) => {
              const angle = (i / 4) * 360;
              return (
                <div
                  key={label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg) translate(-50%, -50%)` }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="glass w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ boxShadow: `0 0 30px ${color}40` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Inner ring */}
          <motion.div
            className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-white/[0.08]"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {ORBIT_ICONS.slice(4, 8).map(({ Icon, color, label }, i) => {
              const angle = (i / 4) * 360;
              return (
                <div
                  key={label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg) translate(-50%, -50%)` }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ boxShadow: `0 0 24px ${color}40` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center portrait */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full glass-strong overflow-hidden animate-pulse-glow"
            data-testid="hero-portrait"
          >
            <img src={PORTRAIT} alt="Anu Gupta" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating UI chips */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-0 glass rounded-2xl px-4 py-2 text-xs font-mono"
          >
            <span className="text-cyan_glow">●</span> 99 Lighthouse
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 left-0 glass rounded-2xl px-4 py-2 text-xs font-mono"
          >
            <span className="text-neon">▲</span> 6+ years
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/30 tracking-widest"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
};

export default Hero;
