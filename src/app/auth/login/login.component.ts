import { UserService } from '../../services/users-http.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]], 
      password: [null, [
        Validators.required, 
      ]]
    });
  }
  
  login() {
    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    // Obtenemos los valores del formulario
    const { email, password } = this.form.value;

    this.userService.login(email, password).subscribe(
      (user) => {
        console.log('Login exitoso', user);
        // Aquí puedes guardar el token o hacer la redirección
      },
      (error) => {
        console.error('Error de login', error);
      }
    );
  }



  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }

  
}
