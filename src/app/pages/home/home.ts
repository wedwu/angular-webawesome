import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, signal } from '@angular/core';

import { Header } from '@/components/header/header';
import { NavBar } from '@/components/nav-bar/nav-bar';
import { Footer } from '@/components/footer/footer';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb';
import { Aside } from '@/components/aside/aside';
import { UsersService } from '@/api/users.service';
import type { LoadState, User } from '@/models';

@Component({
  selector: 'app-home',
  imports: [Header, NavBar, Footer, Breadcrumb, Aside],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home implements OnInit {
  private readonly usersService = inject(UsersService);

  readonly user = signal<User | null>(null);
  readonly state = signal<LoadState>('loading');
  readonly notificationState = signal(false);
  readonly loadedAt = signal<number | null>(null);
  readonly usersLoaded = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load = (): void => {
    this.state.set('loading');
    this.notificationState.set(false);
    this.usersService
      .fetchUserById(1)
      .then((data) => {
        this.user.set(data);
        this.state.set('ready');
        this.loadedAt.set(Date.now());
        this.notificationState.set(true);
        setTimeout(() => {
          this.notificationState.set(false);
        }, 5000);
      })
      .catch(() => {
        this.state.set('error');
        this.notificationState.set(false);
      });
  };
}
