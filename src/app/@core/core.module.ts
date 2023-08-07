import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { ErrorService } from './services/error/error.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService,ErrorService]
})
export class CoreModule { }
