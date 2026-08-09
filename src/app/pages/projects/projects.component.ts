import { Component } from '@angular/core';
import { ProjectCardComponent, Project } from '../../components/project-card/project-card.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Drinko',
      subtitle: 'Native iOS · in active development',
      description:
        'A social drink tracker for iOS. Drinko offers a real-time blood alcohol estimator along with a drink tracker to monitor your night out. Additionally group planning, running tallies, and a game tournament bracket engine are available for friends to interact with eachother.',
      status: 'In development',
      featured: true,
      year: '2026',
      tags: ['Swift', 'SwiftData', 'HealthKit', 'StoreKit', 'iOS'],
      highlights: [
        'Real-time BAC estimation using the Widmark formula, calculated by HealthKit biometrics and a live drink log.',
        'Tournament bracket engine for group games. Seeding, progression, and results persisted with SwiftData.',
        'Offline-first local persistence layer so the app stays accurate without a network connection.',
        'Subscription tier built on StoreKit, with an entitlement model gating premium tracking features.'
      ],
      // FUTURE SCREENSHOTS
      screenshots: [
        'assets/projectscreenshots/Drinko1.jpg',
        'assets/projectscreenshots/Drinko2.jpg',
        'assets/projectscreenshots/Drinko3.jpg',
        'assets/projectscreenshots/Drinko4.jpg',
        'assets/projectscreenshots/Drinko5.jpg',
        'assets/projectscreenshots/Drinko6.jpg'
      ]
    },
    {
      title: 'AInterviewer',
      subtitle: 'Full-stack web platform',
      description:
        'An AI-assisted technical interview trainer built with a team and integrated into the UNC Computer Science department site. Students work real interview problems and get scaffolded hints and feedback instead of an answer key.',
      github: 'https://github.com/raneill26/AInterview',
      year: '2025',
      tags: ['Angular', 'FastAPI', 'TypeScript', 'SQL', 'Team Project'],
      highlights: [
        'Student workspace for selecting, attempting, and submitting interview questions.',
        'AI feedback layer that returns progressive hints rather than solutions.',
        'Admin console for creating, editing, and curating the question bank.'
      ],
      screenshots: [
        'assets/projectscreenshots/AI1studentmainview.png',
        'assets/projectscreenshots/AI2selectedquestion.png',
        'assets/projectscreenshots/AI3answered.png',
        'assets/projectscreenshots/AI4asked.png',
        'assets/projectscreenshots/AI5adminview.png',
        'assets/projectscreenshots/AI6create.png',
        'assets/projectscreenshots/AI7edit.png'
      ]
    },
    {
      title: 'Flappy Bird in MIPS Assembly',
      subtitle: 'Hardware + bare-metal game',
      description:
        'Flappy Bird written in MIPS assembly and run on a Nexys A7 FPGA board. Executing on a single-cycle MIPS processor I built from scratch in SystemVerilog.',
      github: 'https://github.com/raneill26/FlappyBird',
      year: '2025',
      tags: ['MIPS', 'SystemVerilog', 'FPGA', 'Game Dev'],
      highlights: [
        'Custom single cycle MIPS processor implemented in SystemVerilog.',
        'Game loop, collision, and VGA rendering written directly in assembly.'
      ],
      screenshots: [
        'assets/projectscreenshots/Bird1.png',
        'assets/projectscreenshots/Bird2.png'
      ]
    },
    {
      title: 'Akari',
      subtitle: 'JavaFX puzzle game',
      description:
        'A complete JavaFX implementation of Akari (Light Up), including the puzzle model, constraint validation, and an interactive board with live solution checking.',
      github: 'https://github.com/raneill26/Akari',
      year: '2024',
      tags: ['Java', 'JavaFX', 'Game Dev'],
      screenshots: [
        'assets/projectscreenshots/Akari2.png',
        'assets/projectscreenshots/Akari3.png'
      ]
    },
    {
      title: 'Ethics of AI',
      subtitle: 'Research study',
      description:
        'A two-part study analyzing bias in generative AI systems — how it surfaces in model output, and what that means for the people deploying these tools.',
      github: 'https://github.com/raneill26/Ethics-of-AI',
      year: '2024',
      tags: ['Research', 'AI Ethics', 'Team Project']
    }
  ];
}
