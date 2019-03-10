import * as fromActions from "../actions";
import * as fromModels from "../../models";

const initialState: fromModels.WorkState = {
  entities: null,
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
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
      return {
        ...state,
        entities: action.payload,
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
}
