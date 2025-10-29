import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-stores-counter-button-decrease',
  standalone: true,
  template: ` <button (click)="decrement()">-</button> `,
})
export class StoresCounterButtonDecreaseComponent {
  constructor(private counterService: CounterService) {}

  decrement() {
    this.counterService.counter.update((v) => v - 1);
  }
}
