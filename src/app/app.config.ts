import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), MatInputModule, MatLabel, MatFormField, provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch())]
};
