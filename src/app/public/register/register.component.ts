import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink]
})
export class RegisterComponent {
  hidePassword: boolean = true;
  formTitle: string = 'Créer un compte';
  registerFormLogo: string = '../../../assets/img/logo.png';

  RegisterForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  formIsValid = this.RegisterForm.valid;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  register() {
    const { email, password } = this.RegisterForm.value;

    const dataForm = {
      email: email as string,
      password: password as string,
    };

    this.authService.register({ ...dataForm });
  }

  resetForm() {
    return this.RegisterForm.reset();
  }
}
