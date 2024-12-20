import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users-http.service';
import { Router } from '@angular/router';
import { CareerModel, CreateUserModel } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  protected form!: FormGroup;
  protected career: [] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.form = this.buildForm();
    this.findAllCareers();
  }
  
  buildForm(): FormGroup {
    return this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]], 
      password: [null, [Validators.required,Validators.minLength(8),this.passwordValidator]],
      userTypeId: ['5ee824ae-4ce3-4115-88e0-4926c3d0ef07'],
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

  userCreate() {
    if (this.form.valid) {
      const createUser: CreateUserModel = this.form.value;
      this.userService.userCreate(createUser).subscribe(
        response => {
          alert('Usuario creado exitosamente, por favor inicie sesión');
          this.router.navigate(['/auth/login']);
        },
        error => {
          alert('Error al crear el usuario');
          console.error('Error al crear el usuario:', error);
        }
      );
    } else {
      alert('Por favor, complete el formulario correctamente');
    }
  }

  findAllCareers() {
    this.userService.findAllCarerrs().subscribe(
      (response) => {
        this.career = response.map((career:CareerModel) => ({
          label: career.description,
          value: career.id
        }));
        console.log('Opciones formateadas para el dropdown:', this.career);
      },
      (error) => {
        console.error('Error al obtener las carreras:', error);
      }
    );
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

  get userTypeField(): AbstractControl {
    return this.form.controls['userTypeId'];
  }
}
