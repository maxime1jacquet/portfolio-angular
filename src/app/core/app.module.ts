import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';

import { reducers, effects, CustomSerializer } from './store';
import { AppRoutingModule } from './app.routes';

import { environment } from '../../environments/environment';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromModels from './models';
import * as fromServices from './services';

export const metaReducers: MetaReducer<
  fromModels.AppcoreState
>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'maximejacquet' }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : []
  ],
  declarations: [...fromContainers.components, ...fromComponents.components],
  providers: [...fromServices.services],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
