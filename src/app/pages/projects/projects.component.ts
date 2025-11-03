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
      description: 'A Flappy Bird game written in MIPS, run on a NexysA7 board using custom-built single-cycle MIPS processor',
      github: 'https://github.com/raneill26/FlappyBird',
      tags: ['MIPS', 'SystemVerilog', 'Hardware', 'GameDev'],
      screenshots: [
        'assets/projectscreenshots/Bird1.png',
        'assets/projectscreenshots/Bird2.png',
      ]
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
      title: 'Ethics of AI',
      description: 'A two-part study analyzing bias in generative AI systems',
      github: 'https://github.com/raneill26/Ethics-of-AI',
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
    }
  ];
}
