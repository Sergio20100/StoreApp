import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '@shared/interfaces/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private cartService = inject(CartService);
  hideSideMenu = signal(true);
  // @Input({required:true}) cart: Product[] = [];
  total = this.cartService.total;
  cart = this.cartService.cart;
  toogleSideMenu(){
    this.hideSideMenu.update(preState => !preState);
  }
}
