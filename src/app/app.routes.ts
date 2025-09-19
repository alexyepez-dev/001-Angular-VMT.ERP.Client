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
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];