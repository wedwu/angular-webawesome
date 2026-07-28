import { Component } from '@angular/core';

// Slotted into <wa-page slot="footer">. Because Angular renders a host element
// wrapper (unlike React), the slot attribute lives on the host and the host is
// laid out transparently with display: contents.
@Component({
  selector: 'app-footer',
  host: { slot: 'footer' },
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly year = new Date().getFullYear();
}
