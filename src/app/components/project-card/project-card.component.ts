import { Component, Input, computed, signal } from '@angular/core';

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  github?: string;
  link?: string;
  status?: string;
  year?: string;
  featured?: boolean;
  tags: string[];
  highlights?: string[];
  screenshots?: string[];
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  readonly index = signal(0);

  /** Screenshots that failed to load are dropped so the carousel never shows a broken image. */
  private readonly broken = signal<Set<string>>(new Set());

  readonly shots = computed(() => {
    const all = this.project?.screenshots ?? [];
    const bad = this.broken();
    return all.filter((src) => !bad.has(src));
  });

  readonly hasGallery = computed(() => this.shots().length > 0);
  readonly hasMultiple = computed(() => this.shots().length > 1);

  readonly current = computed(() => {
    const list = this.shots();
    if (list.length === 0) return null;
    return list[this.index() % list.length];
  });

  next(): void {
    const len = this.shots().length;
    if (len < 2) return;
    this.index.update((i) => (i + 1) % len);
  }

  prev(): void {
    const len = this.shots().length;
    if (len < 2) return;
    this.index.update((i) => (i - 1 + len) % len);
  }

  goTo(i: number): void {
    this.index.set(i);
  }

  onImageError(src: string): void {
    this.broken.update((set) => new Set(set).add(src));
    this.index.set(0);
  }
}
