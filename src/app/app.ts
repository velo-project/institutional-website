import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { Navbar } from './core/layout/components/navbar/navbar';
import { Footer } from './core/layout/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [provideAnimations()]
})
export class App {
  protected readonly title = signal('velo-institutional');
}
