import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { EntrepotModule } from './entrepot/entrepot.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    EntrepotModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
