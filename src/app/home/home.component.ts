import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product, search } from '../types/types';
import { MeliService } from '../services/meli.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public searchResult$! : search;
  public isLoading:boolean = true;

  constructor(private meliService: MeliService){}

  ngOnInit(): void {
    this.meliService.getAll().subscribe(data => {
      this.searchResult$ = data;
      this.isLoading = false;
    });

  }

  get products(){
    return this.searchResult$.results;
  }

  getQuantityClass(quantity: number): string {
    if (quantity < 3) {
      return 'text-red';
    } else if (quantity >= 4 && quantity <= 8) {
      return 'text-yellow';
    } else if (quantity > 9) {
      return 'text-green';
    }
    return '';
  }
}
