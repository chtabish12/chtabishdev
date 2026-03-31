import "./globals.css";

export const metadata = {
  title: "Muhammad Tabish Nadeem | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, Node.js, Next.js, and Agentic AI Development. Based in Birmingham, UK.",
  keywords: [
    "Muhammad Tabish Nadeem",
    "Senior Software Engineer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Agentic AI",
    "Full Stack Developer",
  ],
  authors: [{ name: "Muhammad Tabish Nadeem" }],
  openGraph: {
    title: "Muhammad Tabish Nadeem | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Node.js, Next.js, and Agentic AI Development.",
    type: "website",
    url: "https://chtabishdev.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Tabish Nadeem | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Node.js, Next.js, and Agentic AI Development.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
