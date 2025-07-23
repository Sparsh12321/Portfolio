import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
 const titles = [
  "Full Stack Developer",
  "AR/VR Experience Creator",
  "AI-Driven Problem Solver",
  "Open Source Craftsman",
  "Immersive Web Architect",
  "Generative AI Enthusiast",
  "Creative Technologist",
  "Realtime App Engineer",
  "Code & Design Synthesizer",
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-foreground overflow-hidden"
    >
      {/* Content */}
      <div className="container max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start animate-fade-in-scale">
          <img
            src="/sparsh.jpg"
            alt="Sparsh Jain"
            className="rounded-full w-48 h-48 sm:w-100 sm:h-100 object-cover shadow-xl border-4 border-white/10"
          />
        </div>

        {/* Info */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 text-center lg:text-left space-y-6 animate-fade-in-scale">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">
            Sparsh Jain
          </h1>

          <h2 className="text-lg sm:text-xl font-medium text-foreground/80 h-6">
            <span key={currentTitle} className="inline-block animate-title-slide">
              {titles[currentTitle]}
            </span>
          </h2>

          <p className="text-foreground/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
           In a world where we can build anything, I choose to build things that matter—intelligent, immersive, and always purposeful.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background font-medium rounded-lg hover:scale-105 transition"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://drive.google.com/file/d/1Cpo4VT7v9lY2f9BFpvffTzaSxjTinMro/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg hover:bg-background/10 hover:scale-105 transition"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://github.com/Sparsh12321"
              target="_blank"
              className="hover:scale-110 hover:text-primary transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/Sup2308/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                className="w-5 h-5 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sparsh2308/"
              target="_blank"
              className="hover:scale-110 hover:text-primary transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jainsparsh231@gmail.com"
              className="hover:scale-110 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={() => scrollToSection("experience")}
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center text-foreground/50 hover:text-primary transition z-10"
      >
        <span className="text-sm">Scroll</span>
        <ArrowDown className="w-5 h-5 mt-1" />
      </button>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes title-slide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s ease-out both;
        }

        .animate-title-slide {
          animation: title-slide 3s ease-in-out;
        }
      `}</style>
    </section>
  );
};
