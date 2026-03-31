"use client";

import { ExternalLink, Globe } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

const projects = [
  {
    title: "ArabWheels — International Automotive Platform",
    description:
      "Launched a tenant-based React application for international expansion. Brought the PakWheels platform to the Arab region, handling multi-tenant architecture, RTL support, and regional customization.",
    image: "🚗",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    tags: ["React", "Redux", "Multi-tenant", "RTL", "GTM", "GA4"],
    links: [
      { label: "Live Site", url: "https://www.arabwheels.ae/", icon: "globe" },
    ],
    category: "Professional",
    highlight: true,
  },
  {
    title: "Khaleef Admin Portal",
    description:
      "Developed the Khaleef Admin Portal from scratch using React MUI theme. Full-featured admin panel with CRUD operations, data management, and real-time analytics.",
    image: "📊",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
    tags: ["React", "MUI", "Node.js", "MySQL", "REST API"],
    links: [
      { label: "View Project", url: "http://admin.knectapi.com:4000/", icon: "globe" },
    ],
    category: "Professional",
  },
  {
    title: "Notification Logger Admin Panel",
    description:
      "Built a comprehensive notification management system for Khaleef Technologies. Handles all system notifications with logging, filtering, and analytics.",
    image: "🔔",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/20",
    tags: ["React", "Node.js", "MySQL", "Real-time"],
    links: [
      { label: "View Project", url: "http://admin.knectapi.com:3002/", icon: "globe" },
    ],
    category: "Professional",
  },
  {
    title: "Telenor Plus Website",
    description:
      "Created the Telenor Plus website from the ground up for Pakistan's largest telecom operator. Built with React JS and Node JS, featuring promotional content and campaign management.",
    image: "📱",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    tags: ["React.js", "Node.js", "GTM", "Campaign"],
    links: [
      { label: "View Site", url: "http://telenorplus.com.pk", icon: "globe" },
    ],
    category: "Professional",
  },
  {
    title: "Headless CMS with Next.js & MySQL",
    description:
      "Implemented a dynamic extended headless CMS using Next JS and MySQL to manage content effectively for multiple landing pages and campaigns.",
    image: "🗄️",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    tags: ["Next.js", "MySQL", "CMS", "REST API", "Node.js"],
    links: [],
    category: "Professional",
  },
  {
    title: "Dynamic Landing Page Generator",
    description:
      "Developed landing pages for product campaigns with a dynamic landing page system using React JS and Node JS to generate pages dynamically.",
    image: "🚀",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
    tags: ["React.js", "Node.js", "Dynamic Routing", "GTM"],
    links: [
      { label: "View Project", url: "http://cg.knectapi.com:8003/", icon: "globe" },
    ],
    category: "Professional",
  },
  {
    title: "iTunes Music App — Next.js",
    description:
      "An iTunes Search API integration project with pagination, error handling, and a modern tech stack. Features search, filtering, and music playback integration.",
    image: "🎵",
    color: "from-rose-500/20 to-red-500/20",
    border: "border-rose-500/20",
    tags: ["Next.js", "iTunes API", "TypeScript", "Pagination"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/chtabish12/itunes-music-app-next",
        icon: "github",
      },
    ],
    category: "Open Source",
  },
  {
    title: "AWS Billing Monitor — Lambda",
    description:
      "Built AWS Lambda tools to monitor billing and revenue across all regions, with automatic conversion to USD. Automated email notifications using Nodemailer for partners.",
    image: "☁️",
    color: "from-amber-500/20 to-yellow-500/20",
    border: "border-amber-500/20",
    tags: ["AWS Lambda", "Node.js", "Nodemailer", "Automation"],
    links: [],
    category: "Professional",
  },
  {
    title: "Node.js CRUD REST APIs",
    description:
      "NodeJs CRUD REST APIs starter project with Express, Sequelize ORM, and MySQL. A well-structured starting project for backend development with best practices.",
    image: "⚙️",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    tags: ["Node.js", "Express", "MySQL", "Sequelize", "REST API"],
    links: [
      { label: "GitHub", url: "https://github.com/chtabish12/nodejs", icon: "github" },
    ],
    category: "Open Source",
  },
  {
    title: "Knect Admin Panel",
    description:
      "Admin panel project built for the Knect API ecosystem, featuring dynamic data tables, form management, and API integration.",
    image: "🛠️",
    color: "from-slate-500/20 to-gray-500/20",
    border: "border-slate-500/20",
    tags: ["JavaScript", "React", "Admin Panel", "REST API"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/chtabish12/admin-panel-knect",
        icon: "github",
      },
    ],
    category: "Open Source",
  },
  {
    title: "Auto Email Scripts",
    description:
      "Python-based automation scripts for sending automated email reports and notifications. Used in production for delivering weekly and monthly reports.",
    image: "📧",
    color: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-500/20",
    tags: ["Python", "Automation", "Email", "SMTP"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/chtabish12/auto-email-scripts",
        icon: "github",
      },
    ],
    category: "Open Source",
  },
  {
    title: "Smash Cloud Assignment",
    description:
      "Cloud computing assignment demonstrating JavaScript cloud integration patterns, API design, and serverless architecture concepts.",
    image: "🌩️",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/20",
    tags: ["JavaScript", "Cloud", "Serverless"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/chtabish12/smash-cloud-assignment",
        icon: "github",
      },
    ],
    category: "Open Source",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A collection of production deployments, professional projects, and open-source
          contributions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`card-glass p-6 hover:border-opacity-40 transition-all duration-300 hover:-translate-y-2 group flex flex-col bg-gradient-to-br ${project.color} ${
              project.highlight ? "lg:col-span-2 md:col-span-2" : ""
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.image}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                  {project.category}
                </span>
              </div>
              <div className="flex gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label={link.label}
                  >
                    {link.icon === "github" ? (
                      <GitHubIcon size={14} />
                    ) : link.icon === "globe" ? (
                      <Globe size={14} />
                    ) : (
                      <ExternalLink size={14} />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/chtabish12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
        >
          <GitHubIcon size={18} />
          View All Projects on GitHub
          <ExternalLink size={14} className="text-slate-400" />
        </a>
      </div>
    </section>
  );
}
