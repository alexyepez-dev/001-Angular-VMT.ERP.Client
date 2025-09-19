import { Routes } from '@angular/router';

export const WelcomeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/welcome-page/welcome-page').then((x) => x.WelcomePage),
  },
];