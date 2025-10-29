import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { StoresCounterButtonIncreaseComponent } from './stores-counter-button-increase.component';
import { StoresCounterButtonDecreaseComponent } from './stores-counter-button-decrease.component';

@Component({
  selector: 'app-stores-counter',
  standalone: true,
  imports: [StoresCounterButtonIncreaseComponent, StoresCounterButtonDecreaseComponent],
  template: `
    <div>
      <app-stores-counter-button-decrease />
      {{ counterService.counter() }}
      <app-stores-counter-button-increase />
    </div>
  `,
})
export class StoresCounterComponent {
  constructor(public counterService: CounterService) {}
}
