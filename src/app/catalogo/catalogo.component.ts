import { Component } from '@angular/core';
import { Book } from '../datos/book-data.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  arrBooks : Book[];

  constructor(){
    this.arrBooks = [
      { title: "Una corte de rosas y espinas", author: "Sarah J. Maas", yearPublished: 2015, genre: "Fantasía" },
      { title: "Una educación mortal", author: "Naomi Novik", yearPublished: 2020, genre: "Fantasía" },
      { title: "La suerte de los ladrones", author: "Lynn Flewelling", yearPublished: 1996, genre: "Fantasía" },
      { title: "De sangre y cenizas", author: "Jennifer L. Armentrout", yearPublished: 2020, genre: "Fantasía" },
      { title: "El Señor de los Anillos", author: "J.R.R. Tolkien", yearPublished: 1954, genre: "Fantasía" },
      { title: "Trono de cristal", author: "Sarah J. Maas", yearPublished: 2012, genre: "Fantasía" },
      { title: "El año de gracia", author: "Kim Liggett", yearPublished: 2019, genre: "Sci-Fi" },
      { title: "El guardián", author: "Nicholas Sparks", yearPublished: 2003, genre: "Romance" }
    ]
  }
}
