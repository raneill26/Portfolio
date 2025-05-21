import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Flappy Bird in MIPS Assembly',
      description: 'A Flappy Bird clone written in MIPS for SPIM.',
      github: 'https://github.com/your-repo/flappy-mips',
      tags: ['MIPS', 'GameDev']
    },
    {
      title: 'LeetCode AI Practice Tool',
      description: 'AI-assisted problem solving interface for CS students.',
      github: 'https://github.com/your-repo/leetcode-ai',
      tags: ['Angular', 'FastAPI', 'SQL']
    }
  ];
}
