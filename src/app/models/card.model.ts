import type { LoadState } from './user-table.model';
import type { DoughnutChartProps } from './doughnut-chart.model';

export type WaButtonVariant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
export type WaButtonAppearance = 'accent' | 'filled' | 'outlined' | 'plain';

export interface CardButton {
  text: string;
  variant?: WaButtonVariant;
  appearance?: WaButtonAppearance;
}

export interface CardProps {
  title: string;
  state: LoadState;
  desc: string;
  button: CardButton | null;
  type: 'form' | 'chart' | 'generic';
  projects?: DoughnutChartProps['segments'];
}
