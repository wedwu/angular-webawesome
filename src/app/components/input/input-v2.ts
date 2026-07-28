import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-input-v2',
  templateUrl: './input-v2.html',
  styleUrl: './input.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputV2 {
  readonly value = signal('');

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value ?? '');
  }
}
