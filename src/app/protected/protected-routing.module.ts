import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrepotComponent } from './entrepot/entrepot.component';

import { authGuard } from '../@core/guards/auth/auth.guard';
import { EntrepotFormComponent } from './entrepot/entrepot-form/entrepot-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'entrepot',
        component: EntrepotComponent,
      },
      {
        path: 'entrepot/creation',
        component: EntrepotFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
