import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ lang }: { lang: 'en' | 'id' }) {
  const target = lang === 'id' ? 'en' : 'id';
  const label = lang === 'id' ? 'Ganti ke English' : 'Switch to Bahasa Indonesia';
  return <a className="language-trigger" href={target === 'id' ? '/id/' : '/'} hrefLang={target}
    aria-label={`${lang.toUpperCase()} ? ${label}`} title={label}>
    <Globe size={16} aria-hidden="true" /><span>{lang.toUpperCase()}</span>
  </a>;
}
