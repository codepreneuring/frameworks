import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      Two-way: <input type="text" [(ngModel)]="value" #firstInput /><br />
      One-way: <input type="text" [value]="value()" /><br />
      Two-way: <input type="text" [(ngModel)]="value" />
      <br />
      <br />

      <button (click)="focusFirstInput()">Focus first input</button>
    </div>
  `,
})
export class BindingComponent {
  value = signal('');

  @ViewChild('firstInput') firstInputElement!: ElementRef<HTMLInputElement>;

  focusFirstInput() {
    this.firstInputElement.nativeElement.select();
  }
}
