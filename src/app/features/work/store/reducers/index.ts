import { ActionReducerMap } from "@ngrx/store";

import * as fromModel from "../../models";
import * as fromWork from "./work.reducer";

export const reducers: ActionReducerMap<fromModel.WorksState> = {
  work: fromWork.reducer
};
