import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

type IconKey = 'mail' | 'github' | 'linkedin' | 'resume';

interface Channel {
  icon: IconKey;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly channels: Channel[] = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'raneill@gmail.com',
      href: 'mailto:raneill@gmail.com',
      external: false
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/raneill26',
      href: 'https://github.com/raneill26',
      external: true
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/ryananeill',
      href: 'https://www.linkedin.com/in/ryananeill',
      external: true
    },
    {
      icon: 'resume',
      label: 'Résumé',
      value: 'Download PDF',
      href: 'assets/Ryan_Neill_Resume.pdf',
      external: true
    }
  ];
}
