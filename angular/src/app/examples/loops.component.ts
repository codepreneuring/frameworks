import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loops',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div *ngFor="let todo of todos(); let i = index" class="todo">
        <span class="text">{{ i }} {{ todo.text }}</span>
      </div>
    </div>
  `,
})
export class LoopsComponent {
  todos = signal([
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar' },
    { id: 3, text: 'baz' },
  ]);
}
