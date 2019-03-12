import { createEntityAdapter } from "@ngrx/entity";

import * as fromActions from "../actions";
import * as fromModels from "../../models";

function customIds(work: fromModels.Work): string {
  return work.slug;
}
function sortById(a: fromModels.Work, b: fromModels.Work): number {
  // return a.id.localeCompare(b.id);
  return b.id - a.id;
}
export const adapter = createEntityAdapter<fromModels.Work>({
  selectId: customIds,
  sortComparer: sortById
});

const initialState: fromModels.WorkState = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state: fromModels.WorkState = initialState,
  action: fromActions.WorkActions
): fromModels.WorkState {
  switch (action.type) {
    case fromActions.WorkActionTypes.LOAD_WORK:
      return {
        ...state,
        loading: true
      };

    case fromActions.WorkActionTypes.LOAD_WORK_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false
      };

    case fromActions.WorkActionTypes.LOAD_WORK_SUCESS:
      return adapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

    default:
      return state;
  }
}
