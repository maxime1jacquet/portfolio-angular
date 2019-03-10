import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import * as fromModel from "../models";

@Injectable()
export class TitleService {
  constructor(private http: HttpClient) {}

  public getTitle(): Observable<Array<fromModel.Title>> {
    const endpoint: string = `${environment.endpoint}/experiences`;

    return this.http.get<Array<fromModel.Title>>(endpoint).pipe(
      map((x: any) => {
        return x.data;
      }),
      catchError((error: any) => throwError(error.json()))
    );
  }
}
