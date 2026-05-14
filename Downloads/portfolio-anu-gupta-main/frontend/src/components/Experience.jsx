import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    period: "2023 — Present",
    role: "Frontend Developer",
    company: "Appcore Labs India Pvt Ltd",
    desc: "Developed scalable frontend interfaces using HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS. Converted complex Figma designs into responsive production-ready interfaces. Built reusable UI components for dashboard systems. Worked on Entity Management Dashboard revamp. Implemented Google Charts and DataTables integrations. Optimized frontend performance across browsers and devices.",
    accent: "#007AFF",
  },
  {
    period: "2022 — 2023",
    role: "UI Developer",
    company: "Quadlabs Technologies",
    desc: "Developed responsive travel and booking interfaces. Modern UI implementation for large-scale travel platforms. Created reusable frontend modules. Improved UX and mobile responsiveness. Collaborated with UI/UX and product teams.",
    accent: "#B026FF",
  },
  {
    period: "2021 — 2022",
    role: "UI/UX Designer",
    company: "Bebo Technologies",
    desc: "Designed clean modern interfaces for web applications. Created wireframes, UI systems, and responsive layouts. Worked with developers for implementation accuracy. Improved usability and user interaction flows.",
    accent: "#00E5FF",
  },
  {
    period: "2020 — 2021",
    role: "CLO 3D Designer",
    company: "Sahu Exports",
    desc: "3D garment visualization and digital fashion workflows. Built strong design foundations — layout, visual balance, typography — that evolved into UI engineering expertise.",
    accent: "#F59E0B",
  },
  {
    period: "May 2017 — Jun 2019",
    role: "Junior Designer",
    company: "Scorpios Apparels Pvt Ltd",
    location: "Faridabad, India",
    desc: "Researched current fashion trends and determining consumer preferences. Designed sketches for new products with the design team. Developed CAD sketches and created mood boards with design team.",
    accent: "#10B981",
  },
];

const TimelineCard = ({ item, side, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -60 : 60, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass rounded-3xl p-6 md:p-7 hover:border-white/15 transition-all"
      style={{ boxShadow: `0 8px 40px ${item.accent}10` }}
    >
      <span
        className="inline-block font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 border"
        style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}10` }}
      >
        {item.period}
      </span>
      <h3 className="font-heading font-bold text-xl md:text-2xl tracking-tight">{item.role}</h3>
      <p className="font-heading font-semibold text-base mb-1" style={{ color: item.accent }}>
        {item.company}
      </p>
      {item.location && (
        <p className="font-mono text-xs text-white/40 mb-3 flex items-center gap-1.5">
          <span>📍</span> {item.location}
        </p>
      )}
      <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="experience-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan_glow/80 mb-4">CAREER JOURNEY</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter inline-block text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-[3px] w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-electric to-neon" />
        </motion.div>

        {/* Desktop: alternating */}
        <div className="hidden md:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] timeline-line rounded-full" />

          <div className="space-y-16">
            {items.map((it, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <div key={it.company} className="relative grid grid-cols-2 gap-12 items-center" data-testid={`timeline-item-${i}`}>
                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: it.accent,
                        boxShadow: `0 0 20px ${it.accent}, 0 0 40px ${it.accent}80`,
                      }}
                    >
                      <span
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ background: `${it.accent}60` }}
                      />
                    </div>
                  </div>

                  {side === "left" ? (
                    <>
                      <div><TimelineCard item={it} side="left" index={i} /></div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div><TimelineCard item={it} side="right" index={i} /></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: single column with left line */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] timeline-line rounded-full" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={it.company} className="relative">
                <div
                  className="absolute -left-[28px] top-4 w-4 h-4 rounded-full"
                  style={{ background: it.accent, boxShadow: `0 0 20px ${it.accent}` }}
                />
                <TimelineCard item={it} side="left" index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
