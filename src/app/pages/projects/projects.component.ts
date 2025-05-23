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
      title: 'Akari in Java',
      description: 'JavaFX-based implementation of the game Akari',
      github: 'https://github.com/raneill26/Akari',
      tags:['Java', 'GameDev']
    },
    {
      title: 'Flappy Bird in MIPS Assembly',
      description: 'A Flappy Bird clone written in MIPS for SPIM',
      github: '#TODO',
      tags: ['MIPS', 'GameDev']
    },
    {
      title: 'AInterviewer',
      description: 'AI-assisted problem solving interface for CS students',
      github: '#TODO',
      tags: ['Angular', 'FastAPI', 'SQL', 'Team Project']
    }
  ];
}
