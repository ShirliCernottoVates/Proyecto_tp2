import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  myForm: FormGroup;

  constructor(public fb:FormBuilder){
    this.myForm = this.fb.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      telefono:['', [Validators.pattern(/^[0-9]*$/)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    })
  }

  get formControlNames(){
    return Object.keys(this.myForm.controls);
  }

  isRequired(controlName:string): boolean{
    const abstractControl = this.myForm.get(controlName);
    if(abstractControl && abstractControl.validator){
      const validatorResponse = abstractControl.validator({} as AbstractControl);
      if(validatorResponse && validatorResponse['required']){
        return true;
      }
    }
    return false;
  }
  obtenerTextoInput(controlName:string): string{
    switch(controlName){
      case 'nombre':
        return 'Ingrese su nombre:';
      case 'apellido':
        return 'Ingrese su apellido:';
      case 'telefono':
        return 'Ingrese su número de teléfono:';
      case 'email':
        return 'Ingrese su email:';
      case 'password':
        return 'Ingrese su contraseña:';
      default:
        return '';
    }
  }

  onRegistro(){
    if(this.myForm.valid){
      alert("El usuario se registro correctamente");
      this.myForm.reset();
    }
    else{
      if(this.myForm.dirty == true){
        alert("Error al crear el usuario. Existen campos del formulario con errores.")
      }
      else{
        alert("Debe completar los campos requeridos antes de registrar el usuario")
      }
    }
  }

  obtenerError(error: any) : string{
    if(error.hasError('required')){
      return "El campo es obligatorio.";
    }
    if(error.hasError('email')){
      return "El campo debe tener formato de email.";
    }
    if(error.hasError('pattern')){
      return "Este campo solo admite números.";
    }
    if(error.hasError('minlength')){
      return "La contraseña ingresada debe tener como minimo 6 caracteres."
    }
    if(error.hasError('maxlength')){
      return "La contraseña ingresada debe tener como máximo 10 caracteres."
    }
    return "Error desconocido.";
  }
}
