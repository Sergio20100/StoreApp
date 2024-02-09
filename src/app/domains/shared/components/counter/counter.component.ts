import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    @Input({required:true}) duration : number = 0;
    @Input({required:true}) message : string = '';

    constructor(){
      // No se puede poner en el contructor cosas asincronas como promesas por ejemplo
      // o cosas que deban esperar una respuesta
      console.log('constructor')
      console.log('-'.repeat(10))
    }
    ngOnChanges(changes:SimpleChanges){
      console.log('ngOnchanges')
      console.log('-'.repeat(10))
      console.log(changes)
    }
}
