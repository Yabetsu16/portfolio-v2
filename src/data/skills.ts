import type { Skill, SkillCategory } from '../types/portfolio';

const skillGroups: { category: SkillCategory; skills: string[] }[] = [
  {
    category: 'Programming Languages',
    skills: [
      'C#',
      '.NET Framework',
      'ASP.NET',
      'C',
      'VB.NET',
      'PHP',
      'Python',
      'JavaScript (ES6)',
      'Java',
      'Flutter',
    ],
  },
  {
    category: 'Web & UI',
    skills: [
      'ReactJS',
      'TypeScript',
      'jQuery UI',
      'Material UI (MUI)',
      'HTML5',
      'CSS3',
      'Bootstrap 5',
    ],
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Azure', 'Oracle Cloud Infrastructure'],
  },
  {
    category: 'Databases',
    skills: [
      'MS SQL Server',
      'MySQL',
      'Supabase',
      'Relational Database Modeling',
    ],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub Desktop', 'VS Code', 'Visual Studio 2022'],
  },
  {
    category: 'AI & Automation',
    skills: [
      'Cursor IDE',
      'GitHub Copilot',
      'Prompt Engineering',
      'LLM Integration Contexts',
    ],
  },
  {
    category: 'Other',
    skills: [
      'System Modernization',
      'Regression Testing',
      'Waterfall Methodologies',
      'Vercel',
    ],
  },
];

const toIdPart = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const skills: Skill[] = skillGroups.flatMap(({ category, skills }) =>
  skills.map((name) => ({
    id: `skill-${toIdPart(category)}-${toIdPart(name)}`,
    name,
    category,
  })),
);
