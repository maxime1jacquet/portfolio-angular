// import { Injectable } from '@angular/core';
// import { of } from 'rxjs';
// import { catchError, switchMap, mergeMap, map, withLatestFrom } from 'rxjs/operators';

// import { Store } from '@ngrx/store';
// import { Effect, Actions, ofType } from '@ngrx/effects';

// import * as fromActions from '../actions';
// import * as fromServices from "../../services";
// import * as fromSelectors from "../../store/selectors";
// import * as fromModel from "../../models";

// @Injectable()
// export class AutocompleteEffect {

// 	constructor(
// 		private action$             : Actions,
// 		private autocompleteService : fromServices.AutocompleteService,
//     private store               : Store<fromModel.AppcoreState>
// 	){}

// 	@Effect()
//   geocoding$ = this.action$.pipe(
//     ofType<fromActions.LoadAutocomplete>(fromActions.AutocompleteActionTypes.LOAD_AUTOCOMPLETE),
//     withLatestFrom(this.store.select(fromSelectors.getRouterStateKeywords)),
//     switchMap(([action, keywordsFromURL]) => {
//       const keywordsFromPayload: string = action.payload;
//       const keywords = keywordsFromPayload !== null ? keywordsFromPayload : keywordsFromURL;
//       return this.autocompleteService.autocomplete(keywords)
//         .pipe(
//           map( (agencies:Array<string>) => new fromActions.LoadAutocompleteSuccess(agencies) ),
//           catchError(error => of(new fromActions.LoadAutocompleteFail(error)))
//         );
//     })
//   );

// }
