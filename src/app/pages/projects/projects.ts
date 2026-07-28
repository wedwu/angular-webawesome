import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

import { Header } from '@/components/header/header';
import { NavBar } from '@/components/nav-bar/nav-bar';
import { Footer } from '@/components/footer/footer';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb';
import { Aside } from '@/components/aside/aside';
import { UsersTable } from '@/components/table/users-table';

@Component({
  selector: 'app-projects',
  imports: [Header, NavBar, Footer, Breadcrumb, Aside, UsersTable],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projects {
  readonly usersLoaded = signal(false);
}
