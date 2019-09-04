import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromModel from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  @Output() onOpenMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store<fromModel.AppcoreState>) {}

  ngOnInit() {}

  public openMenu(): void {
    this.onOpenMenu.emit();
  }

  public loadPage(route: string) {
    this.store.dispatch(
      new fromStore.Go({
        path: [route]
      })
    );
  }
}
