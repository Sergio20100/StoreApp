import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(100);
  msg = signal('Hola')


  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }
  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.msg.set(input.value);
  }
}
