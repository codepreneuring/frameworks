import { Component, Input, Output, EventEmitter, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-components-counter-button-increase',
  standalone: true,
  template: ` <button (click)="increment()">+</button> `,
})
export class ComponentsCounterButtonIncreaseComponent {
  @Input() counter!: WritableSignal<number>;
  @Output() counterChange = new EventEmitter<WritableSignal<number>>();

  increment() {
    this.counter.update((v) => v + 1);
    this.counterChange.emit(this.counter);
  }
}
