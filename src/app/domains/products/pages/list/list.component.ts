import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/interfaces/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // image = 'https://picsum.photos/250/250?r='+ Math.random()
  products = signal<Product[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)

  ngOnInit(){
    this.productService.getProducts().subscribe({
      next:(products:Product[])=>{
        const newProducts:Product[] = products.map(producto=>{
          return {
            id: producto.id,
            title: producto.title,
            price: producto.price,
            image: producto.image,
            creationAt: new Date().toISOString()
          }
        })
        this.products.set(newProducts)
      },
      error:(err)=>{console.log(err)}
    })
  }

  addToCart(product: Product) {
    // console.log(product)
    this.cartService.addToCart(product)
  }
}
