import { Injectable } from "@angular/core";
import { of } from "rxjs";
import {
  catchError,
  switchMap,
  mergeMap,
  withLatestFrom,
  tap
} from "rxjs/operators";

import { Store } from "@ngrx/store";
import { Effect, Actions, ofType } from "@ngrx/effects";

import * as fromActions from "../actions";
import * as fromServices from "../../services";
import * as fromModel from "../../models";
import * as fromSelectors from "../selectors";

@Injectable()
export class WorkEffect {
  constructor(
    private action$: Actions,
    private workService: fromServices.WorkService,
    private store: Store<fromModel.WorksState>
  ) {}

  @Effect()
  loadWork$ = this.action$.pipe(
    ofType<fromActions.WorkActions>(fromActions.WorkActionTypes.LOAD_WORK),
    mergeMap(() => {
      return this.workService.getWork().pipe(
        mergeMap((work: Array<fromModel.Work>) => [
          new fromActions.LoadWorkSuccess(work)
        ]),
        catchError(error => of(new fromActions.LoadWorkFail(error)))
      );
    })
  );
}
