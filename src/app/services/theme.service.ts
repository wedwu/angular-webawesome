import { Injectable, effect, signal } from '@angular/core';

import { BRAND_TOKENS, DEFAULT_BRAND, DARK_KEY, BRAND_KEY } from '@/const';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly dark = signal(localStorage.getItem(DARK_KEY) === 'true');
  readonly brand = signal(localStorage.getItem(BRAND_KEY) ?? DEFAULT_BRAND);

  constructor() {
    effect(() => {
      const dark = this.dark();
      document.documentElement.classList.toggle('wa-dark', dark);
      localStorage.setItem(DARK_KEY, String(dark));
    });

    effect(() => {
      const brand = this.brand();
      const root = document.documentElement;
      BRAND_TOKENS.forEach((token) => root.style.setProperty(token, brand));
      localStorage.setItem(BRAND_KEY, brand);
    });
  }

  setDark(value: boolean): void {
    this.dark.set(value);
  }

  setBrand(value: string): void {
    this.brand.set(value);
  }
}
