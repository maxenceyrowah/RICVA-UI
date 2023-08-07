import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EntrepotFormRoutingModule } from './entrepot-form-routing.module';
import { EntrepotFormComponent } from './entrepot-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        EntrepotFormRoutingModule,
        EntrepotFormComponent,
    ]
})
export class EntrepotFormModule { }
