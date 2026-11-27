import { accentGradient } from './theme';

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  title: string;
  description: string;
  tags: string[];
  /** Replace with a local logo path, e.g. /projects/zapi.svg. */
  logo?: string;
  mark: string;
  metrics: CaseStudyMetric[];
}

export const caseStudySettings = {
  heading: 'From MVPs to real products, Fixora Studio builds software fast without losing reliability or performance',
  cta: { label: 'Book a call', href: '#start' },
  colors: accentGradient,
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'zapi', name: 'Zapi', mark: 'ϟ',
    title: 'Data APIs, without the scraping headache.',
    description: 'We built Zapi as a developer-first API platform that makes external data easier to discover, access, and integrate. From structured datasets to scalable API infrastructure, everything is designed to help developers ship faster.',
    tags: ['API Platform', 'Developer Tools', 'Data Infrastructure'],
    metrics: [],
  },
];
