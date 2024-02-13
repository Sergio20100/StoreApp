import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);  
  constructor() { 

  }

  getProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
  getOneProduct(id:string){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }

  getByCategory(category_name:string){
    if(category_name!==undefined){
      return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category_name}`)
    }else{
      return this.http.get<Product[]>('https://fakestoreapi.com/products')
    }
  }
}
