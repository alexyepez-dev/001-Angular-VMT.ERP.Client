import { Routes } from '@angular/router';

export const TeamsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/teams-page/teams-page').then((x) => x.TeamsPage),
  },
];