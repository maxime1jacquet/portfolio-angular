import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
// import { StoreModule }   from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

import { AboutRoutingModule } from './about.routes';

// import { reducers, effects } from './store';

import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromServices   from "./services";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AboutRoutingModule,
    // StoreModule.forFeature('maxime', reducers),
    // EffectsModule.forFeature(effects),
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
  ],
  // providers: [
  //   ...fromServices.services
  // ]
})
export class AboutModule { }
