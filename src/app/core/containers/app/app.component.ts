import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as fromModel from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../../../../node_modules/sanitize.css/sanitize.css',
    '../../../../../node_modules/normalize.css/normalize.css',
    '../../../../stylesheets/_reset.scss',
    '../../../../stylesheets/components/_button.scss',
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public menuState$: Observable<fromModel.MenuState>;
  public title$: Observable<fromModel.TitleState>;

  constructor(private store: Store<fromModel.AppcoreState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTitle());
    this.menuState$ = this.store.select(fromStore.getMenuState);
    this.title$ = this.store.select(fromStore.getTitleState);
  }

  public openMenu(): void {
    this.store.dispatch(new fromStore.menuToggle());
  }

  public closeMenu(): void {
    this.store.dispatch(new fromStore.menuClose());
  }
}
