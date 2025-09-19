import { Routes } from '@angular/router';

export const NotFoundRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];