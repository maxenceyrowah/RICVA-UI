import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './service/authService/auth.service';
import { RegisterService } from './service/registerService/register.service';
import { ErrorService } from './service/ErrorHandlerService/error.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, RegisterService, ErrorService]
})
export class CoreModule { }
