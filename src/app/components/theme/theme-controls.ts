import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';

import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-theme-controls',
  templateUrl: './theme-controls.html',
  styleUrl: './theme-controls.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ThemeControls {
  readonly theme = inject(ThemeService);

  onToggle(event: Event): void {
    this.theme.setDark((event.target as HTMLInputElement).checked);
  }
}
