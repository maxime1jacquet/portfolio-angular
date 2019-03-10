import { createSelector, createFeatureSelector } from "@ngrx/store";

import * as fromRouter from "@ngrx/router-store";
import * as fromModel from "../../models";

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromModel.RouterStateCustom>
>("router");

export const getRouterStateContent = createSelector(
  getRouterState,
  (routerstate: fromRouter.RouterReducerState<fromModel.RouterStateCustom>) =>
    routerstate && routerstate.state
);

export const getRouterStateUrl = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.url
);

export const getRouterStateParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.params
);

export const getRouterStateQueryParams = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) =>
    routerstate && routerstate.queryParams
);

export const getRouterStateDatas = createSelector(
  getRouterStateContent,
  (routerstate: fromModel.RouterStateCustom) => routerstate && routerstate.data
);

export const getRouterStateKeywords = createSelector(
  getRouterStateParams,
  (params): string => params && params.k
);

export const getRouterStateTab = createSelector(
  getRouterStateQueryParams,
  (params): string => params && params.tab
);

export const getRouterStateCategory = createSelector(
  getRouterStateParams,
  (params): string => params && params.category
);

export const getRouterStateSlug = createSelector(
  getRouterStateParams,
  (params): string => params && params.slug
);

export const getRouterStateStep = createSelector(
  getRouterStateDatas,
  (datas): number => datas && datas.step
);

export const getRouterSeo = createSelector(
  getRouterStateDatas,
  (datas): any => datas && datas.seo
);

export const getRouterStatePage = createSelector(
  getRouterStateQueryParams,
  (params): number => (params && params.page ? params.page * 1 : 1)
);

export const getRouterStatePagesize = createSelector(
  getRouterStateQueryParams,
  (params): number => (params && params.pagesize ? params.pagesize * 1 : 10)
);
