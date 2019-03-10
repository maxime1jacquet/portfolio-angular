import { Action } from "@ngrx/store";

export const enum MenuActionTypes {
  MENU_OPEN = "[AppCore] Menu Open",
  MENU_CLOSE = "[AppCore] Menu Close",
  MENU_TOGGLE = "[AppCore] Menu Toggle"
}

export class menuOpen implements Action {
  readonly type = MenuActionTypes.MENU_OPEN;
}

export class menuClose implements Action {
  readonly type = MenuActionTypes.MENU_CLOSE;
}

export class menuToggle implements Action {
  readonly type = MenuActionTypes.MENU_TOGGLE;
}

export type MenuActions = menuOpen | menuClose | menuToggle;
