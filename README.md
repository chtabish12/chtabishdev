# Muhammad Tabish Nadeem — Portfolio

A modern, responsive personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: [lucide-react](https://lucide.dev/) + custom SVG icons
- **Fonts**: System fonts (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, etc.)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   ├── Hero.tsx         # Landing section with CTA & social links
│   ├── About.tsx        # Professional summary & stats
│   ├── Skills.tsx       # Tech stack with progress bars
│   ├── Experience.tsx   # Work history timeline
│   ├── Projects.tsx     # Portfolio projects grid
│   ├── Education.tsx    # Academic background
│   ├── Contact.tsx      # Contact form & info
│   ├── Footer.tsx       # Site footer
│   └── SocialIcons.tsx  # Custom SVG icons (GitHub, LinkedIn, Upwork)
├── globals.css
├── layout.tsx
└── page.tsx
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com/). Simply connect the repository and deploy.

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.
