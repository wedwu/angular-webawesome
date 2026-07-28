import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { App } from './app/app';

import { setBasePath } from './app/webawesome';

setBasePath('https://cdn.jsdelivr.net/npm/@awesome.me/webawesome@latest/dist');

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
