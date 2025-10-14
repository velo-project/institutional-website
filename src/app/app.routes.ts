import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { AboutPage } from './features/about-page/about-page';

// TODO TitleStrategy
export const routes: Routes = [
  {
    title: 'Velo',
    path: '', 
    component: Home
  },
  {
    title: 'Sobre nós',
    path: 'sobre',
    component: AboutPage
  }
];
