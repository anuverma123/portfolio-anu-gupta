import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      data-testid="main-navbar"
    >
      <div
        className={`glass-strong rounded-full px-5 md:px-8 py-3 flex items-center gap-6 transition-all duration-500 ${
          scrolled ? "shadow-[0_8px_40px_rgba(0,122,255,0.18)]" : ""
        }`}
      >
        <button
          onClick={() => handleClick("hero")}
          className="font-heading font-black text-sm md:text-base tracking-tight flex items-center gap-2"
          data-testid="nav-logo"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan_glow to-neon animate-pulse" />
          ANU.GUPTA
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className="px-3 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all font-mono"
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleClick("contact")}
          className="hidden md:inline-flex text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-all"
          data-testid="nav-hire-btn"
        >
          Hire Me
        </button>

        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-label="menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 inset-x-4 glass-strong rounded-3xl p-6 flex flex-col gap-2"
            data-testid="mobile-menu"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="text-left px-4 py-3 rounded-2xl text-white/80 hover:bg-white/5 font-mono text-sm"
                data-testid={`mobile-nav-link-${l.id}`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
