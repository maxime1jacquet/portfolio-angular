import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromRootStore from "../../../../core/store";
import * as fromRootModel from "../../../../core/models";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  public idOpenExp: boolean = false;
  public loaded: boolean = false;
  public title$: Observable<fromRootModel.TitleState>;

  constructor(
    private title: Title,
    private meta: Meta,
    private store: Store<fromRootModel.AppcoreState>
  ) {}

  ngOnInit() {
    this.title.setTitle("A propos de moi → Maxime Jacquet front end developer");
    this.meta.addTag({
      name: "description",
      content: "front end developer at Yoozly"
    });
    this.title$ = this.store.select(fromRootStore.getTitleState);
    this.loadedPage();
  }

  public openExp(): void {
    this.idOpenExp = !this.idOpenExp;
  }

  private loadedPage(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  }
}
