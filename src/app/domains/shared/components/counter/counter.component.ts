import { Component, Input, SimpleChanges, signal } from '@angular/core';

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

    counter = signal(0);
    couterRef:number | undefined;
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
    ngOnInit(){
      //after render
      console.log('ngInit')
      console.log('-'.repeat(10))
      console.log('duration')

     this.couterRef= window.setInterval(()=>{
        console.log('run interval')
        this.counter.update(prev => prev+1)
      },1000)
    }
    ngOnDestroy(){
      console.log('ngOnDestroy');
      window.clearInterval(this.couterRef)
    }
}
