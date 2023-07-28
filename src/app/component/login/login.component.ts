import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hidePassword: boolean = true;
  formTitle: string = 'Connexion';
  loginFormLogo: string = '../../../assets/img/logo.png';
}
