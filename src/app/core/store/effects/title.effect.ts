import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";

import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as fromActions from "../actions";
import * as fromServices from "../../services/title.service";

import * as fromModel from "../../models";

@Injectable()
export class TitleEffects {
  constructor(
    private action$: Actions,
    private titleService: fromServices.TitleService
  ) {}

  @Effect()
  loadTitle$ = this.action$.pipe(
    ofType<fromActions.LoadTitle>(fromActions.LoadTitleActionTypes.LOAD_TITLE),
    mergeMap(() => {
      return this.titleService.getTitle().pipe(
        mergeMap((title: Array<fromModel.Title>) => [
          new fromActions.LoadTitleSuccess(title)
        ]),
        catchError(error => of(new fromActions.LoadTitleFail(error)))
      );
    })
  );
}
