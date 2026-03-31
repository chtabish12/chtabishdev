"use client";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Companies", value: "5" },
  { label: "Technologies", value: "15+" },
];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Avatar + Stats */}
        <div className="flex flex-col items-center lg:items-start gap-8">
          {/* Avatar placeholder */}
          <div className="relative">
            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-500/20 flex items-center justify-center overflow-hidden">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500/40 to-cyan-500/40 flex items-center justify-center">
                <span className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  TN
                </span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              Senior SE
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card-glass p-4 text-center hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Digital
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I have worked as a Full Stack Developer on various projects, taking them from
              inception to deployment. During this journey, I have accumulated extensive
              experience in both front-end and back-end development.
            </p>
            <p>
              My proficiency in languages like HTML, CSS, and JavaScript, coupled with my
              knowledge of popular frameworks like React and Node, empowers me to craft
              applications that not only exhibit visual appeal but also excel in performance
              and efficiency.
            </p>
            <p>
              Currently at{" "}
              <span className="text-blue-400 font-medium">Mercor</span>, I work on advancing
              autonomous AI agents that can understand, navigate, and modify real-world
              codebases — solving complex SWE-bench-style tasks and building multi-step
              reasoning workflows.
            </p>
            <p>
              Database design and management are also within my expertise. I have utilized
              SQL databases like MySQL, and possess hands-on experience with Git, AWS,
              Docker, and Redux.
            </p>
          </div>

          {/* Quick info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Location", value: "Birmingham, UK" },
              { label: "Email", value: "tabishnadeen71@gmail.com" },
              { label: "Education", value: "BS Computer Software Eng." },
              { label: "University", value: "FAST-NUCES (2017–2021)" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="text-slate-300 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/muhammadtabish-nadeem-3b32a11a1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c5ffc757039c2e56"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Upwork Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
