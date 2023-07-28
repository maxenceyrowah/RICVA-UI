import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorMessages: { [errorCode: string]: string } = {
    'auth/user-not-found': "L'utilisateur n'a pas été trouvé.",
    'auth/wrong-password': 'Mot de passe incorrect.',
    'auth/invalid-email': 'Adresse e-mail invalide.',
  };
  private defaultMsg: string = "Une erreur s'est produite. Veuillez réessayer plus tard.";

  getErrorMessage(errorCode: string): string {
    if (this.errorMessages[errorCode]) {
      return this.errorMessages[errorCode];
    } else {
      return this.defaultMsg;
    }
  }
}
