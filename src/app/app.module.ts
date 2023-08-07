import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { CoreModule } from './@core/core.module';
import { authGuard } from './@core/guards/auth/auth.guard';
import { guestGuard } from './@core/guards/guest/guest.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'public', pathMatch: 'full' },
      {
        path: 'app',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./protected/protected.routes').then((m) => m.protectedRoutes),
      },
      {
        path: 'public',
        canActivate: [guestGuard],
        loadChildren: () =>
          import('./public/public.routes').then((m) => m.publicRoutes),
      },
    ],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    CoreModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    NgxLoadingButtonsModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
