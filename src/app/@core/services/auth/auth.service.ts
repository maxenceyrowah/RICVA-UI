import { Injectable, inject } from '@angular/core';
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
  private auth;
  private hasTokenExistMsg: string =
    'Impossible de se connecter. Veuillez vérifier les informations saisies.';
  private dashboardLink: string = '/app/dashboard';
  private loginLink: string = '/public/login';
  private registerLink: string = '/public/register';
  private registersuccesMsg: string = 'Votre compte a bien été créé, veuillez vous connecter.'

  constructor(
    private router: Router,
    private errorHandler: ErrorService,
    private toastr: ToastrService
    ) {
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
        this.toastr.warning(errorMessage);
        this.router.navigate([this.loginLink]);
      });
  }

  register({ email, password }: Login) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
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
        this.toastr.warning(err?.message);
      });
  }
}
