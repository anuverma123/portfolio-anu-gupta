import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Download, Send, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "Pw4TyGsOS4qEA9R9w";
const EMAILJS_SERVICE_ID = "service_35eimal";
const EMAILJS_TEMPLATE_ID = "template_uikzs0b";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err?.text || err?.message || "Couldn't send message. Try again.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12" data-testid="contact-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">06 — Contact</p>
          <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter leading-[0.95]">
            Let's build something <span className="text-gradient">premium</span>.
          </h2>
          <p className="text-lg text-white/65 leading-relaxed mt-6">
            Open to frontend / UI engineering roles, contract work, and
            premium Webflow projects. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            className="glass rounded-3xl p-8 md:p-10 lg:col-span-3 space-y-5"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Name</label>
                <input
                  type="text" name="name" required value={form.name} onChange={update("name")}
                  className="neon-input" placeholder="Your name"
                  data-testid="contact-name-input"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Email</label>
                <input
                  type="email" name="email" required value={form.email} onChange={update("email")}
                  className="neon-input" placeholder="you@company.com"
                  data-testid="contact-email-input"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Subject</label>
              <input
                type="text" name="subject" value={form.subject} onChange={update("subject")}
                className="neon-input" placeholder="Role, project, or quick hello"
                data-testid="contact-subject-input"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Message</label>
              <textarea
                required name="message" rows={5} value={form.message} onChange={update("message")}
                className="neon-input resize-none" placeholder="Tell me about the role or project…"
                data-testid="contact-message-input"
              />
            </div>

            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                data-testid="contact-submit-btn"
              >
                {status === "loading" ? (
                  <>Sending <Loader2 size={18} className="animate-spin" /></>
                ) : status === "success" ? (
                  <>Sent <CheckCircle2 size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              {status === "success" && (
                <span className="text-sm text-emerald-400 font-mono" data-testid="contact-success-msg">
                  Got it — I'll reply soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-400 font-mono" data-testid="contact-error-msg">{error}</span>
              )}
            </div>
          </motion.form>

          {/* Side details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            <a href="mailto:anugupta1405@gmail.com"
              className="glass rounded-3xl p-6 flex items-center gap-4 hover:border-neon/40 transition-all group block"
              data-testid="contact-email-link"
            >
              <span className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(176,38,255,0.5)] transition-shadow flex-shrink-0">
                <Mail size={20} className="text-cyan_glow" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Email</p>
                <p className="font-heading font-bold truncate">anugupta1405@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/anu-gupta-921a81146/" target="_blank" rel="noreferrer"
              className="glass rounded-3xl p-6 flex items-center gap-4 hover:border-neon/40 transition-all group block"
              data-testid="contact-linkedin-link"
            >
              <span className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(0,122,255,0.5)] transition-shadow flex-shrink-0">
                <Linkedin size={20} className="text-electric" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">LinkedIn</p>
                <p className="font-heading font-bold">/in/anu-gupta-921a81146</p>
              </div>
            </a>
            <a href="/resume.pdf" download
              className="glass rounded-3xl p-6 flex items-center gap-4 hover:border-neon/40 transition-all group block"
              data-testid="contact-resume-link"
            >
              <span className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(176,38,255,0.5)] transition-shadow flex-shrink-0">
                <Download size={20} className="text-neon" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">Resume</p>
                <p className="font-heading font-bold">Download PDF</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
