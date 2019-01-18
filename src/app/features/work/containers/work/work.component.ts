import { Component, OnInit } from '@angular/core';

import { HttpClient }             from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map }        from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public config;
  public index;

  public works;
  public loaded:boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadedPage();
    this.getData();
  }

  public loadedPage():void{
    setTimeout(() => {
      this.loaded = true;
    }, 200);
  }

  private getData():void{
    this.http
    .get<any>('/assets/api.json')
    .pipe(catchError((error: any) => throwError(error.json())))
    .subscribe((val) => {
      this.works = val
    });
  }


}
