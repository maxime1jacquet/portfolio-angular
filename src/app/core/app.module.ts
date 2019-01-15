import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';

import * as fromComponents  from './components';
import * as fromContainers  from './containers';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  providers: [],
  bootstrap: [
    fromContainers.AppComponent
  ]
})
export class AppModule { }
