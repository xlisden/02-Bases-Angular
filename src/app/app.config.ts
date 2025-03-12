import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),

    // HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    // agrega un # para que no redireccione a la carpeta del path. Pero igual muestra

  ]



};
