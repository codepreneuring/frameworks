import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="container">
      <span class="header">{{ header }}</span>
      <div class="body">
        <ng-content />
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        width: 250px;
        height: 250px;
        border: 1px solid lightgray;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
      }

      .header {
        font-size: 30px;
        font-weight: bold;
        padding: 20px 20px 0px 20px;
      }

      .body {
        padding: 20px;
      }
    `,
  ],
})
export class CardComponent {
  @Input() header: string = '';
}
