import { Injectable } from '@angular/core';

import type { User } from '@/models';
import { MOCK_USERS } from '@/const';

@Injectable({ providedIn: 'root' })
export class UsersService {
  fetchUsers({ failRate = 0 }: { failRate?: number } = {}): Promise<User[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < failRate) {
          reject(new Error('Failed to load users (simulated network error)'));
          return;
        }
        resolve(MOCK_USERS.map((u) => ({ ...u })));
      }, 800);
    });
  }

  fetchUserById(id: number, { failRate = 0 }: { failRate?: number } = {}): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < failRate) {
          reject(new Error('Failed to load user (simulated network error)'));
          return;
        }
        const user = MOCK_USERS.find((u) => u.id === id);
        if (user) {
          resolve({ ...user });
        } else {
          reject(new Error('User not found'));
        }
      }, 500);
    });
  }
}
