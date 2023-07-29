import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
