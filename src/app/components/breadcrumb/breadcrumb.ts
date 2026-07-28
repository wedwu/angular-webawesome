import { Component, CUSTOM_ELEMENTS_SCHEMA, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { labelFromHref } from '@/helpers/helpers';

@Component({
  selector: 'app-breadcrumb',
  host: { slot: 'breadcrumb' },
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Breadcrumb {
  private readonly router = inject(Router);

  readonly homeHref = input.required<string>();
  readonly pageHref = input.required<string>();

  readonly homeLabel = computed(() => labelFromHref(this.homeHref(), ''));
  readonly pageLabel = computed(() => labelFromHref(this.pageHref(), 'page'));

  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => this.normalize(this.router.url)),
    ),
    { initialValue: this.normalize(this.router.url) },
  );

  readonly homeActive = computed(() => this.normalize(this.homeHref()) === this.currentPath());
  readonly pageActive = computed(() => this.normalize(this.pageHref()) === this.currentPath());

  private normalize(href: string): string {
    return href.replace(/^\//, '').split(/[?#]/)[0] || 'home';
  }
}
