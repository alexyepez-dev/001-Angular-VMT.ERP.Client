import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then((x) => x.AuthRoutes),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./modules/not-found/not-found.routes').then((x) => x.NotFoundRoutes),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/welcome/welcome.routes').then((x) => x.WelcomeRoutes),
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/teams/teams.routes').then((x) => x.TeamsRoutes),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.routes').then((x) => x.SettingsRoutes),
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.routes').then((x) => x.ProfileRoutes),
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];