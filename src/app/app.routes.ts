import { Routes } from '@angular/router';
import { Home } from './features/home/home';

// TODO TitleStrategy
export const routes: Routes = [
  {
    title: 'Velo',
    path: '', 
    component: Home
  }
];
