"use client";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material-UI", level: 90 },
      { name: "Redux", level: 88 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "Sequelize ORM", level: 78 },
      { name: "Nodemailer", level: 82 },
      { name: "AWS Lambda", level: 75 },
      { name: "Docker", level: 72 },
    ],
  },
  {
    title: "AI & Emerging",
    icon: "🤖",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    skills: [
      { name: "Agentic AI Development", level: 90 },
      { name: "Agentic Automation", level: 88 },
      { name: "LLM Integration", level: 85 },
      { name: "SWE-bench Tasks", level: 82 },
      { name: "Agent Workflows", level: 85 },
      { name: "Large Scale Dev", level: 88 },
      { name: "Code Generation", level: 83 },
      { name: "AI Evaluation", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/20",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "AWS", level: 75 },
      { name: "Google Tag Manager", level: 85 },
      { name: "Google Analytics 4", level: 82 },
      { name: "Vercel", level: 88 },
      { name: "Core Web Vitals", level: 80 },
      { name: "Docker", level: 72 },
      { name: "Jupyter Notebook", level: 70 },
    ],
  },
];

const topSkills = [
  "Agentic AI Development",
  "Agentic Automation",
  "Large Scale Development",
  "React.js Expert",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Full Stack Development",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Skills & Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Technical{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Over 5 years of hands-on experience building production-ready applications with
          modern technologies.
        </p>
      </div>

      {/* Top skills tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {topSkills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Skill categories */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`card-glass p-8 hover:border-opacity-40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${category.color}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-slate-300">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
