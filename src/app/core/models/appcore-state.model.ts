import * as fromModel from ".";
// import * as fromSharedModel from "../../shared/models";
import * as fromRouter from "@ngrx/router-store";

export interface AppcoreState {
  router: fromRouter.RouterReducerState<fromModel.RouterStateCustom>;
  menu: fromModel.MenuState;
  title: fromModel.TitleState;
}
