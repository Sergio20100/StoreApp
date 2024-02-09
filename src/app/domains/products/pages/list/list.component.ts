import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // image = 'https://picsum.photos/250/250?r='+ Math.random()
  fromChild(event:Event){
    console.log('Estamos en el padre')
    console.log(event)
  }
}
