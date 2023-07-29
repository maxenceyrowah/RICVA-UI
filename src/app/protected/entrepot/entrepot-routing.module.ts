import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrepotFormComponent } from './entrepot-form/entrepot-form.component';
import { EntrepotComponent } from './entrepot.component';

const routes: Routes = [
  { path: '', component: EntrepotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepotRoutingModule {}
