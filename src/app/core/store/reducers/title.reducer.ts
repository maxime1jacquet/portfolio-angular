import * as fromActions from "../actions";
import * as fromModels from "../../models";

const initialState: fromModels.TitleState = {
  entities: null,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromActions.LoadTitleActions
): fromModels.TitleState {
  switch (action.type) {
    case fromActions.LoadTitleActionTypes.LOAD_TITLE:
      return state;

    case fromActions.LoadTitleActionTypes.LOAD_TITLE_FAIL:
      return state;

    case fromActions.LoadTitleActionTypes.LOAD_TITLE_SUCCESS:
      const payload = action.payload;
      return {
        ...state,
        entities: payload,
        loaded: true
      };

    default:
      return state;
  }
}
