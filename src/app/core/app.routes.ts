import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'work',
    pathMatch: 'full'
  },
  {
    path: 'work',
    loadChildren: () =>
      import('../features/work/work.module').then((m) => m.WorkModule)
  },
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('../features/about/about.module').then(m => m.AboutModule)
  // },
  {
    path: 'contact',
    loadChildren: () =>
      import('../features/contact/contact.module').then((m) => m.ContactModule)
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
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
