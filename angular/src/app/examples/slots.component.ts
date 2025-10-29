import { Component } from '@angular/core';
import { SlotComponent } from './slot.component';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotComponent],
  template: `
    <div class="container">
      <app-slot>
        <span slot-header>AAAAA</span>
        <div slot-body>aaaaa</div>
      </app-slot>

      <app-slot>
        <span slot-header>BBBBB</span>
        <div slot-body>bbbbb</div>
      </app-slot>

      <app-slot>
        <span slot-header>CCCCC</span>
        <div slot-body>ccccc</div>
      </app-slot>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
  ],
})
export class SlotsComponent {}
