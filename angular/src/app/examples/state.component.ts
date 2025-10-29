import { Component } from '@angular/core';

@Component({
  selector: 'app-state',
  standalone: true,
  template: `<div>Hello {{ text }}</div>`,
})
export class StateComponent {
  text = 'world!';
}
