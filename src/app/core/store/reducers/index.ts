import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromModel from '../../models';

import * as fromMenufrom from './menu.reducer';

export const reducers: ActionReducerMap<fromModel.AppcoreState> = {
  router: fromRouter.routerReducer,
  menu: fromMenufrom.reducer
};
