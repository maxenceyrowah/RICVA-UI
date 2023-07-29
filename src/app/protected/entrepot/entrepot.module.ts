import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { EntrepotComponent } from './entrepot.component';
import { EntrepotRoutingModule } from './entrepot-routing.module';
import { EntrepotFormComponent } from './entrepot-form/entrepot-form.component';

@NgModule({
  declarations: [EntrepotComponent, EntrepotFormComponent],
  imports: [
    CommonModule,
    EntrepotRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class EntrepotModule {}
