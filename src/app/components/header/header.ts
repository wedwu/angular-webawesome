import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ThemeControls } from '@/components/theme/theme-controls';

@Component({
  selector: 'app-header',
  host: { slot: 'header' },
  imports: [ThemeControls],
  templateUrl: './header.html',
  styleUrl: './header.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {}
