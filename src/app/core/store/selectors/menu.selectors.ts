import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromModel from "../../models";

export const getMenuState = createFeatureSelector<fromModel.MenuState>(
	'menu'
);

export const getMenuIsOpen = createSelector(
	getMenuState,
	(state: fromModel.MenuState) => state.isOpen
);
