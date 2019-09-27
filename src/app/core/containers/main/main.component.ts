import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as fromModel from '../../models';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: [
    '../../../../../node_modules/sanitize.css/sanitize.css',
    '../../../../../node_modules/normalize.css/normalize.css',
    '../../../../stylesheets/_reset.scss',
    '../../../../stylesheets/components/_button.scss',
    './main.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  public menuOpen = false;
  constructor() {}

  ngOnInit() {}

  toogleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
