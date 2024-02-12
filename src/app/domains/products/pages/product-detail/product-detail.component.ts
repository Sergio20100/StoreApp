import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/interfaces/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  
  @Input() id?: string;
  product = signal<Product | null>(null);
  private productService  = inject(ProductService)
  private cartService = inject(CartService)
  ngOnInit(){
    if(this.id){
      this.productService.getOneProduct(this.id).subscribe({
        next:(producto)=>{
          console.log(producto)
          this.product.set(producto)
        },
        error:(err)=>{console.log(err)}
      })
    }
  }
  addToCart(product: Product | null) {
    // console.log(product)
    if(product!=null){
      this.cartService.addToCart(product)
    }
  }
}
