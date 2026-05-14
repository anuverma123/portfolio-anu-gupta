import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, Gauge, MonitorSmartphone, Component } from "lucide-react";

const stats = [
  { value: "6+", label: "Years Experience", testId: "stat-years" },
  { value: "10+", label: "Projects Shipped", testId: "stat-projects" },
  { value: "99", label: "Lighthouse Avg", testId: "stat-lighthouse" },
  { value: "12+", label: "Frontend Stacks", testId: "stat-stacks" },
];

const expertise = [
  { Icon: Code2, title: "Frontend Engineering", text: "React.js, JavaScript ES6+, component-driven architecture." },
  { Icon: Sparkles, title: "UI / UX Sensibility", text: "Pixel-perfect Figma to code, motion, design tokens." },
  { Icon: MonitorSmartphone, title: "Responsive Design", text: "Mobile-first, fluid grids, every breakpoint." },
  { Icon: Component, title: "Component Systems", text: "Reusable, type-safe libraries built to scale." },
  { Icon: Gauge, title: "Performance", text: "Core Web Vitals, lazy loading, bundle optimization." },
  { Icon: Layers, title: "Cross-browser", text: "Bulletproof support across Chrome, Safari, Firefox, Edge." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 mb-16"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              01 — About
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter leading-tight">
              A frontend engineer with a <span className="text-gradient">designer's eye</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-lg text-white/65 leading-relaxed">
              I'm Anu — a frontend developer obsessed with the small details that
              make products feel premium. I bridge design and code: building
              accessible, fast, and beautifully animated interfaces using React,
              Tailwind and modern CSS. I started in fashion, fell in love with
              3D, and ended up shipping pixel-perfect dashboards used by
              thousands.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group"
              data-testid={s.testId}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle, rgba(176,38,255,0.3), transparent 70%)" }} />
              <div className="font-heading font-black text-4xl md:text-5xl text-gradient">
                {s.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mt-2">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise tetris grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-6 group hover:border-neon/30 transition-all"
              data-testid={`expertise-${i}`}
            >
              <div className="w-12 h-12 rounded-2xl glass-strong flex items-center justify-center mb-4 group-hover:shadow-[0_0_24px_rgba(176,38,255,0.4)] transition-shadow">
                <e.Icon size={22} className="text-cyan_glow" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 tracking-tight">{e.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
