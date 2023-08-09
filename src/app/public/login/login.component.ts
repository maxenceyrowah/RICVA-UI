import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { LOGIN_MODULE } from 'src/app/@shared/import.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [...LOGIN_MODULE]
})
export class LoginComponent {
  hidePassword = true;
  formTitle = 'Se connecter';
  loginFormLogo = '../../../assets/img/logo.png';

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
