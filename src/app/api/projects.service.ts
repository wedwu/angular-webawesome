import { Injectable } from '@angular/core';

import type { Project } from '@/models';
import { MOCK_PROJECTS } from '@/const';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  fetchProjects({ failRate = 0 }: { failRate?: number } = {}): Promise<Project[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < failRate) {
          reject(new Error('Failed to load projects (simulated network error)'));
          return;
        }
        resolve(MOCK_PROJECTS.map((p) => ({ ...p })));
      }, 800);
    });
  }
}
