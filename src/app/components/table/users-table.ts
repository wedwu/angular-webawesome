import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, output, signal } from '@angular/core';

import { STATUS_VARIANT, type LoadState, type User } from '@/models';
import { UsersService } from '@/api/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersTable implements OnInit {
  private readonly usersService = inject(UsersService);

  /** Mirrors the React `notState` callback prop. */
  readonly notState = output<boolean>();

  readonly users = signal<User[]>([]);
  readonly state = signal<LoadState>('loading');
  readonly notificationState = signal(false);
  readonly loadedAt = signal<number | null>(null);

  readonly statusVariant = STATUS_VARIANT;

  ngOnInit(): void {
    this.load();
  }

  load = (): void => {
    this.state.set('loading');
    this.notificationState.set(false);
    this.usersService
      .fetchUsers()
      .then((data) => {
        this.users.set(data);
        this.state.set('ready');
        this.loadedAt.set(Date.now());
        this.notificationState.set(true);
        this.notState.emit(true);
        setTimeout(() => {
          this.notificationState.set(false);
          this.notState.emit(false);
        }, 5000);
      })
      .catch(() => {
        this.state.set('error');
        this.notificationState.set(false);
      });
  };

  isoDate(ms: number): string {
    return new Date(ms).toISOString();
  }

  localeDate(value: string): string {
    return new Date(value).toLocaleDateString();
  }
}
