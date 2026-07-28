import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';

import { Header } from '@/components/header/header';
import { NavBar } from '@/components/nav-bar/nav-bar';
import { Footer } from '@/components/footer/footer';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb';
import { Aside } from '@/components/aside/aside';
import { Card } from '@/components/card/card';
import type { LoadState } from '@/models';

@Component({
  selector: 'app-settings',
  imports: [Header, NavBar, Footer, Breadcrumb, Aside, Card],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Settings implements OnInit {
  readonly state = signal<LoadState>('loading');
  readonly loadedAt = signal<number | null>(null);
  readonly usersLoaded = signal(false);

  ngOnInit(): void {
    setTimeout(() => this.state.set('ready'), 5000);
  }
}
