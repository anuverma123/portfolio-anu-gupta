import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-heading font-black tracking-tight text-sm">
          <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan_glow to-neon" />
          ANU.GUPTA
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Designed & built with care · © {new Date().getFullYear()}
        </p>
        <a href="#hero" className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition" data-testid="footer-back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
