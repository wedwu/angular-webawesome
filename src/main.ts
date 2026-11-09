import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { App } from './app/app';

import { setBasePath } from './app/webawesome';

import waPackage from '@awesome.me/webawesome/package.json';

// Load icons and assets from the same Web Awesome version the app is built with.
setBasePath(`https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@${waPackage.version}/dist`);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
