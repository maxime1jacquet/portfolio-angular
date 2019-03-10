import * as fromActions from '../actions';
import * as fromModels from '../../models';

const initialState:fromModels.MenuState = {
  isOpen : false
};

export function reducer(
	state= initialState,
	action : fromActions.MenuActions
): fromModels.MenuState {

	switch (action.type) {

    case fromActions.MenuActionTypes.MENU_OPEN:
      return {
          ...state,
          isOpen : true
      };

    case fromActions.MenuActionTypes.MENU_CLOSE:
      return {
        ...state,
        isOpen : false
      };

    case fromActions.MenuActionTypes.MENU_TOGGLE:
      return {
        ...state,
        isOpen : !state.isOpen
      };

		default:
			return state;
	}
}
