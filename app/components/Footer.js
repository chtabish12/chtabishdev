"use client";

import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MTN
            </a>
            <p className="text-slate-500 text-sm mt-1">
              Muhammad Tabish Nadeem · Senior Software Engineer
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/chtabish12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="GitHub"
            >
            <GitHubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadtabish-nadeem-3b32a11a1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
            <LinkedInIcon size={16} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c5ffc757039c2e56"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Upwork"
            >
            <UpworkIcon size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-slate-600">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Muhammad Tabish Nadeem. Built with{" "}
            <Heart size={12} className="text-red-400 inline" /> using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
