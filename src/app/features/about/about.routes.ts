import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromComponents from './components';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.AboutComponent
    // children: [
    //   {
    //     path: 'peoples',
    //     component: fromContainers.PeoplesComponent
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
