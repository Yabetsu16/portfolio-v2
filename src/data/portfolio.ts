import type { PortfolioContent } from '../types/portfolio';

export const portfolioData: PortfolioContent = {
  personal: {
    name: 'Jabez Joshua Bondoc',
    email: 'it.jabez16@gmail.com',
    title: 'Application System Engineer / Software Engineer',
    bio: 'Driving Innovation with AI & Emerging Technologies',
    location: 'Malabon City, Metro Manila, NCR, Philippines',
  },
  about: {
    headline: 'Passionate developer leveraging AI to create innovative solutions.',
    summary:
      'Highly motivated and results-driven Software Engineer with over 4 years of experience in designing, developing, and deploying efficient software solutions. Skilled in debugging and troubleshooting code to ensure optimal performance and functionality. Proficient in multiple programming languages and frameworks, including C#, ASP.NET, and ReactJS. Leveraging AI tools and technologies to streamline development processes, enhance productivity, and drive innovation. Certified in Oracle Cloud Infrastructure AI Foundations Associate, AWS Cloud Practitioner and Azure Fundamentals. Dedicated to continuous learning and staying up-to-date with emerging technologies to drive innovation and deliver exceptional results.',
    highlights: [
      '4+ years of professional development experience',
      'Specialized in C, C#, Python and other languages',
      'Knowledgeable in AI tools and technologies for software development',
      'Dedicated to continuous learning and professional growth',
    ],
  },
  experiences: [
    {
      id: 'exp-1',
      company: 'Fujitsu Philippines / WeServ Systems International Inc.',
      position: 'Application System Engineer',
      duration: '2024 - Present',
      startDate: '2024-01-04',
      endDate: 'Present',
      description: 'Joined to a project with a Banking client to maintain their system.',
      highlights: [
        'Obtained OCI AI Foundations Associate Certificate',
        'Created automation scripts using Python to automate repetitive tasks.',
        'Created an automation tool using C# WinForms to help in identifying and resolving system incompatibilities.',
        'Identified and resolved system incompatibilities in C language due to upgrade from 32-bit to 64-bit architecture.',
        'Conducted manual testing of the VBA Automation Tool.',
        'Obtained AWS Cloud Practitioner Certificate',
      ],
      technologies: ['C', 'C#', 'Python'],
      location: 'Remote / BGC, Taguig City, Metro Manila, NCR, Philippines',
    },
    {
      id: 'exp-2',
      company: 'Fujitsu Philippines / WeServ Systems International Inc.',
      position: 'Application System Engineer/Trainee',
      duration: '2022 - 2023',
      startDate: '2022-01-24',
      endDate: '2023-12-31',
      description: 'Joined to a bootcamp training for 6 months and then assigned to a project with a Manufacturing for Housing and Building client to maintain their system.',
      highlights: [
        'Conducted manual testing of the modified UI.',
        'Enhanced the UI by replacing ComponentOne UI with jQuery UI due to incompatibility with 64-bit architecture.',
        'Checked for system incompatibilities in ASP.Net and VB.Net with SQL Server during the upgrade from 32-bit to 64-bit architecture.',
        'Created UI specifications and flowchart documentation for their system using Delphi Language.',
        'Obtained Azure Fundamentals Certificate',
        'Participated in bootcamp training, gaining proficiency in Java, Spring Boot, JUnit, and MySQL using Eclipse and MySQL Workbench. Training also included Business Etiquette, Email Etiquette, and an introduction to Japanese Culture and Business practices.',
      ],
      technologies: ['Delphi', 'ASP.Net', 'VB.Net', 'SQL Server', 'jQuery UI'],
      location: 'Remote / BGC, Taguig City, Metro Manila, NCR, Philippines',
    },
  ],
  skills: [
       // Cloud
      { id: 'skill-1', name: 'AWS', category: 'Cloud', proficiency: 'Beginner' },
      { id: 'skill-2', name: 'Azure', category: 'Cloud', proficiency: 'Beginner' },
      { id: 'skill-3', name: 'Oracle', category: 'Cloud', proficiency: 'Beginner' },
      // Languages
      { id: 'skill-4', name: 'English', category: 'Languages', proficiency: 'Expert' },
      { id: 'skill-5', name: 'Filipino', category: 'Languages', proficiency: 'Expert' },
      // Programming Languages
      { id: 'skill-13', name: 'React', category: 'Programming Languages', proficiency: 'Beginner' },
      { id: 'skill-14', name: 'TypeScript', category: 'Programming Languages', proficiency: 'Beginner' },
      { id: 'skill-15', name: 'JavaScript', category: 'Programming Languages', proficiency: 'Intermediate' },
      { id: 'skill-16', name: 'Python', category: 'Programming Languages', proficiency: 'Intermediate' },
      { id: 'skill-17', name: 'C#', category: 'Programming Languages', proficiency: 'Expert' },
      { id: 'skill-18', name: 'C', category: 'Programming Languages', proficiency: 'Intermediate' },
      { id: 'skill-19', name: 'ASP.NET', category: 'Programming Languages', proficiency: 'Intermediate' },
      { id: 'skill-20', name: 'VB.NET', category: 'Programming Languages', proficiency: 'Intermediate' },
      // Tools
      { id: 'skill-6', name: 'Git', category: 'Tools', proficiency: 'Intermediate' },
      { id: 'skill-7', name: 'VS Code', category: 'Tools', proficiency: 'Intermediate' },
      { id: 'skill-8', name: 'Visual Studio', category: 'Tools', proficiency: 'Intermediate' },
      { id: 'skill-9', name: 'MySQL Workbench', category: 'Tools', proficiency: 'Intermediate' },
      { id: 'skill-10', name: 'XAMPP', category: 'Tools', proficiency: 'Intermediate' },
      { id: 'skill-11', name: 'Eclipse', category: 'Tools', proficiency: 'Beginner' },
      { id: 'skill-12', name: 'Unity', category: 'Tools', proficiency: 'Beginner' },

  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Portfolio Website',
      description: 'Portfolio Website (Personal-Project)',
      longDescription:
        'A personal portfolio website built with React and TypeScript, showcasing projects, skills, and experience. Features a clean design, responsive layout, and smooth animations to create an engaging user experience.',
      technologies: ['React', 'TypeScript', 'MUI'],
      links: {
        github: 'https://github.com/yourusername/ecommerce-platform',
        live: 'https://ecommerce-demo.com',
      },
      featured: true,
      date: '2023-06-15',
    },
    {
      id: 'proj-2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates.',
      longDescription:
        'A real-time task management application enabling teams to collaborate efficiently. Includes features like task assignment, progress tracking, file sharing, and notifications.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      links: {
        github: 'https://github.com/yourusername/task-app',
        live: 'https://tasks-app.com',
      },
      featured: true,
      date: '2023-03-20',
    },
    {
      id: 'proj-3',
      title: 'Weather Dashboard',
      description: 'Real-time weather application with multiple locations and forecasting.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/yourusername/weather-dashboard',
        live: 'https://weather-dashboard.com',
      },
      date: '2022-11-10',
    },
    {
      id: 'proj-4',
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics and insights.',
      longDescription:
        'A comprehensive analytics platform that aggregates social media data and provides actionable insights. Includes charts, trends analysis, and automated reporting.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com/yourusername/social-analytics',
        live: 'https://social-analytics.com',
      },
      featured: true,
      date: '2022-08-05',
    },
    {
      id: 'proj-5',
      title: 'Blog Platform',
      description: 'Content management system with markdown support and SEO optimization.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      links: {
        github: 'https://github.com/yourusername/blog-platform',
      },
      date: '2022-05-18',
    },
    {
      id: 'proj-6',
      title: 'Fitness Tracker',
      description: 'Mobile-friendly fitness tracking application with progress visualization.',
      longDescription:
        'A comprehensive fitness tracking app allowing users to log workouts, track calories, set goals, and monitor progress over time with interactive charts and analytics.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Chart.js'],
      links: {
        github: 'https://github.com/yourusername/fitness-tracker',
        live: 'https://fitness-tracker.com',
      },
      date: '2022-02-14',
    },
  ],
  certificates: [
    {
      id: 'cert-1',
      title: 'Advanced React Development',
      issuer: 'Udemy',
      date: '2023-06-15',
      credentialUrl: 'https://udemy.com/certificate/advanced-react',
      credentialId: 'UC-abc123def456',
      skills: ['React', 'TypeScript', 'Advanced Patterns'],
    },
    {
      id: 'cert-2',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-03-20',
      credentialUrl: 'https://aws.amazon.com/credentials/certification',
      credentialId: 'AWS-12345678',
      skills: ['AWS', 'Cloud Architecture', 'Infrastructure'],
    },
    {
      id: 'cert-3',
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2022-12-10',
      credentialUrl: 'https://coursera.org/verify/specialization/fullstack',
      credentialId: 'COURSERA-xyz789',
      skills: ['MERN Stack', 'Database Design', 'API Development'],
    },
    {
      id: 'cert-4',
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2022-08-05',
      credentialUrl: 'https://freecodecamp.org/certificates/javascript',
      skills: ['Algorithms', 'Data Structures', 'JavaScript'],
    },
    {
      id: 'cert-5',
      title: 'Docker & Kubernetes Mastery',
      issuer: 'Udemy',
      date: '2022-05-18',
      credentialUrl: 'https://udemy.com/certificate/docker-kubernetes',
      credentialId: 'UC-container123',
      skills: ['Docker', 'Kubernetes', 'Container Orchestration'],
    },
    {
      id: 'cert-6',
      title: 'GraphQL Essentials',
      issuer: 'Pluralsight',
      date: '2022-02-14',
      credentialUrl: 'https://pluralsight.com/certificates/graphql',
      skills: ['GraphQL', 'API Design', 'Backend Development'],
    },
  ],
  social: [
    {
      platform: 'github',
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn',
    },
    {
      platform: 'email',
      url: 'mailto:your.email@example.com',
      label: 'Email',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/yourhandle',
      label: 'Twitter',
    },
  ],
};
