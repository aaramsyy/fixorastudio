export interface Technology { name: string; icon: string; }
export interface Service { category: string; title: string; description: string; technologies: Technology[]; }
const tech = (name: string, icon: string): Technology => ({ name, icon: `/icons/${icon}.svg` });

export const services: Service[] = [
  {
    category: 'Mobile app', title: 'Native-feeling apps for iOS and Android',
    description: 'Ship mobile products with polished flows, clean performance, and production-ready foundations.',
    technologies: [tech('Apple', 'apple'), tech('Android', 'android'), tech('React', 'react')],
  },
  {
    category: 'Dashboard', title: 'Internal dashboards that teams actually use',
    description: 'Turn operations, reporting, and admin workflows into fast web dashboards built for daily work.',
    technologies: [tech('Next.js', 'nextjs'), tech('TypeScript', 'typescript'), tech('Tailwind CSS', 'tailwind')],
  },
  {
    category: 'AI automation', title: 'Automation for repetitive team workflows',
    description: 'Connect tools, trigger actions, summarize data, and automate handoffs across your business.',
    technologies: [tech('OpenAI', 'openai'), tech('Slack', 'slack'), tech('Claude', 'claude')],
  },
  {
    category: 'Web design', title: 'High-performance sites with sharp visual systems',
    description: 'Design and build landing pages, product sites, and marketing experiences that feel premium and load fast.',
    technologies: [tech('Figma', 'figma'), tech('Next.js', 'nextjs'), tech('Tailwind CSS', 'tailwind')],
  },
  {
    category: 'SaaS', title: 'MVP to usable product in focused sprints',
    description: 'Build authentication, SaaS flows, billing-ready surfaces, and product foundations.',
    technologies: [tech('Next.js', 'nextjs'), tech('TypeScript', 'typescript'), tech('PostgreSQL', 'postgresql')],
  },
];
