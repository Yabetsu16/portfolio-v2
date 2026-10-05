import type { PortfolioContent } from "../types/portfolio";

export const portfolioData: PortfolioContent = {
  personal: {
    name: "Jabez Joshua Bondoc",
    email: "it.jabez16@gmail.com",
    title: "Enterprise Software Engineer | Cloud Infrastructure & Automation",
    bio: "Turning complex systems into reliable software.",
    location: "Malabon City, Metro Manila, Philippines",
  },
  about: {
    headline:
      "Enterprise software engineering, cloud infrastructure, and practical automation.",
    heroSummary:
      "I develop software and automation tools that modernize business systems and save time.",
    summary:
      "Results-driven Enterprise Software Engineer with 4+ years of professional experience building, maintaining, and modernizing business-critical applications. Proficient across the Microsoft ecosystem, including C#, .NET, ASP.NET, MS SQL Server, and VB.NET, as well as low-level C. Experienced in developing desktop tools and Python automation to reduce operational work, modernize systems, and support reliable delivery. Cloud-certified in AWS, Azure, and Oracle Cloud Infrastructure, with additional credentials in AI engineering and AI-assisted development.",
    highlights: [
      "4+ years building, maintaining, and modernizing enterprise software",
      "Automated formatting and issue extraction across 500+ Excel files",
      "Developed Python utilities that reduced weeks of manual source-code triage",
      "Supported a project performance review score improvement from C/D to A",
    ],
  },
  education: [
    {
      id: "edu-1",
      school: "AMA Computer College, Caloocan City",
      degree: "Bachelor of Science in Information Technology",
      fieldOfStudy: "Web Development",
      startDate: "2015-05-01",
      endDate: "2019-05-31",
      awards: ["Dean's List Awardee (G.W.A: 1.60)"],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      company: "Fujitsu Philippines / WeServ Systems International Inc.",
      position: "Application System Engineer",
      duration: "January 2024 - June 2026",
      startDate: "2024-01-04",
      endDate: "2026-06-30",
      description:
        "Built automation and modernization tools for enterprise systems, partnering with offshore stakeholders to validate changes and support production releases.",
      highlights: [
        "Analyzed C repositories and resolved 64-bit runtime issues by updating data types and pointers.",
        "Built a C# WinForms tool that formatted 500+ Excel files and extracted rows with architectural issues.",
        "Ported tool logic to Python and created utilities to find duplicate lines across large code repositories.",
        "Led peer-review validation and collaborated with offshore stakeholders on production readiness.",
        "Contributed to team improvements that raised the project performance review score from C/D to A.",
      ],
      technologies: ["C", "C#", "WinForms", "Python", "Excel Automation"],
      location: "Remote / BGC, Taguig City, Metro Manila, NCR, Philippines",
    },
    {
      id: "exp-2",
      company: "Fujitsu Philippines / WeServ Systems International Inc.",
      position: "Application Systems Engineer / Trainee",
      duration: "January 2022 - January 2024",
      startDate: "2022-01-24",
      endDate: "2024-01-31",
      description:
        "Worked with a client team to modernize enterprise applications and verify system stability during framework and UI migrations.",
      highlights: [
        "Diagnosed compatibility issues across ASP.NET, VB.NET, and MS SQL Server applications.",
        "Replaced incompatible ComponentOne views with manually tested jQuery UI, JavaScript, and HTML5 views.",
        "Contributed to a C# WinForms tool that automatically generated system reports.",
        "Created Delphi user flowcharts and manual testing matrices for pre-deployment verification.",
        "Completed enterprise bootcamp modules in Java, JSP, Spring Boot, JUnit, and Agile methodologies.",
      ],
      technologies: [
        "ASP.NET",
        "VB.NET",
        "MS SQL Server",
        "jQuery UI",
        "JavaScript",
        "Delphi",
        "Java",
      ],
      location: "Remote / BGC, Taguig City, Metro Manila, NCR, Philippines",
    },
    {
      id: "exp-3",
      company: "Freelance",
      position: "Full-Stack Web Developer",
      duration: "June 2020 - December 2021",
      startDate: "2020-06-01",
      endDate: "2021-12-31",
      description:
        "Delivered full-stack websites for clients, managing product timelines, relational databases, responsive layouts, and deployments.",
      highlights: [
        "Built client websites with PHP, MySQL, HTML5, CSS3, and Bootstrap.",
        "Managed domain setup, code migrations, and server deployments on GoDaddy.",
        "Tracked structural code changes with Git.",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Git",
        "GoDaddy",
      ],
    },
  ],
  projects: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, TypeScript, and Material UI. Showcases my projects, skills, and experience in a clean and modern design. Deployed on GitHub Pages.",
      technologies: ["React", "TypeScript", "MUI"],
      links: {
        github: "https://github.com/Yabetsu16/portfolio-v2",
        live: "https://yabetsu16.github.io/portfolio-v2/",
      },
      featured: true,
      image: "/portfolio-v2/projects/portfolio.png",
      date: "2026-04-13",
    },
    {
      id: "ticketing-system",
      title: "Ticketing & Support Management Platform",
      description:
        "A dual-portal support platform with integrated real-time chat. Built relational data tables on Supabase with AI-assisted development and configured automated deployment to Vercel.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "MUI",
        "Supabase",
        "Vercel",
        "Cursor IDE",
      ],
      links: {
        github: "https://github.com/Yabetsu16/Ticketing-System",
        live: "https://ticketing-system-one-blond.vercel.app/login",
      },
      featured: true,
      image: "/portfolio-v2/projects/ticketing-system.png",
      date: "2026-02-21",
    },
    {
      id: "rrdn-trucking-service",
      title: "RRDN Trucking Services System",
      description:
        "Built an interactive quote price generator and internal content management dashboard to automate manual pricing calculations for vehicle moves.",
      technologies: [
        "PHP",
        "MySQL",
        "Vanilla JavaScript",
        "Bootstrap",
        "GoDaddy",
      ],
      links: {
        github: "https://github.com/Yabetsu16/RRDN-Trucking-Service-2",
        live: "",
      },
      featured: false,
      image: "/portfolio-v2/projects/rrdntruckingservices.png",
      date: "2021-06-20",
    },
    {
      id: "iwanttranseat",
      title: "iWantTranseat (Bus Booking)",
      description:
        "Collaborated on an Agile group project, implementing passenger seat tracking, PayPal transaction processing, and automated ticket layouts.",
      technologies: [
        "Java",
        "JSP/Servlet",
        "MySQL",
        "Bootstrap 5",
        "PayPal API",
      ],
      links: {
        github: "https://github.com/Yabetsu16/Ticketing",
        live: "",
      },
      image: "/portfolio-v2/projects/iwant_transeat.png",
      date: "2022",
    },
  ],
  social: [
    {
      platform: "github",
      url: "https://github.com/Yabetsu16",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/jabez-joshua-bondoc-489016156/",
      label: "LinkedIn",
    },
    {
      platform: "email",
      url: "mailto:it.jabez16@gmail.com",
      label: "Email",
    },
  ],
};
