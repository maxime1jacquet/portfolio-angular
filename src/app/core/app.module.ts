import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { HttpClientModule }               from '@angular/common/http';
import { FormsModule }                    from '@angular/forms';
import { PLATFORM_ID, APP_ID, Inject }    from '@angular/core';
import { isPlatformBrowser }              from '@angular/common';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }               from './app.routes';

import * as fromComponents                from './components';
import * as fromContainers                from './containers';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'maximejacquet' }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
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
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
