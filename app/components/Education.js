"use client";

import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Software Engineering",
    institution: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    period: "2017 – 2021",
    location: "Lahore, Pakistan",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "🎓",
    highlights: [
      "Specialized in Software Engineering with focus on full-stack development",
      "Active member and Chairperson of IEEE student branch",
      "Participated in multiple hackathons and coding competitions",
      "Final year project in web application development",
    ],
  },
];

const certifications = [
  {
    title: "Agentic AI Development",
    issuer: "Professional Skill",
    icon: "🤖",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "React.js Expert",
    issuer: "5+ years production experience",
    icon: "⚛️",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "AWS Services",
    issuer: "Lambda, EC2, S3",
    icon: "☁️",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Google Analytics 4",
    issuer: "GTM & GA4 Implementation",
    icon: "📊",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Education &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Credentials
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <GraduationCap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Academic Education</h3>
          </div>

          {education.map((edu) => (
            <div
              key={edu.institution}
              className={`card-glass p-8 bg-gradient-to-br ${edu.color} hover:border-blue-500/20 transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{edu.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-blue-300 font-medium">{edu.field}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  {edu.location}
                </div>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-blue-400 mt-1 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills / Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Award className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Key Competencies</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className={`card-glass p-5 border ${cert.bg} hover:-translate-y-1 transition-all duration-300`}
              >
                <span className="text-2xl mb-3 block">{cert.icon}</span>
                <h4 className={`font-semibold mb-1 ${cert.color}`}>{cert.title}</h4>
                <p className="text-slate-500 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>

          {/* IEEE */}
          <div className="card-glass p-6 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="text-white font-bold mb-1">IEEE Chairperson</h4>
                <p className="text-cyan-400 text-sm">IEEE Student Branch · Aug 2020 – Aug 2021</p>
                <p className="text-slate-400 text-sm mt-2">
                  Led the IEEE student branch, organizing technical workshops, seminars, and
                  community events for engineering students in Lahore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
