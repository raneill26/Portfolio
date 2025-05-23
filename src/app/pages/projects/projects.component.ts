import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Flappy Bird in MIPS Assembly',
      description: 'A Flappy Bird clone written in MIPS for SPIM',
      github: '#TODO',
      tags: ['MIPS', 'SystemVerilog', 'GameDev']
    },
    {
      title: 'AInterviewer',
      description: 'AI-assisted problem solving interface for CS students',
      github: 'https://github.com/raneill26/AInterview',
      tags: ['Angular', 'FastAPI', 'SQL', 'Team Project'],
      screenshots: [
        'assets/projectscreenshots/AI1studentmainview.png',
        'assets/projectscreenshots/AI2selectedquestion.png',
        'assets/projectscreenshots/AI3answered.png',
        'assets/projectscreenshots/AI4asked.png',
        'assets/projectscreenshots/AI5adminview.png',
        'assets/projectscreenshots/AI6create.png',
        'assets/projectscreenshots/AI7edit.png',
      ]
    },
    {
      title: 'Linux Shell',
      description: 'To do',
      github: '#TODO',
      tags: ['Java', 'Linux', 'Shell']
    },
    {
      title: 'Ethics of AI',
      description: 'Research',
      github: '#TODO',
      tags: ['Research', 'AI', 'Team Project']
    },
    {
      title: 'Akari in Java',
      description: 'JavaFX-based implementation of the game Akari',
      github: 'https://github.com/raneill26/Akari',
      tags:['Java', 'GameDev'],
      screenshots: [
        'assets/projectscreenshots/Akari2.png',
        'assets/projectscreenshots/Akari3.png',
        'assets/projectscreenshots/Akari1.png'
      ]
    },
    {
      title: 'IsItTargeting.com',
      description: 'Website',
      github: '#TODO',
      tags: ['Angular', 'TypeScript', 'Frontend', 'Backend']
    }
  ];
}
