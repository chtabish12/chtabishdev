"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "AFH Wealth Management",
    role: "Senior Frontend Developer",
    period: "Jun 2026 – Present",
    duration: "Newly joined",
    location: "Bromsgrove, England, United Kingdom",
    type: "Full-time",
    color: "from-indigo-500 to-violet-500",
    highlights: [
      "Building and maintaining customer-facing financial dashboards and advisor tools with React, Next.js and TypeScript",
      "Architecting reusable, accessible component libraries to drive a consistent design system across products",
      "Partnering with product, design and back-end teams to ship secure, compliant wealth-management features",
      "Optimising performance and Core Web Vitals across data-heavy financial interfaces",
      "Championing modern frontend best practices, code quality and automated testing",
    ],
    tags: ["React", "Next.js", "TypeScript", "Design Systems", "Accessibility", "Core Web Vitals"],
  },
  {
    company: "Mercor",
    role: "Senior Software Engineer",
    period: "Oct 2025 – May 2026",
    duration: "8 months",
    location: "United Kingdom",
    type: "Full-time",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Advanced autonomous AI agents that can understand, navigate, and modify real-world codebases",
      "Solved complex SWE-bench-style tasks involving debugging, feature implementation, and test fixes across diverse repositories",
      "Built and refined agent workflows for multi-step reasoning, code generation, and execution",
      "Worked with sandboxed environments, containerized setups, and version-controlled systems to simulate real developer scenarios",
      "Analyzed model failures and improved success rates through better prompting, tool orchestration, and evaluation strategies",
      "Contributed to scalable evaluation frameworks for benchmarking LLM coding capabilities",
    ],
    tags: ["Agentic AI", "LLM", "SWE-bench", "Docker", "Python"],
  },
  {
    company: "PakWheels.com",
    role: "Senior Software Engineer",
    period: "Jul 2023 – Apr 2025",
    duration: "1 year 10 months",
    location: "Lahore, Pakistan",
    type: "Full-time",
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Launched a tenant-based React application for international expansion, including ArabWheels in the Arab region (arabwheels.ae)",
      "Migrated the legacy React class-based architecture to modern functional components",
      "Transitioned state management from Flux to Redux for optimized performance",
      "Introduced custom hooks to modernize and replace deprecated libraries",
      "Deployed Google Tag Manager (GTM) for streamlined script management",
      "Upgraded from Universal Analytics to GA4 for compliance with analytics standards",
      "Enhanced page load speed and improved Core Web Vitals for better UX and SEO",
    ],
    tags: ["React", "Redux", "GTM", "GA4", "Core Web Vitals", "Multi-tenant"],
    link: "https://www.pakwheels.com/",
  },
  {
    company: "CacheFlow",
    role: "Frontend Developer",
    period: "Jun 2021 – Oct 2025",
    duration: "4 years 5 months",
    location: "United States (Remote)",
    type: "Full-time",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Developed custom and headless CRUD tables and forms with unique functionality",
      "Enhanced Admin Panel UI using modern design principles",
      "Integrated custom dropdowns with dynamic data rendering",
      "Updated Admin Panel UI to utilize MUI (Material-UI) for cohesive and responsive design",
      "Added a file uploader feature to enable seamless file uploads to the server",
    ],
    tags: ["React", "MUI", "TypeScript", "CRUD", "Admin Panel"],
  },
  {
    company: "Khaleef Technologies",
    role: "Software Engineer",
    period: "Oct 2021 – Jul 2023",
    duration: "1 year 10 months",
    location: "Lahore, Punjab, Pakistan",
    type: "Full-time",
    color: "from-orange-500 to-amber-500",
    highlights: [
      "Developed the Khaleef Admin Portal from scratch using the React MUI theme",
      "Built a Notification Logger Admin Panel to handle all notifications",
      "Created the Telenor Plus Website from the ground up using React JS and Node JS",
      "Developed landing pages with a dynamic landing page system using React JS and Node JS",
      "Implemented a dynamic extended headless CMS using Next JS and MySQL",
      "Built AWS Lambda tools to monitor billing and revenue across all regions with USD conversion",
      "Automated email notifications using Node JS and Nodemailer for weekly/monthly reports",
      "Configured Google Tag Manager (GTM) for event tracking on landing pages",
    ],
    tags: ["React", "Node.js", "Next.js", "MySQL", "AWS Lambda", "Nodemailer", "GTM"],
  },
  {
    company: "Expertflow",
    role: "Support Engineer",
    period: "Aug 2021 – Oct 2021",
    duration: "3 months",
    location: "Lahore, Punjab, Pakistan",
    type: "Full-time",
    color: "from-red-500 to-rose-500",
    highlights: [
      "Handover experience in the DevOps team",
      "Practiced Docker and deployed Hybrid Chats",
      "Deployed multiple containers and images stack using Docker services",
      "Deployed Hybrid Chat in HA and standalone mode",
    ],
    tags: ["Docker", "DevOps", "Linux"],
  },
  {
    company: "IEEE",
    role: "Chair Person",
    period: "Aug 2020 – Aug 2021",
    duration: "1 year 1 month",
    location: "Lahore District, Punjab, Pakistan",
    type: "Leadership",
    color: "from-cyan-500 to-blue-500",
    highlights: [
      "Led IEEE student branch as Chairperson",
      "Organized technical workshops, seminars, and events",
      "Mentored students in computing and engineering disciplines",
    ],
    tags: ["Leadership", "IEEE", "Community"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Career Journey
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          5+ years of building production-ready applications across AI, automotive, telecom,
          and more.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-10" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <Reveal delay={(index % 2) * 80} className="md:w-1/2">
                <div className="card-glass p-6 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period} · {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-400">
                      <span className="text-blue-400 mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                  {exp.highlights.length > 4 && (
                    <li className="text-xs text-slate-600">
                      +{exp.highlights.length - 4} more accomplishments
                    </li>
                  )}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Briefcase size={12} />
                    View Project →
                  </a>
                )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
