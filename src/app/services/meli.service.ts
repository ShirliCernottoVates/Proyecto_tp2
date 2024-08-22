import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { search } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class MeliService {

  private url = "https://api.mercadolibre.com/sites/MLA/search?q=ipod";
  constructor(private http: HttpClient) { }

  getAll() : Observable<search>{
    return this.http.get<search>(this.url);
  }
}
