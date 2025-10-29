import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-reactivity',
  standalone: true,
  template: `
    <button (click)="generateRandomNumber()">Random</button>
    <br />
    number: {{ randomNumber() }}
    <br />
    Even: {{ isEven() }}
    <br />
    Doubled: {{ doubled() }}
  `,
})
export class ReactivityComponent {
  randomNumber = signal<number | string>('');

  generateRandomNumber() {
    this.randomNumber.set(Math.round(Math.random() * 100));
  }

  isEven = computed(() => {
    const num = this.randomNumber();
    return typeof num === 'number' ? num % 2 === 0 : false;
  });

  doubled = computed(() => {
    const num = this.randomNumber();
    return typeof num === 'number' ? num * num : 0;
  });
}
