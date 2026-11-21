import { translator, type Locale } from '../../i18n';
import { Fragment, useEffect, useId, useRef, useState } from 'react';
import Grainient from '../Grainient';
import ProjectMetrics from './ProjectMetrics';
import type { CaseStudy } from '../../data/case-studies';
import './case-studies.css';

interface Props {
  lang?: Locale;
  projects: CaseStudy[];
  colors: string[];
  cta: { label: string; href: string };
}

export default function CaseStudyShowcase({ projects, colors, cta, lang = 'en' }: Props) {
  const t = translator(lang);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const markers = useRef<(HTMLSpanElement | null)[]>([]);
  const prefix = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const section = element.closest('section');
    const heading = section?.querySelector<HTMLElement>('.case-heading');
    const headingPin = section?.querySelector<HTMLElement>('.case-heading-pin');
    const stackMotion = window.matchMedia('(min-width:801px) and (prefers-reduced-motion:no-preference)');
    let stickyTop = 50;
    let frame = 0;
    let current = -1;
    const update = () => {
      frame = 0;
      let next = 0;
      markers.current.forEach((marker, index) => {
        if (marker && marker.getBoundingClientRect().top <= stickyTop + 2) next = index;
      });
      if (headingPin && section && heading) {
        const lastMarker = markers.current[markers.current.length - 1];
        // Release exactly when the final card reaches the stack's top.
        // Subtract the browser's own end-of-section sticky displacement.
        const release = stackMotion.matches && lastMarker
          ? Math.min(0, lastMarker.getBoundingClientRect().top - stickyTop)
          : 0;
        const nativeRelease = stackMotion.matches
          ? Math.min(0, section.getBoundingClientRect().bottom - heading.offsetHeight - 50)
          : 0;
        headingPin.style.transform = `translateY(${release - nativeRelease}px)`;
      }
      if (next !== current) { current = next; setActive(next); }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onResize = () => {
      stickyTop = window.innerWidth > 800 ? 50 + (heading?.offsetHeight ?? 0) : 50;
      section?.style.setProperty('--case-sticky-top', `${stickyTop}px`);
      const cards = element.querySelectorAll<HTMLElement>('.project-panel');
      const lastHeight = cards[cards.length - 1]?.offsetHeight ?? 0;
      // All pinned regions share the final card's lower boundary.
      section?.style.setProperty('--case-last-height', `${lastHeight}px`);
      schedule();
    };
    const resize = new ResizeObserver(onResize);
    if (heading) resize.observe(heading);
    element.querySelectorAll('.project-panel').forEach(card => resize.observe(card));
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      if (headingPin) headingPin.style.removeProperty('transform');
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
    };
  }, [projects.length]);

  return (
    <div className="case-showcase" ref={root}>
      <aside className="case-sidebar">
        <div className="case-sidebar-inner">
          <nav className="project-tabs" aria-label={t('Case studies')}>
            {projects.map((project, index) => (
              <a key={project.id} href={`#${prefix}-${project.id}`}
                onClick={event => {
                  const marker = markers.current[index];
                  if (!marker) return;
                  event.preventDefault();
                  event.stopPropagation();
                  const offset = Number.parseFloat(getComputedStyle(marker).scrollMarginTop) || 50;
                  window.scrollTo({ top: window.scrollY + marker.getBoundingClientRect().top - offset, behavior: 'instant' });
                }}
                aria-current={index === active ? 'true' : undefined}>
                <span className="tab-marker" aria-hidden="true" />{project.name}
              </a>
            ))}
          </nav>
          <a className="case-cta" href={cta.href}><span aria-hidden="true" />{cta.label}</a>
        </div>
      </aside>
      <div className="project-stack">
        {projects.map((project, index) => (
          <Fragment key={project.id}>
            <span className="project-anchor" id={`${prefix}-${project.id}`}
              ref={node => { markers.current[index] = node; }} aria-hidden="true" />
            <article className="project-panel" aria-label={project.name}>
        <div className="project-details">
          <p className="project-name">{project.name}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-tags" aria-label={t('Project categories')}>
            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <div className="project-visual">
          <div className="project-background" aria-hidden="true">{(index === active || index === active + 1) && <Grainient colors={colors} />}</div>
          <div className="project-logo">
            {project.logo
              ? <img src={project.logo} alt={`${project.name} logo`} width={76} height={76} />
              : <span aria-label={`${project.name} logo placeholder`} className={project.id === 'zapi' ? 'lightning' : ''}>{project.mark}</span>}
          </div>
        </div>
        <ProjectMetrics metrics={project.metrics} />
        <div className="case-divider" aria-hidden="true" />
            </article>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
