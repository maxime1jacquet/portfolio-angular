import { Component, ViewEncapsulation } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromStore from "../../store";
import * as fromModel from "../../models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "../../../../../node_modules/sanitize.css",
    "../../../../../node_modules/normalize.css",
    "../../../../stylesheets/_reset.scss",
    "./app.component.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public menuState$: Observable<fromModel.MenuState>;

  constructor(private store: Store<fromModel.AppcoreState>) {}

  ngOnInit() {
    this.menuState$ = this.store.select(fromStore.getMenuState);
  }

  public openMenu(): void {
    this.store.dispatch(new fromStore.menuToggle());
  }

  public closeMenu(): void {
    this.store.dispatch(new fromStore.menuClose());
  }
}
