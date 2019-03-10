import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromModel from "../../models";

export const getTitleState = createFeatureSelector<fromModel.TitleState>(
  "title"
);

export const getTitle = createSelector(
  getTitleState,
  (state: fromModel.TitleState) => state.entities
);
