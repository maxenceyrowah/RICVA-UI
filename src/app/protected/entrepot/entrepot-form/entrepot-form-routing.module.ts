import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrepotFormComponent } from './entrepot-form.component';

const routes: Routes = [
  { path: '', component: EntrepotFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepotFormRoutingModule { }
