import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { ErrorService } from './services/error/error.service';
import { EntrrepotsService } from './services/entrepots/entrrepots.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers: [ AuthService, ErrorService, EntrrepotsService ]
})
export class CoreModule { }
