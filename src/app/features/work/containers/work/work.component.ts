import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromModel from '../../models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public config: any;
  public index: any;

  public works$: Observable<fromModel.Work[]>;
  public loaded$: Observable<boolean>;
  public loadede = false;

  constructor(private store: Store<fromModel.WorksState>) {}

  ngOnInit() {
    this.loadedPage();

    this.store.dispatch(new fromStore.LoadWork());
    this.works$ = this.store.select(fromStore.getAllWorks);
    this.loaded$ = this.store.select(fromStore.getWorksLoaded);
  }

  private loadedPage(): void {
    setTimeout(() => {
      this.loadede = true;
    }, 100);
  }
}
