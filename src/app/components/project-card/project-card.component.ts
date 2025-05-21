import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: {
    title: string;
    description: string;
    github: string;
    tags: string[];
  };
}
