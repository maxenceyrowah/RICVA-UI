import { Routes } from '@angular/router';

import { EntrrepotsService } from '../@core/services/entrepots/entrrepots.service';

export default [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
      providers: [EntrrepotsService],
    children: [
      { path: '', redirectTo: 'entrepot', pathMatch: 'full' },
      {
        path: 'entrepot',
        loadComponent: () =>
          import('./entrepot-list/entrepot.component').then(
            (m) => m.EntrepotComponent
          ),
      },
      {
        path: 'entrepot/creation',
        loadComponent: () =>
          import('./entrepot-form/entrepot-form.component').then(
            (m) => m.EntrepotFormComponent
          ),
      },
      {
        path: 'entrepot/:entrepotId/edition',
        loadComponent: () =>
          import('./entrepot-form/entrepot-form.component').then(
            (m) => m.EntrepotFormComponent
          ),
      },
    ],
  },
] as Routes;
