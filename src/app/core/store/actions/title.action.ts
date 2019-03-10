import { Action } from "@ngrx/store";
import * as fromModel from "../../models";

export const enum LoadTitleActionTypes {
  LOAD_TITLE = "[App] Load Title",
  LOAD_TITLE_SUCCESS = "[App] Load Title Success",
  LOAD_TITLE_FAIL = "[App] Load Title Fail"
}

export class LoadTitle implements Action {
  readonly type = LoadTitleActionTypes.LOAD_TITLE;
  constructor() {}
}

export class LoadTitleSuccess implements Action {
  readonly type = LoadTitleActionTypes.LOAD_TITLE_SUCCESS;
  constructor(public payload: Array<fromModel.Title>) {}
}

export class LoadTitleFail implements Action {
  readonly type = LoadTitleActionTypes.LOAD_TITLE_FAIL;
  constructor(public payload: any) {}
}

export type LoadTitleActions = LoadTitle | LoadTitleSuccess | LoadTitleFail;
