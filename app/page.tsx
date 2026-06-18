"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform, useReducedMotion, animate } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Download, ArrowDown, ArrowUp, Moon, Sun, X, MapPin, Zap, Copy, Check, Loader2, Menu, GraduationCap, MonitorSmartphone, BookOpen, Target, Puzzle, Sparkles, Palette, Accessibility, Smartphone, Laptop, Handshake, Rocket, Wrench, Calendar, Sprout, Leaf, Eye, ExternalLink, ArrowRight, Briefcase, AlertCircle, Send, Code } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.2,
      delay: 0.6,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [to]);
  return (
    <p className="text-2xl font-bold text-[#5C7A6B] dark:text-[#8FAE9D]">
      {val}{suffix}
    </p>
  );
}

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1,
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value]);
  return (
    <p className="text-2xl font-bold text-[#5C7A6B] dark:text-[#8FAE9D] mb-1 relative z-10">
      {val}{suffix}
    </p>
  );
}

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="12" cy="12" r="2.2" />
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2a10 10 0 1 0 6.3 17.7L8.2 6.5h-1.7v11h1.4V8.4l8.4 11A10 10 0 0 0 12 2zm4.3 3v8h1.4V5h-1.4z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.4.9 1 2 2.1 4.4 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.4C15.5 7.1 14.4 6 12 6zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.4.9 1 2 2.1 4.4 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.4-.9-1-2-2.1-4.4-2.1z" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <text x="12" y="16" fontSize="9" fontWeight="700" textAnchor="middle" fill="currentColor">TS</text>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="9" cy="6" r="2.5" />
    <circle cx="15" cy="11.5" r="2.5" />
    <circle cx="9" cy="17" r="2.5" />
    <rect x="6.5" y="8.5" width="5" height="5" />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <circle cx="6" cy="6" r="1.8" />
    <circle cx="18" cy="6" r="1.8" />
    <circle cx="12" cy="18" r="1.8" />
    <path d="M6 7.8V12a4 4 0 0 0 4 4h2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M18 7.8V12a4 4 0 0 1-4 4h-2" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

// Rotating typewriter for role text
function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-4 md:h-5 bg-[#5C7A6B] dark:bg-[#8FAE9D] ml-1 animate-pulse align-middle" />
    </span>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Navbar hide/show on scroll direction
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Mouse parallax for Hero section
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const glowX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const imageX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const cardX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const cardY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-[#F7F5F2] text-[#2A2A28] dark:bg-[#1A1B19] dark:text-[#F2F0EC] transition-colors duration-300 selection:bg-[#5C7A6B]/20">

        {/* NAVBAR */}
        <motion.nav
          animate={{ y: hidden ? "-100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-[#1A1B19]/70 border-b border-[#E5E2DD] dark:border-[#2E302B] transition-colors duration-300"
        >
          {/* Scroll progress bar */}
          <motion.div
            style={{ scaleX }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-[#5C7A6B] dark:bg-[#8FAE9D] origin-left"
          />

          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="font-extrabold text-xl tracking-tight flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-md"
              aria-label="Go to home"
            >
              <span className="text-[#5C7A6B] dark:text-[#8FAE9D]">SH</span>.
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#8FAE9D] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
              </span>
            </motion.a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-[#8B8680] dark:text-[#A8A39C]">
              {navLinks.map((link) => {
                const id = link.toLowerCase();
                const isActive = activeSection === id;
                return (
                  <a
                    key={link}
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative px-3 py-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 ${
                      isActive
                        ? "text-[#2A2A28] dark:text-[#F2F0EC]"
                        : "hover:text-[#2A2A28] dark:hover:text-[#F2F0EC]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
              >
                <motion.span
                  key={dark ? "moon" : "sun"}
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center"
                >
                  {dark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.span>
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile fullscreen overlay menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] backdrop-blur-xl bg-white/90 dark:bg-[#1A1B19]/90 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E2DD] dark:border-[#2E302B]">
                <span className="font-extrabold text-xl tracking-tight">
                  <span className="text-[#5C7A6B] dark:text-[#8FAE9D]">SH</span>.
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 gap-6">
                {navLinks.map((link, i) => {
                  const id = link.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={link}
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className={`text-3xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-lg px-3 ${
                        isActive
                          ? "text-[#5C7A6B] dark:text-[#8FAE9D]"
                          : "text-[#2A2A28] dark:text-[#F2F0EC]"
                      }`}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO section goes here — paste the Hero code from the previous message right after this line */}

        
       {/* HERO */}
        <section id="home" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">

          {/* Layered background glows + particles + grain */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#8FAE9D]/20 dark:bg-[#8FAE9D]/10 rounded-full blur-[120px]"
            />
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#5C7A6B]/15 dark:bg-[#5C7A6B]/10 rounded-full blur-[120px]"
            />
            {!prefersReducedMotion && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#8FAE9D]/40"
                style={{ top: `${15 + i * 13}%`, left: `${10 + (i % 3) * 30}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
            ))}
            <div
              className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="w-8 h-[2px] bg-[#5C7A6B] dark:bg-[#8FAE9D] rounded-full" />
                <p className="uppercase tracking-[0.35em] text-xs text-[#5C7A6B] dark:text-[#8FAE9D] font-semibold min-h-[1em]">
                  <Typewriter words={["Frontend Developer", "UI Designer", "Computer Science Student", "Next.js Developer"]} />
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] mb-7 tracking-tight"
              >
                Shima
                <br />
                <span className="bg-gradient-to-r from-[#5C7A6B] to-[#8FAE9D] bg-clip-text text-transparent">
                  Shamsudheen
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg md:text-xl text-[#8B8680] dark:text-[#A8A39C] max-w-xl leading-relaxed mb-6"
              >
                I'm a Computer Science student who enjoys building clean, responsive
                websites. I care about accessibility, performance, and getting the
                small details right.
              </motion.p>

              {/* Tech stack pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {["React", "Next.js", "TailwindCSS", "Figma"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#E5E2DD] bg-white text-[#8B8680] dark:border-[#2E302B] dark:bg-[#23241F] dark:text-[#A8A39C]"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-4 mb-6"
              >
                <motion.a
                  href="#projects"
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#5C7A6B] hover:bg-[#4A6356] text-white px-7 py-3.5 rounded-2xl font-medium transition-all duration-300 shadow-[0_8px_24px_rgba(92,122,107,0.25)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  View Projects →
                </motion.a>
                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#E5E2DD] hover:border-[#5C7A6B] hover:bg-[#E8EDE9] dark:border-[#2E302B] dark:hover:border-[#8FAE9D] dark:hover:bg-[#8FAE9D]/10 px-7 py-3.5 rounded-2xl font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  Contact Me
                </motion.a>
              </motion.div>

              {/* Social proof row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#8B8680] dark:text-[#A8A39C]"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
                  10+ Projects Built
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
                  3+ Years Learning
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
                  Focused on UI/UX
                </span>
              </motion.div>

              {/* Socials + resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://github.com/Shimuuh"
                  target = "_blank"
                  rel = "noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shima-shamsudheen2708"
                  target = "_blank"
                  rel = "noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=shimahhshimuu@gmail.com"
                  target = "_blank"
                  rel = "noopener noreferrer"
                  aria-label="Email"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="/resume.pdf"
                  className="ml-2 inline-flex items-center gap-2 text-sm font-medium text-[#8B8680] dark:text-[#A8A39C] hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-md"
                >
                  <Download size={16} />
                  Resume
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Blurred glow */}
              <motion.div
                style={{ x: glowX, y: glowY }}
                className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#8FAE9D]/30 to-[#5C7A6B]/10 dark:from-[#8FAE9D]/20 dark:to-[#5C7A6B]/5 rounded-full blur-3xl"
              />

              <motion.div style={{ x: imageX, y: imageY }} className="relative z-10 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px]">
                <div className="group rounded-[40px] overflow-hidden shadow-2xl border border-[#E5E2DD] dark:border-[#2E302B] bg-white dark:bg-[#23241F]">
                  <img
                    src="/profile.jpeg"
                    alt="Portrait of Shima Shamsudheen"
                    className="w-full h-[340px] sm:h-[380px] md:h-[420px] object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Education card */}
                <motion.div
                  style={{ x: cardX, y: cardY }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="hidden sm:flex absolute top-6 -right-3 sm:-right-6 md:-right-10 backdrop-blur-xl bg-white/70 dark:bg-[#23241F]/70 border border-white/40 dark:border-white/10 shadow-xl rounded-3xl px-4 sm:px-5 py-3 items-center gap-2.5"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">B.Tech CSE</p>
                    <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">Student</p>
                  </div>
                </motion.div>

                {/* Frontend card */}
                <motion.div
                  style={{ x: cardX, y: cardY }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="hidden sm:flex absolute top-32 -right-2 sm:-right-4 md:-right-12 backdrop-blur-xl bg-white/70 dark:bg-[#23241F]/70 border border-white/40 dark:border-white/10 shadow-xl rounded-3xl px-4 sm:px-5 py-3 flex items-center gap-2.5"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0">
                    <MonitorSmartphone size={16} />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">React / Next.js</p>
                    <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">Developer</p>
                  </div>
                </motion.div>

                {/* Stats card */}
                <motion.div
                  style={{ x: cardX, y: cardY }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-3 left-0 sm:-left-4 backdrop-blur-xl bg-white/95 dark:bg-[#23241F]/95 border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl rounded-3xl px-6 py-4 flex gap-6 transition-shadow duration-300"
                >
                  <div>
                    <Counter to={10} suffix="+" />
                    <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">Projects</p>
                  </div>
                  <div>
                    <Counter to={3} suffix="+" />
                    <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">Years Learning</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex flex-col items-center gap-2 mt-24 text-[#8B8680] dark:text-[#A8A39C]"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.div>
        </section>
      
    {/* ABOUT */}
<section id="about" className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden">

  {/* Decorative ambient blobs (unique to About) */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-32 -left-20 w-[320px] h-[320px] bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/8 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] blur-3xl" />
    <div className="absolute top-1/3 right-0 w-[280px] h-[280px] bg-[#5C7A6B]/10 dark:bg-[#5C7A6B]/8 rounded-[60%_40%_40%_60%/40%_60%_40%_60%] blur-3xl" />
    <div className="absolute -bottom-20 left-1/3 w-[260px] h-[260px] bg-[#8FAE9D]/12 dark:bg-[#8FAE9D]/6 rounded-full blur-3xl" />
  </div>

  {/* Section divider animation */}
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="h-px w-24 bg-gradient-to-r from-[#5C7A6B] to-transparent dark:from-[#8FAE9D] origin-left mb-8 relative z-10"
  />

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12 relative z-10"
  >
    <p className="uppercase tracking-[0.3em] text-sm text-[#5C7A6B] dark:text-[#8FAE9D] mb-4 font-semibold">
      About Me
    </p>
    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold max-w-2xl leading-[1.1] tracking-tight">
      Designing thoughtful digital experiences with purpose.
    </h2>
  </motion.div>

  {/* Achievement badges */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="flex flex-wrap gap-3 mb-10 relative z-10"
  >
    {[
      { label: "Continuous Learner", icon: <BookOpen size={14} />, delay: 0 },
      { label: "Design Focused", icon: <Target size={14} />, delay: 0.5 },
      { label: "Problem Solver", icon: <Puzzle size={14} />, delay: 1 },
      { label: "Detail Oriented", icon: <Sparkles size={14} />, delay: 1.5 },
    ].map((badge) => (
      <motion.span
        key={badge.label}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
        className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] shadow-sm text-[#5C7A6B] dark:text-[#8FAE9D]"
      >
        {badge.icon}
        {badge.label}
      </motion.span>
    ))}
  </motion.div>

  {/* CONTENT CARDS */}
  <div className="grid lg:grid-cols-2 gap-6 relative z-10 mb-10">

    {/* CARD 1 - Who I Am */}
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-11 h-11 rounded-2xl bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 flex items-center justify-center text-[#5C7A6B] dark:text-[#8FAE9D] mb-5">
        <Handshake size={20} />
      </div>
      <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-3">Who I Am</h3>
      <p className="text-[#8B8680] dark:text-[#A8A39C] leading-7 mb-5">
        I like turning ideas into interfaces that feel clear and easy to use.
        I'm especially drawn to the space where design and code meet, building
        things that are both functional and pleasant to look at.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {["Frontend Development", "UI Design", "Problem Solving", "Learning Mindset"].map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F7F5F2] dark:bg-[#1A1B19] text-[#5C7A6B] dark:text-[#8FAE9D] border border-[#E5E2DD] dark:border-[#2E302B]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Compact learning timeline */}
      <div className="pt-5 border-t border-[#E5E2DD] dark:border-[#2E302B]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C] mb-4">
          My Path So Far
        </p>
        <div className="space-y-3">
          {[
            "Started coding",
            "Built first projects",
            "Learned React & Next.js",
            "Building modern web experiences",
          ].map((step, i, arr) => (
            <div key={step} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <span className={`w-2 h-2 rounded-full ${i === arr.length - 1 ? "bg-[#5C7A6B] dark:bg-[#8FAE9D]" : "bg-[#8FAE9D]/50"}`} />
                {i < arr.length - 1 && <span className="w-px flex-1 bg-[#E5E2DD] dark:bg-[#2E302B] mt-1 h-4" />}
              </div>
              <p className={`text-sm ${i === arr.length - 1 ? "font-medium text-[#2A2A28] dark:text-[#F2F0EC]" : "text-[#8B8680] dark:text-[#A8A39C]"}`}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* CARD 2 - Currently Exploring */}
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-5">Currently Exploring</h3>
      <div className="space-y-3 mb-6">
        {[
          { icon: <BookOpen size={16} />, text: "Next.js and modern frontend workflows" },
          { icon: <Palette size={16} />, text: "Design systems and typography" },
          { icon: <Zap size={16} />, text: "Portfolio and practice projects" },
          { icon: <Accessibility size={16} />, text: "Accessibility and responsive design" },
        ].map((item) => (
          <motion.div
            key={item.text}
            whileHover={{ x: 4 }}
            className="group relative flex items-center gap-4 rounded-xl px-4 py-3 bg-[#F7F5F2] dark:bg-[#1A1B19] hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-colors duration-300 overflow-hidden"
          >
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#5C7A6B] dark:bg-[#8FAE9D] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
            <motion.span
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-[#23241F] text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0 transition-transform"
            >
              {item.icon}
            </motion.span>
            <p className="text-sm text-[#2A2A28] dark:text-[#F2F0EC]">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Visual storytelling card */}
      <div className="mt-auto rounded-2xl overflow-hidden border border-[#E5E2DD] dark:border-[#2E302B] bg-[#F7F5F2] dark:bg-[#1A1B19] p-5 flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#23241F] flex items-center justify-center text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0">
          <Laptop size={20} />
        </div>
        <div>
          <p className="text-sm font-medium text-[#2A2A28] dark:text-[#F2F0EC]">Always learning, always building</p>
          <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">A few hours of code every day, one project at a time.</p>
        </div>
      </div>
    </motion.div>
  </div>

  {/* WHAT I VALUE */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="relative z-10 mb-10"
  >
    <p className="text-xs font-semibold uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C] mb-4">
      What I Value
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {[
        { icon: <Accessibility size={20} />, label: "Accessibility" },
        { icon: <Zap size={20} />, label: "Performance" },
        { icon: <Smartphone size={20} />, label: "Responsive Design" },
        { icon: <Sparkles size={20} />, label: "Clean UI" },
      ].map((val) => (
        <motion.div
          key={val.label}
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl px-3 sm:px-4 py-5 text-center shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-center mb-2 text-[#5C7A6B] dark:text-[#8FAE9D]">{val.icon}</div>
          <p className="text-sm font-medium">{val.label}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>

  {/* STATS ROW */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10 mb-16"
  >
    {[
      { value: 10, suffix: "+", label: "Projects Built", icon: <Rocket size={20} /> },
      { value: 6, suffix: "+", label: "Technologies", icon: <Wrench size={20} /> },
      { value: 3, suffix: "+", label: "Years Learning", icon: <Calendar size={20} /> },
      { value: null, suffix: "", label: "Specialization", icon: <Target size={20} />, text: "Web Development" },
    ].map((stat) => (
      <motion.div
        key={stat.label}
        whileHover={{ y: -4 }}
        className="group relative backdrop-blur-xl bg-white/70 dark:bg-[#23241F]/70 border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl px-3 sm:px-4 py-5 text-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#8FAE9D]/0 group-hover:bg-[#8FAE9D]/5 transition-colors duration-300" />
        <div className="flex justify-center mb-1 text-[#5C7A6B] dark:text-[#8FAE9D] relative z-10">{stat.icon}</div>
        {stat.value !== null ? (
          <AnimatedStat value={stat.value} suffix={stat.suffix} />
        ) : (
          <p className="text-xl sm:text-2xl font-bold text-[#5C7A6B] dark:text-[#8FAE9D] mb-1 relative z-10">{stat.text}</p>
        )}
        <p className="text-xs text-[#8B8680] dark:text-[#A8A39C] relative z-10">{stat.label}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

     {/* JOURNEY */}
<section id="journey" className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">

  {/* Unique flowing background */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/10 rounded-full blur-3xl" />
    <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06]" preserveAspectRatio="none">
      <path
        d="M 100 0 Q 400 200 100 400 T 100 800 Q 400 1000 100 1200"
        stroke="#5C7A6B"
        strokeWidth="2"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16 relative z-10"
  >
    <p className="uppercase tracking-[0.3em] text-sm text-[#5C7A6B] dark:text-[#8FAE9D] mb-4 font-semibold">
      My Journey
    </p>
    <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 tracking-tight">
      Learning by building.
    </h2>
    <p className="text-[#8B8680] dark:text-[#A8A39C] text-lg max-w-2xl">
      A few milestones that shaped my path into design and development.
    </p>
  </motion.div>

  <div className="relative z-10">
    {/* Center line track */}
    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E2DD] dark:bg-[#2E302B] md:-translate-x-1/2" />

    {/* Animated growing line */}
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{ transformOrigin: "top" }}
      className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#5C7A6B] dark:bg-[#8FAE9D] md:-translate-x-1/2"
    />

    <div className="space-y-10">
      {[
        {
          year: "2023",
          title: "Started Learning HTML & CSS",
          desc: "Built my first web pages and discovered how design and code work together.",
          badge: "Foundation",
          icon: <Sprout size={16} />,
          learned: "Page structure, semantic HTML, basic styling and how the web actually works.",
          completed: true,
        },
        {
          year: "2024",
          title: "Explored UI/UX Design",
          desc: "Learned layout, typography and user-centered thinking.",
          badge: "Design Thinking",
          icon: <Palette size={16} />,
          learned: "Visual hierarchy, spacing systems, color theory and designing with the user in mind.",
          completed: true,
        },
        {
          year: "2025",
          title: "Started Building Projects",
          desc: "Applied my skills through portfolio, UI and frontend projects.",
          badge: "Practical Experience",
          icon: <Wrench size={16} />,
          learned: "Component-based thinking, responsive layouts, and putting design systems into real code.",
          completed: true,
        },
        {
          year: "Today",
          title: "Learning Next.js",
          desc: "Focused on modern frontend development and building better digital experiences.",
          badge: "Current Focus",
          icon: <Rocket size={16} />,
          learned: "App Router, animations with Framer Motion, and refining accessibility & performance.",
          current: true,
          topics: ["Next.js App Router", "Framer Motion", "Accessibility", "Performance Basics"],
        },
      ].map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 + 0.3, type: "spring", stiffness: 300 }}
            className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-full border-2 border-white dark:border-[#1A1B19] ${
              item.current
                ? "w-5 h-5 bg-[#5C7A6B] dark:bg-[#8FAE9D] ring-4 ring-[#8FAE9D]/30"
                : "w-3.5 h-3.5 bg-[#8FAE9D]"
            }`}
          >
            {item.completed && (
              <Check size={9} className="text-white" strokeWidth={3} />
            )}
          </motion.div>

          {/* Card */}
          <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${i % 2 === 1 ? "md:pr-0 md:ml-auto" : ""}`}>
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              animate={item.current ? { scale: [1, 1.015, 1] } : {}}
              transition={item.current ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
              className={`group relative bg-white dark:bg-[#23241F] border rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default ${
                item.current
                  ? "border-[#8FAE9D] shadow-[0_0_30px_rgba(143,174,157,0.25)]"
                  : "border-[#E5E2DD] dark:border-[#2E302B]"
              }`}
            >
              <div className="flex items-center justify-between mb-2 gap-2">
                <div className="flex items-center gap-2 text-[#5C7A6B] dark:text-[#8FAE9D]">
                  {item.icon}
                  <p className="font-bold text-sm">{item.year}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                  item.current
                    ? "bg-[#5C7A6B] text-white dark:bg-[#8FAE9D] dark:text-[#1A1B19]"
                    : "bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D]"
                }`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8B8680] dark:text-[#A8A39C] text-sm leading-7">{item.desc}</p>

              {/* Current focus topics */}
              {item.current && item.topics && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Hover-reveal "What I learned" */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                <div className="overflow-hidden">
                  <div className="pt-3 mt-3 border-t border-[#E5E2DD] dark:border-[#2E302B]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C] mb-1">
                      What I Learned
                    </p>
                    <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] leading-6">
                      {item.learned}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Learning Philosophy card */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="relative z-10 mt-16 bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-8 text-center shadow-sm"
  >
    <div className="flex justify-center mb-3 text-[#5C7A6B] dark:text-[#8FAE9D]">
      <Leaf size={24} />
    </div>
    <h3 className="font-serif text-xl font-semibold mb-2">Learning by building.</h3>
    <p className="text-[#8B8680] dark:text-[#A8A39C] text-sm leading-7 max-w-xl mx-auto">
      I learn best by doing — trying things out, making mistakes, and improving
      with every project I build.
    </p>
  </motion.div>

  {/* Section ending message */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative z-10 mt-6 text-center"
  >
    <span className="inline-flex items-center gap-2 text-sm text-[#5C7A6B] dark:text-[#8FAE9D] font-medium px-4 py-2 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10">
      <Sparkles size={14} />
      Currently building the next chapter.
    </span>
  </motion.div>
</section>

{/* SKILLS */}
<section id="skills" className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">

  {/* Unique constellation background */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/10 rounded-full blur-3xl" />
    <svg className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.07]" preserveAspectRatio="none">
      <line x1="10%" y1="15%" x2="30%" y2="35%" stroke="#5C7A6B" strokeWidth="1" />
      <line x1="30%" y1="35%" x2="55%" y2="20%" stroke="#5C7A6B" strokeWidth="1" />
      <line x1="55%" y1="20%" x2="80%" y2="40%" stroke="#5C7A6B" strokeWidth="1" />
      <line x1="20%" y1="70%" x2="45%" y2="55%" stroke="#5C7A6B" strokeWidth="1" />
      <line x1="45%" y1="55%" x2="70%" y2="75%" stroke="#5C7A6B" strokeWidth="1" />
      <line x1="70%" y1="75%" x2="90%" y2="60%" stroke="#5C7A6B" strokeWidth="1" />
      <circle cx="10%" cy="15%" r="2" fill="#5C7A6B" />
      <circle cx="30%" cy="35%" r="2" fill="#5C7A6B" />
      <circle cx="55%" cy="20%" r="2" fill="#5C7A6B" />
      <circle cx="80%" cy="40%" r="2" fill="#5C7A6B" />
      <circle cx="20%" cy="70%" r="2" fill="#5C7A6B" />
      <circle cx="45%" cy="55%" r="2" fill="#5C7A6B" />
      <circle cx="70%" cy="75%" r="2" fill="#5C7A6B" />
      <circle cx="90%" cy="60%" r="2" fill="#5C7A6B" />
    </svg>

    {/* Floating background tech chips */}
    {!prefersReducedMotion && [
      { icon: <ReactIcon />, top: "12%", left: "8%", duration: 8 },
      { icon: <NextIcon />, top: "65%", left: "85%", duration: 10 },
      { icon: <TypeScriptIcon />, top: "40%", left: "92%", duration: 9 },
      { icon: <FigmaIcon />, top: "78%", left: "15%", duration: 7 },
    ].map((chip, i) => (
      <motion.div
        key={i}
        className="absolute w-8 h-8 opacity-[0.04] dark:opacity-[0.06]"
        style={{ top: chip.top, left: chip.left }}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: chip.duration, repeat: Infinity, ease: "easeInOut" }}
      >
        {chip.icon}
      </motion.div>
    ))}
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-12 relative z-10"
  >
    <p className="uppercase tracking-[0.3em] text-sm text-[#5C7A6B] dark:text-[#8FAE9D] mb-4 font-semibold">
      Skills & Toolbox
    </p>
    <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 tracking-tight">
      Tools I work with.
    </h2>
    <p className="text-[#8B8680] dark:text-[#A8A39C] text-lg max-w-2xl">
      Technologies and tools I use to design, build and deploy digital experiences.
    </p>
  </motion.div>

  {/* STATS */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.05 }}
    className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10 mb-10"
  >
    {[
      { value: 10, suffix: "+", label: "Projects" },
      { value: 3, suffix: "+", label: "Years Learning" },
      { value: 6, suffix: "+", label: "Technologies" },
      { value: 100, suffix: "%", label: "Responsive Focus" },
    ].map((stat) => (
      <div
        key={stat.label}
        className="backdrop-blur-xl bg-white/70 dark:bg-[#23241F]/70 border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl px-3 sm:px-4 py-5 text-center"
      >
        <AnimatedStat value={stat.value} suffix={stat.suffix} />
        <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">{stat.label}</p>
      </div>
    ))}
  </motion.div>

  {/* FEATURED STACK */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
    whileHover={{ y: -4 }}
    className="relative z-10 mb-6 bg-gradient-to-br from-[#5C7A6B] to-[#4A6356] dark:from-[#23241F] dark:to-[#1A1B19] border border-[#5C7A6B] dark:border-[#8FAE9D]/30 rounded-3xl p-6 sm:p-8 shadow-lg overflow-hidden"
  >
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8FAE9D]/30 rounded-full blur-2xl" />
    <h3 className="font-serif text-white dark:text-[#F2F0EC] text-xl sm:text-2xl font-semibold mb-1 relative z-10">My Primary Stack</h3>
    <p className="text-white/70 dark:text-[#A8A39C] text-sm mb-5 relative z-10">The tools I reach for most often</p>
    <div className="flex flex-wrap gap-3 relative z-10">
      {[
        { name: "React", icon: <ReactIcon /> },
        { name: "Next.js", icon: <NextIcon /> },
        { name: "Tailwind", icon: <TailwindIcon /> },
        { name: "TypeScript", icon: <TypeScriptIcon /> },
        { name: "Figma", icon: <FigmaIcon /> },
        { name: "Git", icon: <GitIcon /> },
      ].map((skill) => (
        <motion.span
          key={skill.name}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-colors duration-300 cursor-default"
        >
          <span className="w-4 h-4 flex items-center justify-center">{skill.icon}</span>
          {skill.name}
        </motion.span>
      ))}
    </div>
  </motion.div>

  {/* CATEGORY CARDS */}
  <div className="grid md:grid-cols-2 gap-6 relative z-10 mb-6">
    {[
      {
        title: "Frontend Engineering",
        skills: [
          { name: "React", icon: <ReactIcon />, level: "Strong", detail: "Used in all major projects" },
          { name: "Next.js", icon: <NextIcon />, level: "Comfortable", detail: "App Router & routing" },
          { name: "HTML", icon: null, level: "Advanced", detail: "Semantic structure" },
          { name: "CSS", icon: null, level: "Advanced", detail: "Layouts & responsive design" },
          { name: "JavaScript", icon: null, level: "Strong", detail: "Core logic & interactivity" },
          { name: "Tailwind", icon: <TailwindIcon />, level: "Strong", detail: "Styling system of choice" },
        ],
      },
      {
        title: "Design & UI",
        skills: [
          { name: "Figma", icon: <FigmaIcon />, level: "Comfortable", detail: "Wireframes & prototypes" },
          { name: "Canva", icon: null, level: "Strong", detail: "Quick visual assets" },
          { name: "Wireframing", icon: null, level: "Comfortable", detail: "Layout planning" },
          { name: "Typography", icon: null, level: "Strong", detail: "Hierarchy & readability" },
        ],
      },
      {
        title: "Development Tools",
        skills: [
          { name: "Git", icon: <GitIcon />, level: "Comfortable", detail: "Version control basics" },
          { name: "GitHub", icon: <GitIcon />, level: "Comfortable", detail: "Repos & collaboration" },
          { name: "VS Code", icon: null, level: "Strong", detail: "Daily dev environment" },
          { name: "Vercel", icon: <NextIcon />, level: "Comfortable", detail: "Deploying projects" },
        ],
      },
    ].map((cat, i) => (
      <motion.div
        key={cat.title}
        initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.08 }}
        whileHover={{ y: -4 }}
        className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <h3 className="font-serif text-lg sm:text-xl font-semibold mb-5">{cat.title}</h3>
        <div className="flex flex-wrap gap-3">
          {cat.skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F7F5F2] dark:bg-[#1A1B19] border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#8FAE9D] transition-colors duration-300 cursor-default"
              tabIndex={0}
            >
              {skill.icon && <span className="w-4 h-4 flex items-center justify-center">{skill.icon}</span>}
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D]">
                {skill.level}
              </span>

              {/* Hover/focus detail tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0 transition-all duration-200 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-[#2A2A28] dark:bg-[#F2F0EC] text-[#F7F5F2] dark:text-[#1A1B19] text-xs px-3 py-1.5 rounded-lg shadow-lg">
                  {skill.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>

  {/* CURRENT FOCUS + CURRENTLY LEARNING + LEARNING NOW */}
  <div className="grid md:grid-cols-3 gap-6 relative z-10">

    {/* Current Focus distribution */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-serif text-lg sm:text-xl font-semibold mb-5">Current Focus</h3>
      <div className="space-y-4">
        {[
          { label: "Web Development", portion: 50 },
          { label: "UI Design", portion: 30 },
          { label: "Learning New Tools", portion: 20 },
        ].map((f) => (
          <div key={f.label}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-[#2A2A28] dark:text-[#F2F0EC]">{f.label}</span>
              <span className="text-[#8B8680] dark:text-[#A8A39C]">{f.portion}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#F7F5F2] dark:bg-[#1A1B19] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${f.portion}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Currently Learning */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.08 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-serif text-lg sm:text-xl font-semibold mb-5">Currently Learning</h3>
      <div className="space-y-4">
        {[
          { name: "Next.js", icon: <NextIcon />, stage: "Building with it" },
          { name: "TypeScript", icon: <TypeScriptIcon />, stage: "Just getting started" },
          { name: "Framer Motion", icon: null, stage: "Exploring basics" },
        ].map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {item.icon && <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D] whitespace-nowrap">
              {item.stage}
            </span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* What I'm Learning Now snapshot */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.16 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <h3 className="font-serif text-lg sm:text-xl font-semibold mb-1">What I'm Learning Now</h3>
      <p className="text-xs text-[#8B8680] dark:text-[#A8A39C] mb-5">A snapshot of my active learning</p>
      <div className="space-y-3">
        {["Next.js App Router", "TypeScript", "Framer Motion", "Performance Optimization"].map((topic, i) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
            <span className="text-[#2A2A28] dark:text-[#F2F0EC]">{topic}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
     {/* PROJECTS */}
<section id="projects" className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">

  {/* Unique showcase background */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-[#5C7A6B]/10 dark:bg-[#5C7A6B]/8 rounded-full blur-3xl" />
    {!prefersReducedMotion && [...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-[#8FAE9D]/30"
        style={{ top: `${20 + i * 18}%`, left: `${5 + i * 25}%` }}
        animate={{ y: [0, -24, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
      />
    ))}
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10 relative z-10"
  >
    <p className="uppercase tracking-[0.3em] text-sm text-[#5C7A6B] dark:text-[#8FAE9D] mb-4 font-semibold">
      Featured Projects
    </p>
    <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 tracking-tight">
      Selected work.
    </h2>
    <p className="text-[#8B8680] dark:text-[#A8A39C] text-lg max-w-2xl">
      A few projects I've built while learning design, frontend development and problem solving.
    </p>
  </motion.div>

  {/* CATEGORY FILTERS */}
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.05 }}
    className="flex flex-wrap gap-2 mb-16 relative z-10"
  >
    {["All", "Frontend", "UI Design", "Personal Projects"].map((filter) => (
      <motion.button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        whileTap={{ scale: 0.97 }}
        aria-pressed={activeFilter === filter}
        className={`relative text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 ${
          activeFilter === filter
            ? "text-white dark:text-[#1A1B19] border-transparent"
            : "text-[#8B8680] dark:text-[#A8A39C] border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#8FAE9D]"
        }`}
      >
        {activeFilter === filter && (
          <motion.span
            layoutId="activeFilterPill"
            className="absolute inset-0 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]"
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        )}
        <span className="relative z-10">{filter}</span>
      </motion.button>
    ))}
  </motion.div>

  <div className="space-y-16 relative z-10">
    {[
      {
        badge: "Featured Project",
        category: "Portfolio Website",
        filterTags: ["Frontend", "Personal Projects"],
        title: "Personal Portfolio",
        period: "2025 – Present",
        url: "shima-portfolio.vercel.app",
        liveUrl: "https://shima-shamsudheen.vercel.app",
        githubUrl: "https://github.com/yourname/portfolio",
        problem: "Needed a clean, fast personal site that represents my skills professionally to recruiters.",
        solution: "Designed and developed a responsive portfolio focused on typography, accessibility and clean layouts.",
        learned: "Learned how to structure a Next.js app with reusable components, implement dark mode, and use Framer Motion for smooth, purposeful animations.",
        stack: [
          { name: "Next.js", icon: <NextIcon /> },
          { name: "Tailwind", icon: <TailwindIcon /> },
          { name: "Figma", icon: <FigmaIcon /> },
          { name: "Framer Motion", icon: null },
        ],
        features: ["Responsive Design", "Dark Mode", "Accessibility Focused", "Smooth Animations"],
        challenge: "Building a portfolio that felt premium and personal, not templated, while still being achievable at my current skill level.",
        process: "Started with a static layout, then iterated section by section — refining color palette, typography, and motion design over multiple passes.",
        outcomeText: "A fully responsive, animated portfolio with light/dark mode that I can confidently share with recruiters.",
        featured: true,
        reverse: false,
        image: "/portfolio-preview.jpeg",
      },
      {
        badge: "UI Design",
        category: "E-Commerce Interface",
        filterTags: ["UI Design", "Personal Projects"],
        title: "Shop UI Concept",
        period: "2025",
        url: "novastore-ui.figma.com",
        liveUrl: "https://figma.com",
        githubUrl: "https://github.com/yourname/shop-ui",
        problem: "Online stores often overwhelm users with cluttered navigation and inconsistent layouts.",
        solution: "Created a shopping experience focused on navigation, usability and responsive design principles.",
        learned: "Improved my understanding of design systems, component consistency, and how spacing and hierarchy affect usability.",
        stack: [
          { name: "Figma", icon: <FigmaIcon /> },
          { name: "UI/UX", icon: null },
          { name: "Design System", icon: null },
        ],
        features: ["Mobile First", "10+ Components", "Consistent Design System"],
        challenge: "Designing a cohesive product grid and navigation system that felt clean across many product types.",
        process: "Researched existing e-commerce patterns, then built a component library in Figma before assembling full pages.",
        outcomeText: "A consistent, mobile-first UI concept with a reusable component library.",
        featured: false,
        reverse: true,
        image: "/shop-preview.jpeg",
      },
      {
        badge: "Productivity App",
        category: "Study Planner",
        filterTags: ["Frontend", "Personal Projects"],
        title: "Study Planner",
        period: "2024 – 2025",
        url: "focusflow-app.vercel.app",
        liveUrl: "https://focusflow-app.vercel.app",
        githubUrl: "https://github.com/yourname/study-planner",
        problem: "Students need a simple way to track tasks and goals without a cluttered interface.",
        solution: "Built a planner concept focused on organizing tasks, schedules and academic goals.",
        learned: "Practiced breaking a product into components, managing layout across multiple pages, and keeping UI consistent.",
        stack: [
          { name: "React", icon: <ReactIcon /> },
          { name: "UI Design", icon: null },
          { name: "Productivity", icon: null },
        ],
        features: ["3 Pages", "100% Responsive", "Component-driven"],
        challenge: "Keeping the dashboard simple while still surfacing tasks, focus time, and progress clearly.",
        process: "Sketched the dashboard layout first, then built components for tasks, timer, and upcoming events.",
        outcomeText: "A clean, component-driven planner UI across 3 fully responsive pages.",
        featured: false,
        reverse: false,
        image: "/focusflow-preview.jpeg",
      },
    ]
      .filter((p) => activeFilter === "All" || p.filterTags.includes(activeFilter))
      .map((project, i) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.05 }}
        whileHover={{ y: -4 }}
        className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white dark:bg-[#23241F] border rounded-[32px] p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
          project.featured
            ? "border-[#8FAE9D] shadow-[0_0_40px_rgba(143,174,157,0.15)]"
            : "border-[#E5E2DD] dark:border-[#2E302B]"
        }`}
      >
        {/* Featured spotlight */}
        {project.featured && (
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/10 rounded-full blur-3xl pointer-events-none" />
        )}

       {/* IMAGE / MOCKUP */}
        <div className={`relative ${project.reverse ? "lg:order-2" : ""}`}>
          <button
            onClick={() => setOpenModal(project.title)}
            aria-label={`View case study for ${project.title}`}
            className="group block w-full text-left rounded-2xl overflow-hidden border border-[#E5E2DD] dark:border-[#2E302B] bg-[#F7F5F2] dark:bg-[#1A1B19] shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
          >
            {/* Browser frame with URL bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-[#23241F] border-b border-[#E5E2DD] dark:border-[#2E302B]">
              <span className="w-3 h-3 rounded-full bg-[#E5E2DD] dark:bg-[#2E302B]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E2DD] dark:bg-[#2E302B]" />
              <span className="w-3 h-3 rounded-full bg-[#E5E2DD] dark:bg-[#2E302B]" />
              <div className="ml-3 flex-1 text-xs px-3 py-1 rounded-full bg-[#F7F5F2] dark:bg-[#1A1B19] text-[#8B8680] dark:text-[#A8A39C] truncate">
                {project.url}
              </div>
            </div>
            <div className="relative bg-[#E5E2DD] dark:bg-[#2E302B]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A1B19]/0 group-hover:bg-[#1A1B19]/40 group-hover:backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full bg-white/10 border border-white/30 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={14} />
                  View Project
                </span>
              </div>
            </div>
          </button>

          {/* Project metrics */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {project.features.slice(0, 4).map((f) => (
              <div
                key={f}
                className="text-center text-xs font-medium px-2 py-2 rounded-xl bg-[#F7F5F2] dark:bg-[#1A1B19] border border-[#E5E2DD] dark:border-[#2E302B] text-[#5C7A6B] dark:text-[#8FAE9D]"
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className={project.reverse ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {project.featured ? (
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#5C7A6B] text-white dark:bg-[#8FAE9D] dark:text-[#1A1B19]">
                {project.badge}
              </span>
            ) : (
              <p className="text-sm text-[#5C7A6B] dark:text-[#8FAE9D] font-semibold">
                {project.badge}
              </p>
            )}
            <span className="flex items-center gap-1.5 text-xs text-[#8B8680] dark:text-[#A8A39C]">
              <Calendar size={12} />
              {project.period}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">{project.title}</h3>

          <div className="space-y-3 mb-5">
            <p className="text-sm text-[#8B8680] dark:text-[#A8A39C]">
              <span className="font-semibold text-[#2A2A28] dark:text-[#F2F0EC]">Problem: </span>
              {project.problem}
            </p>
            <p className="text-sm text-[#8B8680] dark:text-[#A8A39C]">
              <span className="font-semibold text-[#2A2A28] dark:text-[#F2F0EC]">Solution: </span>
              {project.solution}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-[#F7F5F2] dark:bg-[#1A1B19] border border-[#E5E2DD] dark:border-[#2E302B] text-[#5C7A6B] dark:text-[#8FAE9D]"
              >
                {tech.icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{tech.icon}</span>}
                {tech.name}
              </span>
            ))}
          </div>

          {/* What I Learned */}
          <div className="mb-6 p-4 rounded-2xl bg-[#E8EDE9] dark:bg-[#8FAE9D]/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5C7A6B] dark:text-[#8FAE9D] mb-1.5">
              What I Learned
            </p>
            <p className="text-sm text-[#2A2A28] dark:text-[#F2F0EC] leading-6">{project.learned}</p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[#5C7A6B] hover:bg-[#4A6356] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
            >
              Live Demo
              <ExternalLink size={14} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
            >
              <FaGithub size={14} />
              GitHub
            </motion.a>
            <motion.button
              onClick={() => setOpenModal(project.title)}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 text-sm font-medium text-[#5C7A6B] dark:text-[#8FAE9D] px-5 py-2.5 hover:underline focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-xl"
            >
              View Case Study
              <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>

        {/* CASE STUDY MODAL */}
        <AnimatePresence>
          {openModal === project.title && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} case study`}
              className="fixed inset-0 z-[100] bg-[#1A1B19]/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setOpenModal(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-[32px] p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6 gap-3">
                  <div>
                    <p className="text-xs text-[#8B8680] dark:text-[#A8A39C] mb-1">{project.period}</p>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <button
                    onClick={() => setOpenModal(null)}
                    aria-label="Close case study"
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
                  >
                    <X size={18} />
                  </button>
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} case study`}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover object-top rounded-2xl mb-6 border border-[#E5E2DD] dark:border-[#2E302B]"
                />

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5C7A6B] dark:text-[#8FAE9D] mb-1.5">Challenge</p>
                    <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] leading-6">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5C7A6B] dark:text-[#8FAE9D] mb-1.5">Process</p>
                    <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] leading-6">{project.process}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5C7A6B] dark:text-[#8FAE9D] mb-1.5">Solution</p>
                    <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] leading-6">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#5C7A6B] dark:text-[#8FAE9D] mb-1.5">Outcome</p>
                    <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] leading-6">{project.outcomeText}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#E5E2DD] dark:border-[#2E302B]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#5C7A6B] hover:bg-[#4A6356] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</section>

{/* CONTACT */}
<section id="contact" className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">

  {/* Unique aurora background */}
  <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8FAE9D]/15 dark:bg-[#8FAE9D]/10 rounded-full blur-3xl" />
    <motion.div
      animate={!prefersReducedMotion ? { x: [0, 40, 0], opacity: [0.3, 0.5, 0.3] } : {}}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 -left-20 w-[350px] h-[350px] bg-gradient-to-br from-[#8FAE9D]/20 to-transparent dark:from-[#8FAE9D]/12 rounded-full blur-3xl"
    />
    <motion.div
      animate={!prefersReducedMotion ? { x: [0, -30, 0], opacity: [0.25, 0.45, 0.25] } : {}}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-gradient-to-tl from-[#5C7A6B]/15 to-transparent dark:from-[#5C7A6B]/10 rounded-full blur-3xl"
    />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16 relative z-10"
  >
    <p className="uppercase tracking-[0.3em] text-sm text-[#5C7A6B] dark:text-[#8FAE9D] mb-4 font-semibold">
      Contact
    </p>
    <h2 className="font-serif text-4xl sm:text-5xl font-semibold mb-4 tracking-tight max-w-2xl">
      Let's build something meaningful together.
    </h2>
  </motion.div>

  <div className="grid lg:grid-cols-2 gap-8 relative z-10">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-[#8B8680] dark:text-[#A8A39C] text-lg leading-7 mb-8">
        I'm open to internship opportunities, freelance work and collaborations.
        Feel free to reach out — I'm always happy to chat.
      </p>

      {/* Availability card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mb-6 bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl p-5"
      >
        <div className="flex items-center gap-3 text-sm mb-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-medium">Currently Available</span>
        </div>
        <div className="space-y-2">
          {[
            { icon: <GraduationCap size={14} />, text: "Open to Internships" },
            { icon: <Briefcase size={14} />, text: "Open to Freelance Work" },
            { icon: <MonitorSmartphone size={14} />, text: "Frontend Opportunities" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-[#8B8680] dark:text-[#A8A39C]">
              <span className="text-[#5C7A6B] dark:text-[#8FAE9D]">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-[#8B8680] dark:text-[#A8A39C]">
          <MapPin size={16} className="text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0" />
          Kerala, India
        </div>
        <div className="flex items-center gap-3 text-sm text-[#8B8680] dark:text-[#A8A39C]">
          <Zap size={16} className="text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0" />
          Usually replies within 24 hours
        </div>
      </div>

      {/* Personal focus snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {["Web Development", "UI Design", "Modern Web Experiences"].map((item) => (
          <span
            key={item}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D]"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Contact cards with copy */}
      <div className="space-y-3 mb-8">
        {[
          { label: "Email", value: "shimahhshimuu@gmail.com", href:"https://mail.google.com/mail/?view=cm&to=shimahhshimuu@gmail.com", icon: <Mail size={18} />, desc: "Best for detailed inquiries" },
          { label: "LinkedIn", value: "linkedin.com/in/shima-shamsudheen2708", href: "https://linkedin.com/in/shima-shamsudheen2708", icon: <FaLinkedin size={18} />, desc: "Professional network and updates" },
          { label: "GitHub", value: "github.com/Shimuuh", href: "https://github.com/Shimuuh", icon: <FaGithub size={18} />, desc: "Code, repos and projects" },
        ].map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -3 }}
            className="group relative bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl p-5 hover:shadow-lg hover:border-[#8FAE9D] transition-all duration-300"
          >
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-xl"
              aria-label={`Contact via ${item.label}`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[#5C7A6B] dark:text-[#8FAE9D]">{item.icon}</span>
                <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">{item.label}</p>
              </div>
              <p className="font-medium pr-10 text-sm sm:text-base break-all">{item.value}</p>
              <p className="text-xs text-[#8B8680] dark:text-[#A8A39C] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.desc}
              </p>
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(item.value);
                setCopied(item.label);
                setTimeout(() => setCopied(null), 1500);
              }}
              aria-label={`Copy ${item.label} address`}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 hover:bg-[#E8EDE9] dark:hover:bg-[#8FAE9D]/10 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 focus-visible:opacity-100"
            >
              {copied === item.label
                ? <Check size={14} className="text-[#5C7A6B] dark:text-[#8FAE9D]" />
                : <Copy size={14} />
              }
            </button>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="/resume.pdf"
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 border border-[#E5E2DD] dark:border-[#2E302B] hover:border-[#5C7A6B] dark:hover:border-[#8FAE9D] px-5 py-3 rounded-xl text-sm font-medium transition-colors duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
      >
        <Download size={16} />
        Download Resume
      </motion.a>
    </motion.div>

    {/* RIGHT - FORM */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="backdrop-blur-xl bg-white/70 dark:bg-[#23241F]/70 border border-[#E5E2DD] dark:border-[#2E302B] rounded-[32px] p-6 sm:p-8"
>
  <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-6">Send a message</h3>

  <AnimatePresence mode="wait">
    {formStatus === "success" ? (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center text-center py-10"
      >
        <div className="w-14 h-14 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 flex items-center justify-center mb-4">
          <Check size={28} className="text-[#5C7A6B] dark:text-[#8FAE9D]" />
        </div>
        <h4 className="font-serif text-lg font-semibold mb-2">Message sent!</h4>
        <p className="text-sm text-[#8B8680] dark:text-[#A8A39C] mb-6">
          Thanks for reaching out. I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setFormStatus("idle");
            setErrors({});
          }}
          className="text-sm font-medium text-[#5C7A6B] dark:text-[#8FAE9D] hover:underline focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-md"
        >
          Send another message
        </button>
      </motion.div>
    ) : (
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        noValidate
        onSubmit={async (e) => {
          e.preventDefault();

          const newErrors: { name?: string; email?: string; message?: string } = {};
          if (!formData.name.trim()) newErrors.name = "Name is required";
          if (!formData.email.trim()) newErrors.email = "Email is required";
          else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
          newErrors.email = "Enter a valid email address";
          } else if (formData.email.includes("..") || formData.email.startsWith(".")) {
           newErrors.email = "Enter a valid email address";
          }
          if (!formData.message.trim()) newErrors.message = "Message is required";
          else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

          setErrors(newErrors);
          if (Object.keys(newErrors).length > 0) return;

          setFormStatus("loading");

          try {
            const { error } = await supabase
              .from("messages")
              .insert([{
                name: formData.name,
                email: formData.email,
                message: formData.message,
              }]);

            if (error) throw error;

            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
          } catch (err: unknown) {
            console.error("Submit error:", err);
            setFormStatus("idle");
            setErrors({ message: "Something went wrong. Please try again." });
          }
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5 text-[#2A2A28] dark:text-[#F2F0EC]">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full bg-transparent border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? "border-red-400 focus:ring-red-300"
                : "border-[#E5E2DD] dark:border-[#2E302B] focus:ring-[#8FAE9D]"
            }`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5 text-[#2A2A28] dark:text-[#F2F0EC]">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full bg-transparent border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-[#E5E2DD] dark:border-[#2E302B] focus:ring-[#8FAE9D]"
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5 text-[#2A2A28] dark:text-[#F2F0EC]">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-count"}
            maxLength={500}
            className={`w-full bg-transparent border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.message
                ? "border-red-400 focus:ring-red-300"
                : "border-[#E5E2DD] dark:border-[#2E302B] focus:ring-[#8FAE9D]"
            }`}
          />
          <div className="flex justify-between mt-1.5">
            {errors.message ? (
              <p id="message-error" role="alert" className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} />
                {errors.message}
              </p>
            ) : <span />}
            <p id="message-count" aria-live="polite" className="text-xs text-[#8B8680] dark:text-[#A8A39C]">
              {formData.message.length}/500
            </p>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ y: formStatus === "loading" ? 0 : -2 }}
          whileTap={{ scale: 0.97 }}
          disabled={formStatus === "loading"}
          className="bg-[#5C7A6B] hover:bg-[#4A6356] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 w-full flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2"
        >
          {formStatus === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>
    )}
  </AnimatePresence>
</motion.div>
  </div>

  {/* FINAL CTA */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="relative z-10 mt-16 bg-gradient-to-br from-[#5C7A6B] to-[#4A6356] dark:from-[#23241F] dark:to-[#1A1B19] border border-[#5C7A6B] dark:border-[#8FAE9D]/30 rounded-3xl p-8 md:p-10 text-center shadow-lg overflow-hidden"
  >
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8FAE9D]/30 rounded-full blur-2xl pointer-events-none" />
    <h3 className="font-serif text-white dark:text-[#F2F0EC] text-2xl sm:text-3xl font-semibold mb-3 relative z-10">
      Have an idea? Let's build something together.
    </h3>
    <p className="text-white/70 dark:text-[#A8A39C] text-sm mb-6 relative z-10">
      I'm always happy to hear about new projects and opportunities.
    </p>
    <motion.a
      href="https://mail.google.com/mail/?view=cm&to=shimahhshimuu@gmail.com"
      whileTap={{ scale: 0.97 }}
      className="relative z-10 inline-flex items-center gap-2 bg-white text-[#5C7A6B] dark:bg-[#8FAE9D] dark:text-[#1A1B19] px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
    >
      <Mail size={16} />
      Get in Touch
    </motion.a>
  </motion.div>
</section>

{/* FOOTER */}
<footer className="border-t border-[#E5E2DD] dark:border-[#2E302B] mt-10 relative overflow-hidden">

  {/* Unique topographic background */}
  <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.04] dark:opacity-[0.06]">
    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 400" aria-hidden="true">
      <path d="M0,80 Q200,40 400,80 T800,80" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M0,140 Q200,100 400,140 T800,140" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M0,200 Q200,160 400,200 T800,200" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M0,260 Q200,220 400,260 T800,260" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M0,320 Q200,280 400,320 T800,320" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M-50,110 Q150,70 350,110 T750,110" fill="none" stroke="#5C7A6B" strokeWidth="1" />
      <path d="M-50,170 Q150,130 350,170 T750,170" fill="none" stroke="#5C7A6B" strokeWidth="1" />
    </svg>
  </div>

  <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">

    <div className="grid md:grid-cols-3 gap-10 sm:gap-12 mb-12">

      {/* COL 1 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="inline-flex items-center gap-2 mb-3 cursor-default"
        >
          <span className="text-3xl font-extrabold">
            <span className="text-[#5C7A6B] dark:text-[#8FAE9D]">SH</span>.
          </span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#8FAE9D] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5C7A6B] dark:bg-[#8FAE9D]" />
          </span>
        </motion.div>

        <p className="text-[#8B8680] dark:text-[#A8A39C] leading-7 mb-4 text-sm">
          Building interfaces, learning continuously and turning ideas into
          meaningful experiences — one project at a time.
        </p>

        <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D] mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Open to Internships
        </span>

        {/* Current Focus card */}
        <div className="bg-white dark:bg-[#23241F] border border-[#E5E2DD] dark:border-[#2E302B] rounded-2xl p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C] mb-3">
            Current Focus
          </p>
          <div className="space-y-2">
            {[
              { icon: <Code size={13} />, text: "Learning Next.js" },
              { icon: <Palette size={13} />, text: "Exploring Design Systems" },
              { icon: <Rocket size={13} />, text: "Building New Projects" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-[#2A2A28] dark:text-[#F2F0EC]">
                <span className="text-[#5C7A6B] dark:text-[#8FAE9D] shrink-0">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* COL 2 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C]">
          Quick Links
        </h4>
        <nav aria-label="Footer navigation">
          <div className="space-y-3 text-sm">
            {[
              { label: "About", href: "#about" },
              { label: "Journey", href: "#journey" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 group hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-sm"
              >
                <ArrowRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                />
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.div>

      {/* COL 3 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.16 }}
      >
        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[#8B8680] dark:text-[#A8A39C]">
          Connect
        </h4>
        <div className="space-y-3 text-sm">
          <a
            href="https://linkedin.com/in/shima-shamsudheen2708"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-sm"
          >
            <FaLinkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Shimuuh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-sm"
          >
            <FaGithub size={15} />
            GitHub
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shimahhshimuu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-sm"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#5C7A6B] dark:hover:text-[#8FAE9D] transition-colors focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 rounded-sm"
          >
            <Download size={15} />
            Resume
          </a>
        </div>
      </motion.div>
    </div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-center text-sm text-[#8B8680] dark:text-[#A8A39C] mb-8 italic font-serif"
    >
      Designing thoughtful digital experiences.
    </motion.p>

    {/* Bottom Bar */}
    <div className="pt-6 border-t border-[#E5E2DD] dark:border-[#2E302B] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
      <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">
        © {new Date().getFullYear()} Shima Shamsudheen. All rights reserved.
      </p>
      <p className="text-xs text-[#8B8680] dark:text-[#A8A39C]">
        Built with Next.js, Tailwind CSS, Framer Motion and lots of curiosity.
      </p>
    </div>

    {/* Completion indicator */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center mt-8"
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full bg-[#E8EDE9] dark:bg-[#8FAE9D]/10 text-[#5C7A6B] dark:text-[#8FAE9D]">
        <Leaf size={12} />
        You've reached the end.
      </span>
    </motion.div>
  </div>

  {/* BACK TO TOP */}
  <motion.a
    href="#home"
    aria-label="Back to top of page"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="group fixed bottom-6 right-6 flex items-center gap-2 h-11 px-4 rounded-full bg-[#5C7A6B] hover:bg-[#4A6356] dark:bg-[#8FAE9D] dark:hover:bg-[#7A9C8B] text-white dark:text-[#1A1B19] shadow-lg shadow-[#5C7A6B]/25 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7A6B] focus-visible:outline-offset-2 z-50"
  >
    <ArrowUp size={18} />
    <span className="max-w-0 group-hover:max-w-[60px] overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300">
      Top
    </span>
  </motion.a>
</footer>
    </main>
    </div>
  );
}