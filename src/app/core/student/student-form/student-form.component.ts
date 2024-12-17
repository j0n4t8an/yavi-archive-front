import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/users-http.service';
import { Router } from '@angular/router';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  protected form!: FormGroup;
  protected career: [] = [];
  protected decodedToken: any={};

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {

    this.form = this.buildForm();
    this.getUser();
  }
  
  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]], 
      password: [null, [Validators.required,Validators.minLength(8),this.passwordValidator]],
      careerId:[null, [Validators.required]],
    });
  }

  passwordValidator(control: any) {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value); 
    const hasNumber = /\d/.test(value); 
    const hasMinLength = value && value.length >= 8;

    if (hasUpperCase && hasLowerCase && hasNumber && hasMinLength) {
      return null;
    } else {
      return { passwordStrength: true };
    }
  }

  getUser() {
    this.getToken();
    const userId = this.decodedToken.id;
  
    if (userId) {
      this.form.patchValue({
        firstName: this.decodedToken.firstName,
        lastName: this.decodedToken.lastName,
        email: this.decodedToken.email,
        password: '',
      });
    } else {
      console.error('No se pudo obtener el ID del usuario del token.');
    }
  }
  
  updateUser() {
    if (this.form.valid) {
      const userId = this.decodedToken.id;
      const formData = this.form.value;
  
      this.userService.userUpdate(userId,formData).subscribe(
        (response) => {
          console.log('Datos actualizados correctamente:', response);
          alert('¡Datos actualizados con éxito!');
        },
        (error) => {
          console.error('Error al actualizar los datos del usuario:', error);
          alert('Hubo un error al actualizar los datos. Intenta nuevamente.');
        }
      );
    } else {
      console.warn('El formulario no es válido. Por favor, verifica los campos.');
      this.form.markAllAsTouched();
    }
  }
  

  getToken() {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        this.decodedToken = jwt_decode.jwtDecode(token);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('No token found in sessionStorage');
    }
  }

  get firstNameField(): AbstractControl {
    return this.form.controls['firstName'];
  }

  get lastNameField(): AbstractControl {
    return this.form.controls['lastName'];
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
  
  get careerField(): AbstractControl {
    return this.form.controls['carrerId'];
  }
}
