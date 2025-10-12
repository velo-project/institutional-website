import { AfterViewInit, Directive, ElementRef, HostListener, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[navbarUnderline]'
})
export class NavbarUnderlineDirective implements AfterViewInit {
  private menu!: HTMLElement;
  private links!: HTMLAnchorElement[];
  private underline!: HTMLSpanElement;
  private ink!: HTMLSpanElement;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone, @Inject(DOCUMENT) private doc: Document) {}

  ngAfterViewInit(): void {
    this.menu = this.el.nativeElement.querySelector('.menu') as HTMLElement;
    this.links = Array.from(this.menu.querySelectorAll('a'));
    this.underline = this.menu.querySelector('.menu-underline') as HTMLSpanElement;
    this.ink = this.menu.querySelector('.menu-ink') as HTMLSpanElement;

    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.positionToActive());
    });

    this.links.forEach(link => {
      link.addEventListener('mouseenter', () => this.moveTo(link, true));
      link.addEventListener('focus', () => this.moveTo(link, true));
      link.addEventListener('mouseleave', () => this.positionToActive());
      link.addEventListener('blur', () => this.positionToActive());
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.positionToActive();
  }

  private positionToActive() {
    const active = this.links.find(l => l.classList.contains('active')) ?? this.links[0];
    if (active) this.moveTo(active, false);
  }

  private moveTo(target: HTMLAnchorElement, showInk: boolean) {
    const menuRect = this.menu.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const left = rect.left - menuRect.left;
    const width = rect.width;

    // Underline
    this.underline.style.left = `${left}px`;
    this.underline.style.width = `${Math.max(24, width)}px`;

    // Ink background following item
    this.ink.style.left = `${left}px`;
    this.ink.style.width = `${width}px`;
    this.ink.style.opacity = showInk ? '1' : '0.75';
  }
}
