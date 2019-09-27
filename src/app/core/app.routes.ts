import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkPreload } from './services/network-preload.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('../features/work/work.module').then(m => m.WorkModule)
  },
  {
    path: '**',
    redirectTo: 'work'
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
