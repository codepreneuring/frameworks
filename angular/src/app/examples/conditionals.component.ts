import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditionals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button *ngIf="loggedIn(); else loggedOut" (click)="toggle()">Log out</button>
    <ng-template #loggedOut>
      <button (click)="toggle()">Log in</button>
    </ng-template>
  `,
})
export class ConditionalsComponent {
  loggedIn = signal(false);

  toggle() {
    this.loggedIn.update((v) => !v);
  }
}
