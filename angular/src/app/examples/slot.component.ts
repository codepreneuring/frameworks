import { Component } from '@angular/core';

@Component({
  selector: 'app-slot',
  standalone: true,
  template: `
    <div class="container">
      <div class="header">
        <ng-content select="[slot-header]" />
      </div>

      <div class="body">
        <ng-content select="[slot-body]" />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        gap: 10px;
      }

      .header {
        color: blue;
      }

      .body {
        color: red;
      }
    `,
  ],
})
export class SlotComponent {}
