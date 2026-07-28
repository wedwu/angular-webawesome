import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, signal } from '@angular/core';

import { Header } from '@/components/header/header';
import { NavBar } from '@/components/nav-bar/nav-bar';
import { Footer } from '@/components/footer/footer';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb';
import { Aside } from '@/components/aside/aside';
import { Card } from '@/components/card/card';
import { UsersTable } from '@/components/table/users-table';
import { ProjectsService } from '@/api/projects.service';
import type { LoadState, Project } from '@/models';

@Component({
  selector: 'app-dashboard',
  imports: [Header, NavBar, Footer, Breadcrumb, Aside, Card, UsersTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dashboard implements OnInit {
  private readonly projectsService = inject(ProjectsService);

  readonly usersLoaded = signal(false);
  readonly state = signal<LoadState>('loading');
  readonly loadedAt = signal<number | null>(null);
  readonly projects = signal<Project[]>([]);
  readonly projectsLoaded = signal(false);

  ngOnInit(): void {
    this.load();
  }

  load = (): void => {
    this.state.set('loading');
    this.projectsLoaded.set(false);
    this.projectsService
      .fetchProjects()
      .then((data) => {
        this.projects.set(data);
        this.state.set('ready');
        this.loadedAt.set(Date.now());
        this.projectsLoaded.set(true);
      })
      .catch(() => {
        this.state.set('error');
        this.projectsLoaded.set(false);
      });
  };
}
