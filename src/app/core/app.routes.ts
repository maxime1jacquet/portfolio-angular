import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkPreload } from './services/network-preload.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../features/about/about.module').then(m => m.AboutModule)
  // },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('../features/work/work.module').then(m => m.WorkModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      preloadingStrategy: NetworkPreload,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
