import { createSelector } from "@ngrx/store";
import * as fromModel from "../../models";

import { getWorksState } from "./work-state.selectors";
import * as fromReducer from "../reducers/work.reducer";

const { selectAll, selectEntities } = fromReducer.adapter.getSelectors();

export const getWorkState = createSelector(
  getWorksState,
  (state: fromModel.WorksState) => state.work
);

export const getResultsEntities = createSelector(
  getWorkState,
  selectEntities
);

export const getAllWorks = createSelector(
  getWorkState,
  selectAll
);

export const getResultsLoading = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loading
);

export const getResultsLoaded = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loaded
);
