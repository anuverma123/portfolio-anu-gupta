import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Filejet – Entity Management Dashboard",
    desc: "Full dashboard UI revamp with Figma-to-responsive frontend implementation. Built reusable component architecture, integrated Google Charts and DataTables. Pixel-perfect admin dashboard with high-performance UI and scalable frontend systems.",
    tags: ["Dashboard", "Google Charts", "DataTables", "Tailwind CSS"],
    cta: "Design",
    href: null,
    image: "https://customer-assets.emergentagent.com/job_anu-dev-3d/artifacts/07x1u389_IMG_6532%20Copy.JPG",
    gradient: "from-electric to-cyan_glow",
    accent: "#007AFF",
  },
  {
    num: "02",
    title: "Travog – Travel Platform",
    desc: "Conducted in-depth research to understand user pain points and requirements. Designed high-fidelity mockups incorporating visually appealing UI elements, typography, and color palettes aligned with the app's brand identity. Conducted usability testing to identify improvement areas and iterated on designs based on user feedback.",
    tags: ["Tailwind CSS", "Responsive", "SaaS UI"],
    cta: "View Live",
    href: "https://www.travog.com/",
    image: null,
    gradient: "from-neon to-electric",
    accent: "#B026FF",
  },
  {
    num: "03",
    title: "Saudia Airlines",
    desc: "At Saudia Airlines, we worked on Figma designs provided by the client and implemented our company's features within their existing design system. We converted the approved Figma designs into responsive production-ready interfaces while maintaining Saudia's established UI patterns, branding, visual consistency, and overall design standards. Our focus was to seamlessly integrate new functionality without affecting the original user experience and design language.",
    tags: ["UI/UX", "Motion Design", "Luxury Web", "Responsive"],
    cta: "View Live",
    href: "https://www.saudia.com/",
    image: null,
    gradient: "from-cyan_glow to-emerald-400",
    accent: "#00E5FF",
  },
];

const Projects = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan_glow/80 mb-4">SELECTED WORK</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter inline-block text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-[3px] w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-electric to-neon" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-7 md:p-8 group hover:border-white/15 transition-all flex flex-col relative overflow-hidden"
              style={{ boxShadow: `0 8px 60px ${p.accent}08` }}
              data-testid={`project-card-${i}`}
            >
              {/* Subtle glow */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${p.accent}30, transparent 70%)`, filter: "blur(20px)" }}
              />

              {/* Number badge */}
              <div
                className={`relative w-14 h-10 rounded-xl bg-gradient-to-br ${p.gradient} font-heading font-black text-base text-white flex items-center justify-center mb-6`}
                style={{ boxShadow: `0 0 24px ${p.accent}60` }}
              >
                {p.num}
              </div>

              <h3 className="font-heading font-bold text-xl md:text-2xl tracking-tight mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border"
                    style={{ borderColor: `${p.accent}30`, color: `${p.accent}`, background: `${p.accent}08` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white transition-colors group/btn w-fit"
                  data-testid={`project-link-${i}`}
                >
                  {p.cta}
                  <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              ) : (
                <button
                  onClick={() => p.image && setOpenImage({ src: p.image, title: p.title })}
                  className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white transition-colors group/btn w-fit"
                  data-testid={`project-link-${i}`}
                >
                  {p.cta}
                  <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
            data-testid="design-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] glass-strong rounded-3xl overflow-hidden cursor-default"
            >
              <button
                onClick={() => setOpenImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-strong flex items-center justify-center hover:bg-white/10 transition-colors"
                data-testid="design-modal-close"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="absolute top-4 left-5 z-10 glass-strong rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest">
                {openImage.title}
              </div>
              <div className="overflow-auto max-h-[90vh]">
                <img
                  src={openImage.src}
                  alt={openImage.title}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
