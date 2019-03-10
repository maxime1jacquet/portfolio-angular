import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../../../environments/environment";
import * as fromModel from "../models";

@Injectable()
export class WorkService {
  constructor(private http: HttpClient) {}

  public getWork(): Observable<Array<fromModel.Work>> {
    const endpoint: string = `${environment.endpoint}/project`;

    return this.http.get<Array<fromModel.Work>>(endpoint).pipe(
      map((x: any) => {
        return x.data;
      }),
      catchError((error: any) => throwError(error.json()))
    );
  }
}
