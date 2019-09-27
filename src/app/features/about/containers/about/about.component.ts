import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about$: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.request();
  }

  public request() {
    const endpoint = `${environment.endpoint}/about`;
    this.about$ = ajax(endpoint).pipe(map(data => data.response.data));
  }
}
