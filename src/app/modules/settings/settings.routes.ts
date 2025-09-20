import { Routes } from '@angular/router';

export const SettingsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/settings-page/settings-page').then((x) => x.SettingsPage),
  },
];