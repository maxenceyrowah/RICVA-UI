import { NgIf, NgClass, NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

// protected routes
export const ENTREPOT_MODULE = [
  MatButtonModule,
  RouterLink,
  MatCardModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
];
export const ENTREPOT_FORM_MODULE = [
  MatButtonModule,
  RouterLink,
  MatCardModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  NgIf,
  NgClass,
];
export const DASHBOARD_MODULE = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  NgFor,
  RouterLink,
  RouterOutlet,
];

// public routes
export const REGISTER_MODULE = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  RouterLink,
];
export const LOGIN_MODULE = [
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  RouterLink,
];
