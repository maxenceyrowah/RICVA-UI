import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Login } from '../../models/login';
import { ErrorService } from '../error/error.service';

const AccesStorageKey = '__ricva__access__token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth;
  private hasTokenExistMsg: string =
    'Impossible de se connecter. Veuillez vérifier les informations saisies.';
  private dashboardLink: string = '/dashboard';
  private loginLink: string = '/login';
  private registerLink: string = '/register';

  constructor(private router: Router, private errorHandler: ErrorService) {
    this.auth = inject(Auth);
  }

  login({ email, password }: Login) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        if (result) {
          const accessToken = result?.user?.accessToken;

          if (!accessToken) {
            alert(this.hasTokenExistMsg);
            return;
          }

          localStorage.setItem(AccesStorageKey, accessToken);
          this.router.navigate([this.dashboardLink]);
        }
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = this.errorHandler.getErrorMessage(errorCode);
        console.log('[] Error: ', errorMessage);
        this.router.navigate([this.loginLink]);
      });
  }

  register({ email, password }: Login) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.router.navigate([this.loginLink]);
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = this.errorHandler.getErrorMessage(errorCode);
        console.log('[] Error: ', errorMessage);
        this.router.navigate([this.registerLink]);
      });
  }

  get isLoggedIn(): boolean {
    const accesToken = JSON.parse(localStorage.getItem(AccesStorageKey)!);
    return accesToken !== null;
  }

  logout() {
    return signOut(this.auth)
      .then(() => {
        localStorage.removeItem(AccesStorageKey);
        this.router.navigate([this.loginLink]);
      })
      .catch((err) => {
        console.log('[] err', err);
      });
  }
}
