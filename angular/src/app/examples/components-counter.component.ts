import { Component, signal } from '@angular/core';
import { ComponentsCounterButtonIncreaseComponent } from './components-counter-button-increase.component';
import { ComponentsCounterButtonDecreaseComponent } from './components-counter-button-decrease.component';

@Component({
  selector: 'app-components-counter',
  standalone: true,
  imports: [ComponentsCounterButtonIncreaseComponent, ComponentsCounterButtonDecreaseComponent],
  template: `
    <div>
      <app-components-counter-button-decrease [counter]="counter" />
      {{ counter() }}
      <app-components-counter-button-increase [counter]="counter" />
    </div>
  `,
})
export class ComponentsCounterComponent {
  counter = signal(0);
}
