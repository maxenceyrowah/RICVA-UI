import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const protectedRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'entrepot', pathMatch: 'full' },
      {
        path: 'entrepot',
        loadComponent: () =>
        import('./entrepot/entrepot.component').then((m) => m.EntrepotComponent),
      },
      {
        path: 'entrepot/creation',
        loadComponent: () =>
        import('./entrepot/entrepot-form/entrepot-form.component').then((m) => m.EntrepotFormComponent),
      },
      {
        path: 'entrepot/:entrepotId/edition',
        loadComponent: () =>
        import('./entrepot/entrepot-form/entrepot-form.component').then((m) => m.EntrepotFormComponent),
      },
    ],
  },
];
