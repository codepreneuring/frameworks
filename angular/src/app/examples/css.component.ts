import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  standalone: true,
  template: `
    <span style="color: orange; font-weight: bold;">Svelte</span>
    <span>&gt;</span>
    <span class="trash">React</span>
  `,
  styles: [
    `
      span {
        font-size: 40px;
      }

      .trash {
        color: blue;
        font-weight: bold;
      }
    `,
  ],
})
export class CssComponent {}
