import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
// import { StoreModule }   from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

import { SwiperModule }           from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG }          from 'ngx-swiper-wrapper';
import { SwiperConfigInterface }  from 'ngx-swiper-wrapper';

import { WorkRoutingModule } from './work.routes';

// import { reducers, effects } from './store';

import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromServices   from "./services";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // mousewheel: true,
  mousewheel: {
    sensitivity: 100,
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WorkRoutingModule,
    SwiperModule,
    // StoreModule.forFeature('maxime', reducers),
    // EffectsModule.forFeature(effects),
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
  ],
  providers: [
    // ...fromServices.services
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class WorkModule { }
