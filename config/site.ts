export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ayush",
  description: "I'm a software engineer with a passion for building scalable and efficient systems.",
  links: {
    caldotcom: "https://cal.com/ayush-kumar-anand/30min",
    github: "https://github.com/ayushk-1801",
    twitter: "https://x.com/ayushk1801",
    linkedin: "https://linkedin.com/in/ayush-kumar-anand",
    email: "ayushkumar.swe@gmail.com",
    resume: "/resume.pdf"
  },
  techStack: [
    { name: "javascript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "typescript", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg" },
    { name: "rust", src: "/rust.svg" },
    { name: "react", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "nextjs", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "html5", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "css3", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "tailwindcss", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "nodejs", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "express", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
    { name: "git", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "github", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { name: "zustand", src: "/zustand.svg" },
    { name: "mongodb", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
    { name: "postgresql", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    { name: "drizzle", src: "/drizzle.svg" },
    { name: "prisma", src: "https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.svg" },
    { name: "better-auth", src: "/better-auth.svg" },
    { name: "docker", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "supabase", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/supabase/supabase-original.svg" },
    { name: "redis", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/redis/redis-original.svg"},
    { name: "electron", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg" },
    { name: "python", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "c", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "cpp", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  ],
  experiences: [
    {
      company: "AIPHI AI",
      logo: "/aiphiai.svg",
      position: "Full Stack AI Engineer Intern",
      from: "May 2025",
      to: "Present",
      description: "Led development of core features for the company's flagship product. Worked with React, TypeScript, and Node.js to implement scalable solutions. Mentored junior developers and contributed to architectural decisions.",
      website: "https://aiphi.ai/"
    },
    {
      company: "Audient",
      logo: "/audient.svg",
      position: "Full Stack Developer",
      from: "Jan 2025",
      to: "Apr 2025",
      description: "Developed and maintained web applications using React, Next.js, and PostgreSQL. Implemented RESTful APIs and collaborated with UX/UI designers to create intuitive user interfaces.",
      website: "https://audient.in/"
    }
  ],
  projects: [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and TailwindCSS to showcase my projects and experience.",
      date: "June 2023",
      techStack: [
        { name: "nextjs", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
        { name: "typescript", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg" },
        { name: "tailwindcss", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/tailwindcss/tailwindcss-original.svg" },
      ],
      imageLink: "/projects/portfolio.png",
      liveLink: "https://ayushk.dev",
      githubLink: "https://github.com/ayushk-1801/portfolio",
    },
    {
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment processing.",
      date: "March 2023",
      techStack: [
        { name: "react", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "nodejs", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "mongodb", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "express", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      ],
      imageLink: "/projects/ecommerce.png",
      liveLink: "https://shopify-clone.vercel.app",
      githubLink: "https://github.com/ayushk-1801/ecommerce-platform",
      videoLink: "https://youtube.com/watch?v=ecommerce-demo",
    },
    {
      name: "Task Management App",
      description: "A productivity application for managing tasks with features like drag-and-drop, priority setting, and deadline reminders.",
      date: "November 2022",
      techStack: [
        { name: "typescript", src: "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/typescript/typescript-original.svg" },
        { name: "react", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "postgresql", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
        { name: "prisma", src: "https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.svg" },
      ],
      imageLink: "/projects/taskapp.png",
      githubLink: "https://github.com/ayushk-1801/task-manager",
    }
  ],
};
