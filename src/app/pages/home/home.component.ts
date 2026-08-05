import { Component, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

interface Highlight {
  /** Primary line — org or platform name. */
  value: string;
  /** Secondary line — handle, URL, or detail. */
  label: string;
  icon: 'oldwell' | 'github' | 'linkedin';
  /** Present on rows that link out; omitted rows render as static info. */
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
  imports: [RouterLink, RevealDirective, NgTemplateOutlet],
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
    {
      value: 'UNC Chapel Hill',
      label: 'B.A. Computer Science, 2026',
      icon: 'oldwell'
    },
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
      body: 'Translating go-to-market plans into crediting logic, quotas, and variable incentives inside CaptivateIQ',
      stack: ['CaptivateIQ', 'SQL', 'UAT']
    },
    {
      title: 'Data pipelines',
      body: 'Python ETL and BigQuery schemas that consolidate messy transactional sources into something a business trusts',
      stack: ['Python', 'BigQuery', 'ETL']
    },
    {
      title: 'Product engineering',
      body: 'Development for Drinko, an iOS app designed to help users responsibly track their alcoholic drink intake',
      stack: ['Swift', 'SwiftData', 'HealthKit']
    }
  ];

  onPhotoError(): void {
    this.photoFailed.set(true);
  }
}
