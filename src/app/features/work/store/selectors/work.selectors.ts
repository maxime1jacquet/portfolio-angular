import { createSelector } from "@ngrx/store";
import * as fromModel from "../../models";

import { getWorksState } from "./work-state.selectors";
import * as fromReducer from "../reducers/work.reducer";

const { selectAll, selectEntities } = fromReducer.adapter.getSelectors();

export const getWorkState = createSelector(
  getWorksState,
  (state: fromModel.WorksState) => state.work
);

export const getWorksEntities = createSelector(
  getWorkState,
  selectEntities
);

export const getAllWorks = createSelector(
  getWorkState,
  selectAll
);

export const getWorksLoading = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loading
);

export const getWorksLoaded = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loaded
);
