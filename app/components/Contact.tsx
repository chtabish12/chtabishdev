"use client";

import { Mail, Phone, MapPin, ExternalLink, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "./SocialIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tabishnadeen71@gmail.com",
    href: "mailto:tabishnadeen71@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7884 526885",
    href: "tel:+447884526885",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "7 Kingscourt Plaza, Birmingham B12 0RT, UK",
    href: "https://maps.google.com?q=Birmingham+B12+0RT",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
];

const socialLinks = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/chtabish12",
    username: "@chtabish12",
    color: "hover:text-white",
    bg: "hover:bg-white/10",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadtabish-nadeem-3b32a11a1",
    username: "muhammadtabish-nadeem",
    color: "hover:text-blue-300",
    bg: "hover:bg-blue-500/10",
  },
  {
    icon: UpworkIcon,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01c5ffc757039c2e56",
    username: "Muhammad Tabish Nadeem",
    color: "hover:text-green-300",
    bg: "hover:bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I&apos;d love to hear from
          you. Let&apos;s build something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Contact info */}
        <div className="space-y-6">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`card-glass p-5 flex items-center gap-4 border ${item.bg} hover:-translate-y-0.5 transition-all duration-300 group block`}
            >
              <div
                className={`p-3 rounded-xl border ${item.bg} ${item.color}`}
              >
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                <p className={`font-medium ${item.color} group-hover:brightness-125 transition-all text-sm`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}

          {/* Social Links */}
          <div className="card-glass p-6">
            <h3 className="text-white font-semibold mb-4">Find Me Online</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl border border-white/5 text-slate-400 ${social.color} ${social.bg} transition-all duration-200`}
                >
                  <social.icon size={18} />
                  <div>
                    <span className="text-xs text-slate-500">{social.label}</span>
                    <p className="text-sm font-medium">{social.username}</p>
                  </div>
                  <ExternalLink size={14} className="ml-auto opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Message form */}
        <div className="card-glass p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <Send className="text-blue-400" size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
          </div>

          <form
            action={`mailto:tabishnadeen71@gmail.com`}
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project collaboration, job opportunity..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
