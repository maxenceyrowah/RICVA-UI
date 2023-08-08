import { importProvidersFrom } from '@angular/core';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import {
  RouterModule,
  withHashLocation,
  provideRouter,
  Routes,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { environment } from './environments/environment';
import { guestGuard } from './app/@core/guards/guest/guest.guard';
import { authGuard } from './app/@core/guards/auth/auth.guard';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/@core/core.module';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/app.component').then((m) => m.AppComponent),
    children: [
      { path: '', redirectTo: 'public', pathMatch: 'full' },
      {
        path: 'app',
        canActivate: [authGuard],
        loadChildren: () => import('./app/protected/protected.routes'),
      },
      {
        path: 'public',
        canActivate: [guestGuard],
        loadChildren: () => import('./app/public/public.routes'),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      RouterModule,
      CoreModule,
      NgxLoadingButtonsModule,
      ToastrModule.forRoot(),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
    ),
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
