import React from "react";
import { motion } from "framer-motion";
import { Target, Layers, Code2, Zap, Settings, ArrowRight } from "lucide-react";

const features = [
  {
    Icon: Target,
    title: "Pixel-Perfect Mindset",
    desc: "Every pixel deliberate. Every spacing intentional. Figma designs translate to production with surgical precision.",
  },
  {
    Icon: Layers,
    title: "Figma-to-Code Mastery",
    desc: "Deep fluency in translating complex design systems into scalable, maintainable frontend architecture.",
  },
  {
    Icon: Code2,
    title: "Component Architecture",
    desc: "Building reusable, composable UI systems that scale — from startup MVPs to enterprise-grade products.",
  },
  {
    Icon: Zap,
    title: "Performance Engineering",
    desc: "Optimized rendering, lazy loading, and bundle strategies that keep interfaces fast under real-world load.",
  },
  {
    Icon: Settings,
    title: "Design-Dev Bridge",
    desc: "Fluent in both design thinking and engineering constraints — reducing the gap between what's designed and what ships.",
  },
];

const chips = [
  { label: "Figma", top: "10%", left: "18%" },
  { label: "React", top: "8%", left: "70%" },
  { label: "Tailwind", top: "58%", left: "82%" },
  { label: "TypeScript", top: "82%", left: "55%" },
  { label: "GSAP", top: "62%", left: "10%" },
];

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden" data-testid="journey-section">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full opacity-40 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(0,122,255,0.18) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(176,38,255,0.15) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-electric mb-6"
          >
            THE EDGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] mb-8"
          >
            Design Thinking Meets<br />
            <span className="text-gradient">Frontend Engineering</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/65 leading-relaxed mb-12 max-w-xl"
          >
            Most engineers can build it. Most designers can imagine it. The rare
            few can do both — understanding layout, spacing, hierarchy, and
            motion at an engineering level, then shipping it perfectly.
          </motion.p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 items-start group"
                data-testid={`edge-feature-${i}`}
              >
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_24px_rgba(0,122,255,0.4)] transition-shadow">
                  <f.Icon size={18} className="text-electric" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg tracking-tight mb-1">{f.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed max-w-md">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-12 inline-flex items-center gap-2 text-electric font-mono text-sm hover:gap-3 transition-all"
            data-testid="edge-cta"
          >
            Let's build something exceptional
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* RIGHT: Orbital diagram */}
        <div className="relative h-[460px] md:h-[560px] flex items-center justify-center" data-testid="edge-orbit">
          {/* Concentric rings */}
          {[280, 360, 440].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-white/[0.06]"
              style={{ width: size, height: size }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
            />
          ))}

          {/* Glow behind center */}
          <div
            className="absolute w-48 h-48 rounded-full opacity-60"
            style={{ background: "radial-gradient(circle, rgba(0,122,255,0.35), transparent 70%)", filter: "blur(30px)" }}
          />

          {/* Center AG card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-[160px] h-[160px] rounded-3xl glass-strong flex flex-col items-center justify-center text-center px-4"
            style={{ boxShadow: "0 0 60px rgba(0,122,255,0.4), inset 0 0 40px rgba(0,122,255,0.1)" }}
          >
            <div className="font-heading font-black text-4xl text-electric">AG</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/70 mt-2">
              Frontend Engineer
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              + UI Designer
            </div>
          </motion.div>

          {/* Floating chips */}
          {chips.map((c, i) => (
            <div
              key={c.label}
              style={{
                position: "absolute",
                top: c.top,
                left: c.left,
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="glass rounded-2xl px-4 py-2 text-xs font-mono text-white/80 whitespace-nowrap">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
