import { createSelector } from "@ngrx/store";
import * as fromModel from "../../models";

import { getWorksState } from "./work-state.selectors";
import { environment } from "../../../../../environments/environment";

export const getWorkState = createSelector(
  getWorksState,
  (state: fromModel.WorksState) => state.work
);

export const getResultsLoading = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loading
);

export const getResultsLoaded = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.loaded
);

export const getResultsEntities = createSelector(
  getWorkState,
  (state: fromModel.WorkState) => state.entities
);
