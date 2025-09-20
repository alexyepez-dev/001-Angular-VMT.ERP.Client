import { Routes } from '@angular/router';

export const ProfileRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/profile-page/profile-page').then((x) => x.ProfilePage),
  },
];