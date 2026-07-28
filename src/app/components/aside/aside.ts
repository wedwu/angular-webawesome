import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

@Component({
  selector: 'app-aside',
  host: { slot: 'aside' },
  templateUrl: './aside.html',
  styleUrl: './aside.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Aside {
  readonly usersLoaded = input(false);
  readonly showCallout = input(false);
}
