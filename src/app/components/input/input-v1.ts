import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-input-v1',
  templateUrl: './input-v1.html',
  styleUrl: './input.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputV1 {
  readonly value = signal('');

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value ?? '');
  }

  onChange(event: Event): void {
    console.log('committed:', (event.target as HTMLInputElement).value);
  }
}
