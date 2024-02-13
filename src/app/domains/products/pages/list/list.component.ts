import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/interfaces/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // image = 'https://picsum.photos/250/250?r='+ Math.random()
  products = signal<Product[]>([])
  categories = signal<string[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService);
  @Input() category_name?:string;



  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(this.category_name);
    const category_name = changes['category_name'];
    if(category_name){
      console.log(category_name)
      this.getProductsByCategories(category_name.currentValue);
    }
  }

  private getProducts(){
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
  private getProductsByCategories(category_name:string){
    this.productService.getByCategory(category_name).subscribe({
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
        this.products.update(newProduct=>newProducts)
      },
      error:(err)=>{console.log(err)}
    })
  }
  private getCategories(){
    this.categoryService.getAll().subscribe({
      next:(categories)=>{
        this.categories.set(categories)
      },
      error:(error)=>{console.log(error)}
    })
  }
  addToCart(product: Product) {
    // console.log(product)
    this.cartService.addToCart(product)
  }
}
