import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

/**
 * Fades + lifts an element into view the first time it intersects the viewport.
 * Usage: <div appReveal [revealDelay]="120">…</div>
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Stagger in milliseconds. */
  @Input() revealDelay = 0;

  /** How much of the element must be visible before it reveals (0–1). */
  @Input() revealThreshold = 0.06;

  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    this.renderer.addClass(el, 'reveal');
    this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}ms`);

    // Server-render / older-browser safety net: show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(el, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          this.renderer.addClass(el, 'is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
