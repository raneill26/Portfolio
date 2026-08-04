import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

interface Role {
  title: string;
  org: string;
  location: string;
  period: string;
  current: boolean;
  points: string[];
}

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly roles: Role[] = [
    {
      title: 'Founding Associate Consultant',
      org: 'Variable Sync',
      location: 'Durham, NC',
      period: '2026 — Present',
      current: true,
      points: [
        'Translate go-to-market strategy into system rules — crediting logic, quotas, and variable incentives configured in CaptivateIQ and other enterprise ICM platforms.',
        'Own ingestion, transformation, and validation of large transactional pipelines, maintaining backend schemas, user hierarchies, and territory alignments.',
        'Run end-to-end QA and unit testing in an agile SDLC, debugging calculation errors toward zero-defect, SOX-compliant commission deployments.',
        'Standardize internal build processes and author configuration guides so systems stay maintainable after handoff.'
      ]
    },
    {
      title: 'Data Science Intern',
      org: 'Wine to Water',
      location: 'Boone, NC (Remote)',
      period: '2026',
      current: false,
      points: [
        'Engineered a scalable BigQuery database with a custom AppSheet front-end and automated logic bots to eliminate user error.',
        'Built an automated Python ETL pipeline consolidating disparate source data into a central warehouse.',
        'Led stakeholder discovery interviews and translated team needs into technical requirements.'
      ]
    },
    {
      title: 'Executive Assistant',
      org: 'PlayNC',
      location: 'Durham, NC',
      period: '2022 — Present',
      current: true,
      points: [
        'Manage staff organizing weekly games that have raised over $10,000 for local charitable causes.'
      ]
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      label: 'Incentive Comp / SPM',
      items: [
        'CaptivateIQ',
        'Commission & bonus admin',
        'Payout auditing & controls',
        'SPIFF programs'
      ]
    },
    {
      label: 'Data & Analytics',
      items: [
        'SQL (BigQuery)',
        'Python',
        'R',
        'ETL automation',
        'Excel modeling',
        'Data validation'
      ]
    },
    {
      label: 'Engineering',
      items: [
        'TypeScript',
        'Angular',
        'FastAPI',
        'Swift / SwiftData',
        'Java',
        'MIPS & SystemVerilog',
        'Git'
      ]
    },
    {
      label: 'Delivery',
      items: [
        'Requirements gathering',
        'Stakeholder discovery',
        'UAT / testing',
        'Go-live support',
        'Documentation'
      ]
    }
  ];

  readonly coursework = [
    'Data Structures',
    'Discrete Structures',
    'Computer Organization',
    'Artificial Intelligence',
    'Foundations of Software Engineering'
  ];

  readonly activities = [
    'Pi Kappa Phi Fraternity — Philanthropy Board Member (2024–2026)',
    'Carolina Data Science Club (2024–2026)'
  ];
}
