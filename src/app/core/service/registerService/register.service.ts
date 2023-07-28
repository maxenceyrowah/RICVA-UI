import { Injectable, inject } from '@angular/core';
import { createUserWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Login } from '../../models/login';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private auth;
  private registerLink: string = '/register';
  private loginLink: string = '/login';

  constructor(private router: Router) {
    this.auth = inject(Auth);
  }

  register({ email, password }: Login) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.router.navigate([this.registerLink]);
      })
      .catch((err) => {
        console.log('[] err', err);
        this.router.navigate([this.loginLink]);
      });
  }
}
