import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Login } from '../../models/login';
import { ErrorService } from '../error/error.service';

const AccesStorageKey = '__ricva__access__token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private hasTokenExistMsg =
    'Impossible de se connecter. Veuillez vérifier les informations saisies.';
  private dashboardLink = '/app/dashboard';
  private loginLink = '/public/login';
  private registerLink = '/public/register';
  private registersuccesMsg = 'Votre compte a bien été créé, veuillez vous connecter.'

  constructor(
    private router: Router,
    private errorHandler: ErrorService,
    private toastr: ToastrService,
    private auth: Auth
    ) {}

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
        this.toastr.warning(errorMessage);
        this.router.navigate([this.loginLink]);
      });
  }

  register({ email, password }: Login) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.toastr.success(this.registersuccesMsg);
        this.router.navigate([this.loginLink]);
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = this.errorHandler.getErrorMessage(errorCode);
        this.toastr.warning(errorMessage);
        this.router.navigate([this.registerLink]);
      });
  }

  get isLoggedIn(): boolean {
    const value = localStorage.getItem(AccesStorageKey) as string;
    const accesToken = JSON.parse(value);
    return accesToken !== null;
  }

  logout() {
    return signOut(this.auth)
      .then(() => {
        localStorage.removeItem(AccesStorageKey);
        this.router.navigate([this.loginLink]);
      })
      .catch((err) => {
        this.toastr.warning(err?.message);
      });
  }
}
