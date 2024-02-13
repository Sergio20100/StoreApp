import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);  
  constructor() { 

  }

  getAll(){
    // las categorias son de tipo string
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }
}
