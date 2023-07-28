import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/core/models/login';
import { RegisterService } from 'src/app/core/service/registerService/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
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
    private registerService: RegisterService
  ) {}

  register() {
    const { email, password } = this.RegisterForm.value;

    const dataForm = {
      email: email as string,
      password: password as string,
    };

    this.registerService.register({ ...dataForm });
  }

  resetForm() {
    return this.RegisterForm.reset();
  }
}
