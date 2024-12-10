import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  protected form!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  careers = [
    { label: 'Ingeniería en Sistemas', value: 'sistemas' },
    { label: 'Ingeniería Civil', value: 'civil' },
    { label: 'Medicina', value: 'medicina' },
    { label: 'Administración', value: 'administracion' },
    { label: 'Derecho', value: 'derecho' }
  ];
  selectedCareers: string[] = [];

  buildForm(): void {
    this.form = this.formBuilder.group({
      firstName:[null,[Validators.required]],
      lastName: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]], 
      password: [null, [Validators.required,Validators.minLength(8),this.passwordValidator]],
      carrer:[],
      userType: []
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
  
  get carrerField(): AbstractControl {
    return this.form.controls['carrer'];
  }

  get userTypeField(): AbstractControl {
    return this.form.controls['userType'];
  }
}
