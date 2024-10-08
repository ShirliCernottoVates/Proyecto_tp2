import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email! : string;
  contrasenia! : string;

  onIngresar(){
    if(this.email && this.contrasenia){
      alert("Ingresando..");
    }
    else{
      alert("Error al ingresar.")
    }
  }
}
