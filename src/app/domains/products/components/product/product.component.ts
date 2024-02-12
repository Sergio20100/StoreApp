import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/interfaces/product.model';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,TimeAgoPipe,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    // console.log('click from child')
    this.addToCart.emit(this.product);
  }
}
