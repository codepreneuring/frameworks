import { Component, Input, Output, EventEmitter, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-components-counter-button-decrease',
  standalone: true,
  template: ` <button (click)="decrement()">-</button> `,
})
export class ComponentsCounterButtonDecreaseComponent {
  @Input() counter!: WritableSignal<number>;
  @Output() counterChange = new EventEmitter<WritableSignal<number>>();

  decrement() {
    this.counter.update((v) => v - 1);
    this.counterChange.emit(this.counter);
  }
}
