import { AfterViewInit, Directive, ElementRef, HostListener, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tabsUnderline]'
})
export class TabsUnderlineDirective implements AfterViewInit {
  private underline!: HTMLSpanElement;
  private tabs!: HTMLElement;
  private links!: NodeListOf<HTMLAnchorElement>;

  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone, @Inject(DOCUMENT) private doc: Document) {}

  ngAfterViewInit(): void {
    this.tabs = this.el.nativeElement.querySelector('.tabs') as HTMLElement;
    this.underline = this.tabs.querySelector('.tabs-underline') as HTMLSpanElement;
    this.links = this.tabs.querySelectorAll('a');

    // Inicializa com a aba ativa
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => this.positionToActive());
    });

    // Eventos de hover para pré-visualizar
    this.links.forEach(link => {
      link.addEventListener('mouseenter', () => this.moveTo(link));
      link.addEventListener('focus', () => this.moveTo(link));
      link.addEventListener('mouseleave', () => this.positionToActive());
      link.addEventListener('blur', () => this.positionToActive());
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.positionToActive();
  }

  private positionToActive() {
    const active = Array.from(this.links).find(l => l.classList.contains('active')) || this.links[0];
    if (active) this.moveTo(active);
  }

  private moveTo(target: HTMLAnchorElement) {
    const tabsRect = this.tabs.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    const left = rect.left - tabsRect.left + 8; // padding do container
    const width = rect.width - 16;              // desconta padding lateral
    this.underline.style.left = `${left}px`;
    this.underline.style.width = `${Math.max(24, width)}px`;
  }
}
