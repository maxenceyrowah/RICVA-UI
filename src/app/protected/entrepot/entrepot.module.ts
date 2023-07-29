import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepotComponent } from './entrepot.component';
import { EntrepotRoutingModule } from './entrepot-routing.module';

@NgModule({
  declarations: [ EntrepotComponent ],
  imports: [ CommonModule, EntrepotRoutingModule ],
})
export class EntrepotModule {}
