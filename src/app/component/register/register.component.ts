import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hidePassword: boolean = true;
  formTitle: string = 'Inscription';
  registerFormLogo: string = '../../../assets/img/logo.png';
}
