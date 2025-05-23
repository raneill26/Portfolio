import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: {
    title: string;
    description: string;
    github: string;
    tags: string[];
    screenshots?: string[];
  };

  currentIndex = 0;

  nextScreenshot() {
    if (!this.project.screenshots) return;
    this.currentIndex = (this.currentIndex + 1) % this.project.screenshots.length;
  }

  prevScreenshot() {
    if (!this.project.screenshots) return;
    this.currentIndex =
      (this.currentIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
  }

  get currentScreenshot(): string | null {
    const screenshots = this.project.screenshots;
    return screenshots && screenshots.length > 0 ? screenshots[this.currentIndex] : null;
  }
}
