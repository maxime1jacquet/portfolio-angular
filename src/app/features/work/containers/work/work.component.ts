import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import * as fromModel from "../../models";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
  public config: any;
  public index: any;

  public works$: Observable<fromModel.Work[]>;
  public loaded: boolean = false;

  constructor(
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    // private store: Store<fromModel.AppcoreState>
    private store: Store<fromModel.WorksState>
  ) {}

  ngOnInit() {
    this.title.setTitle("Maxime Jacquet → front end developer");
    this.meta.addTag({
      name: "description",
      content: "front end developer at Yoozly"
    });
    this.loadedPage();
    // this.getData();

    this.store.dispatch(new fromStore.LoadWork());
    this.works$ = this.store.select(fromStore.getResultsEntities);
  }

  private loadedPage(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  }

  // private getData(): void {
  //   this.http
  //     .get<any>(`${environment.endpoint}/project`)
  //     .pipe(catchError((error: any) => throwError(error.json())))
  //     .subscribe(val => {
  //       this.works = val.data;
  //     });
  // }
}
