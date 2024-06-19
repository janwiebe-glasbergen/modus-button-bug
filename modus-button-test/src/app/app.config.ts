import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { defineCustomElements } from '@trimble-oss/modus-web-components/loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),     {
    provide: APP_INITIALIZER,
    useFactory: () => defineCustomElements,
    multi: true,
  },]
};
