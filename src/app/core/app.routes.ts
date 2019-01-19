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
    loadChildren: '../features/work/work.module#WorkModule',
  },
  { 
    path: 'about',
    loadChildren: '../features/about/about.module#AboutModule',
  },
  { 
    path: 'contact',
    loadChildren: '../features/contact/contact.module#ContactModule',
  },
  { 
    path: '**',
    redirectTo: 'work'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


