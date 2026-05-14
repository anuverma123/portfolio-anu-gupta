import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaBootstrap, FaGitAlt, FaSass,
} from "react-icons/fa";
import { SiTailwindcss, SiWebflow } from "react-icons/si";

const skills = [
  { Icon: FaHtml5, name: "HTML5", level: 98, color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", level: 96, color: "#1572B6" },
  { Icon: FaSass, name: "SCSS", level: 92, color: "#CC6699" },
  { Icon: FaJs, name: "JavaScript ES6+", level: 93, color: "#F7DF1E" },
  { Icon: FaReact, name: "React.js", level: 94, color: "#61DAFB" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", level: 97, color: "#06B6D4" },
  { Icon: FaBootstrap, name: "Bootstrap", level: 90, color: "#7952B3" },
  { Icon: SiWebflow, name: "Webflow", level: 88, color: "#146EF5" },
  { Icon: FaFigma, name: "Figma", level: 92, color: "#F24E1E" },
  { Icon: FaGitAlt, name: "Git", level: 89, color: "#F1502F" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="skills-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">04 — Skills</p>
            <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter">
              The stack I <span className="text-gradient">ship with</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-lg text-white/65 leading-relaxed">
              Years of working production code across product and agency
              environments. These aren't tutorials — these are tools I reach for
              every day to build shippable, scalable interfaces.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-5 flex items-center gap-5 group hover:border-neon/30 transition-all"
              data-testid={`skill-${s.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div
                className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center flex-shrink-0 transition-shadow"
                style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
              >
                <s.Icon size={26} style={{ color: s.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading font-bold text-base md:text-lg tracking-tight truncate">{s.name}</h3>
                  <span className="font-mono text-xs text-white/50">{s.level}%</span>
                </div>
                <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${s.color} 0%, #B026FF 100%)`,
                      boxShadow: `0 0 16px ${s.color}80`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
