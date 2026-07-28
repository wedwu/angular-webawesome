import { Component, computed, input } from '@angular/core';

import type { DoughnutSegment } from '@/models';

interface LegendEntry {
  label: string;
  color: string;
  percent: number;
}

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.html',
  styleUrl: './doughnut-chart.css',
})
export class DoughnutChart {
  readonly segments = input<DoughnutSegment[]>([]);
  readonly size = input(180);
  readonly label = input<string>();

  readonly total = computed(() => this.segments().reduce((sum, s) => sum + s.value, 0));

  readonly ringGradient = computed(() => {
    const segments = this.segments();
    const total = this.total();
    const stops = segments
      .map((s, i) => {
        const prev = segments.slice(0, i).reduce((sum, x) => sum + x.value, 0);
        const start = (prev / total) * 100;
        const end = ((prev + s.value) / total) * 100;
        return `${s.color} ${start}% ${end}%`;
      })
      .join(', ');
    return `conic-gradient(${stops})`;
  });

  readonly legend = computed<LegendEntry[]>(() => {
    const total = this.total();
    return this.segments().map((s) => ({
      label: s.label,
      color: s.color,
      percent: Math.round((s.value / total) * 100),
    }));
  });
}
