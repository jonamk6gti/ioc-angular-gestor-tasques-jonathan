import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCa from '@angular/common/locales/ca';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

registerLocaleData(localeCa);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'ca' }
  ]
};
