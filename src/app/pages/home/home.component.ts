import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

interface Highlight {
  /** Short label shown in the left column, or an icon key for social rows. */
  value: string;
  label: string;
  icon?: 'github' | 'linkedin';
  href?: string;
}

interface Focus {
  title: string;
  body: string;
  stack: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /** Falls back to initials if the photo is missing. */
  readonly photoFailed = signal(false);

  readonly stack = [
    'TypeScript',
    'Python',
    'SQL / BigQuery',
    'Swift',
    'Angular',
    'FastAPI',
    'CaptivateIQ',
    'R'
  ];

  readonly highlights: Highlight[] = [
    { value: 'UNC', label: 'B.A. Computer Science, 2026' },
    {
      value: 'GitHub',
      label: 'github.com/raneill26',
      icon: 'github',
      href: 'https://github.com/raneill26'
    },
    {
      value: 'LinkedIn',
      label: 'linkedin.com/in/ryananeill',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/ryananeill'
    }
  ];

  readonly focus: Focus[] = [
    {
      title: 'Compensation systems',
      body: 'Translating go-to-market plans into crediting logic, quotas, and variable incentives inside CaptivateIQ — built to survive an audit.',
      stack: ['CaptivateIQ', 'SQL', 'UAT']
    },
    {
      title: 'Data pipelines',
      body: 'Python ETL and BigQuery schemas that consolidate messy transactional sources into something a business can actually trust.',
      stack: ['Python', 'BigQuery', 'ETL']
    },
    {
      title: 'Product engineering',
      body: 'Shipping real apps end to end — currently Drinko, a native iOS social drink tracker with a live BAC model.',
      stack: ['Swift', 'SwiftData', 'HealthKit']
    }
  ];

  onPhotoError(): void {
    this.photoFailed.set(true);
  }
}
