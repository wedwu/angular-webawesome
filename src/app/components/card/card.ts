import { Component, CUSTOM_ELEMENTS_SCHEMA, input, signal } from '@angular/core';

import { InputV1 } from '@/components/input/input-v1';
import { InputV2 } from '@/components/input/input-v2';
import { DoughnutChart } from '@/components/chart/doughnut-chart';
import type { CardButton, DoughnutSegment, LoadState } from '@/models';

@Component({
  selector: 'app-card',
  imports: [InputV1, InputV2, DoughnutChart],
  templateUrl: './card.html',
  styleUrl: './card.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Card {
  readonly title = input.required<string>();
  readonly state = input.required<LoadState>();
  readonly desc = input('');
  readonly button = input<CardButton | null>(null);
  readonly type = input.required<'form' | 'chart' | 'generic'>();
  readonly projects = input<DoughnutSegment[]>([]);

  readonly value = signal('');

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value ?? '');
  }

  onChange(event: Event): void {
    console.log('committed', event);
  }
}
