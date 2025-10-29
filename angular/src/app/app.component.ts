import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { StateComponent } from './examples/state.component';
import { ReactivityComponent } from './examples/reactivity.component';
import { BindingComponent } from './examples/binding.component';
import { ComponentsCounterComponent } from './examples/components-counter.component';
import { StoresCounterComponent } from './examples/stores-counter.component';
import { ConditionalsComponent } from './examples/conditionals.component';
import { LoopsComponent } from './examples/loops.component';
import { CssComponent } from './examples/css.component';
import { SlotsComponent } from './examples/slots.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    StateComponent,
    ReactivityComponent,
    BindingComponent,
    ComponentsCounterComponent,
    StoresCounterComponent,
    ConditionalsComponent,
    LoopsComponent,
    CssComponent,
    SlotsComponent,
  ],
  template: `
    <div [ngStyle]="styles.container">
      <app-card header="State">
        <app-state />
      </app-card>
      <app-card header="Reactivity">
        <app-reactivity />
      </app-card>
      <app-card header="Binding">
        <app-binding />
      </app-card>
      <app-card header="Components">
        <app-components-counter />
      </app-card>
      <app-card header="Stores">
        <app-stores-counter />
      </app-card>
      <app-card header="Conditionals">
        <app-conditionals />
      </app-card>
      <app-card header="Loops">
        <app-loops />
      </app-card>
      <app-card header="Css">
        <app-css />
      </app-card>
      <app-card header="Slots">
        <app-slots />
      </app-card>
    </div>
  `,
})
export class AppComponent {
  styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '20px',
    },
  };
}
