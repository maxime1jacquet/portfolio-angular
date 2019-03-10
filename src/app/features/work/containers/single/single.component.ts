import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

import { environment } from "../../../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.scss"]
})
export class SingleComponent implements OnInit {
  public loaded: boolean = false;
  public work: any;
  public dateSplit: Array<string>;
  public tag: string;
  public endpoint: string = environment.endpoint;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.params["slug"];
    this.loadedPage();
    this.getData(slug);
  }

  private loadedPage(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 100);
  }

  private splitDate(date: string): Array<string> {
    if (date) return date.split("/");
  }
  private splitTags(tags: string): string {
    if (tags) return tags.split(',').join(', ');
  }

  private getData(keyword: number): void {
    this.http
      .get<any>(`${environment.endpoint}/project/slug/${keyword}`)
      .pipe(catchError((error: any) => throwError(error.json())))
      .subscribe(val => {
        this.work = val.data[0];
        this.dateSplit = this.splitDate(this.work.date);
        this.tag = this.splitTags(this.work.tag);
      });
  }
}
