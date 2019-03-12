import { Action } from "@ngrx/store";
import * as fromModel from "../../models";
import { Update } from "@ngrx/entity";

export const enum WorkActionTypes {
  LOAD_WORK = "[Work] Load Work",
  LOAD_WORK_SUCESS = "[Work] Load Work Sucess",
  LOAD_WORK_FAIL = "[Work] Load Work Fail"
}

export class LoadWork implements Action {
  readonly type = WorkActionTypes.LOAD_WORK;
}

export class LoadWorkSuccess implements Action {
  readonly type = WorkActionTypes.LOAD_WORK_SUCESS;
  constructor(public payload: Array<fromModel.Work>) {}
}

export class LoadWorkFail implements Action {
  readonly type = WorkActionTypes.LOAD_WORK_FAIL;
  constructor(public payload: any) {}
}

// Action types
export type WorkActions = LoadWork | LoadWorkSuccess | LoadWorkFail;
