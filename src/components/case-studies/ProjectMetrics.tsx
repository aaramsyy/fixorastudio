import type { CaseStudyMetric } from '../../data/case-studies';

export default function ProjectMetrics({ metrics }: { metrics: CaseStudyMetric[] }) {
  return (
    <dl className="project-metrics">
      {metrics.map(metric => (
        <div className="project-metric" key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
