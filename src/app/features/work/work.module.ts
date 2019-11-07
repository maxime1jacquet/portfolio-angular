import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WorkRoutingModule } from './work.routes';

import { reducers, effects } from './store';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromServices from './services';
import { SanitizeCssPipe } from './pipes/sanitizeCss.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WorkRoutingModule,
    StoreModule.forFeature('work', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.components,
    SanitizeCssPipe
  ],
  providers: [...fromServices.services]
})
export class WorkModule {}
