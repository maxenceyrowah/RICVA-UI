import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword: boolean = true;
  formTitle: string = 'Se connecter';
  loginFormLogo: string = '../../../assets/img/logo.png';

  LoginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
    ) {}

  signIn() {
    const { email, password } = this.LoginForm.value;

    const dataForm = {
      email: email as string,
      password: password as string,
    };

    this.authService.login({ ...dataForm });
  }
}
