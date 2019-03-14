import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import * as fromModel from "../../models";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.scss"]
})
export class SingleComponent implements OnInit {
  public loaded: boolean = false;

  // public works$: Observable<fromModel.Work>;
  public works$: Observable<any>;
  public loaded$: Observable<boolean>;
  public slug: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromModel.WorksState>
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.params["slug"];
    this.store.dispatch(new fromStore.LoadWork());
    this.works$ = this.store.select(fromStore.getWorksEntities);
    this.loaded$ = this.store.select(fromStore.getWorksLoaded);
    this.loadedPage();
  }

  private loadedPage(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  }
}
