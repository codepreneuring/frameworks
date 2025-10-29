import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-stores-counter-button-increase',
  standalone: true,
  template: ` <button (click)="increment()">+</button> `,
})
export class StoresCounterButtonIncreaseComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.counter.update((v) => v + 1);
  }
}
