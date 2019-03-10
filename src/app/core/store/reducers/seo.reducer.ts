// import * as fromActions from "../actions";
// import * as fromModels from "../../models";
// import * as fromSharedModel from "../../../shared/models";

// const initialState: fromSharedModel.SeoMetas = {
//   seo: {
//     focuskw: "",
//     title: "",
//     metadesc: "",
//     noindex: "",
//     canonical: "",
//     opengraph_title: "",
//     opengraph_description: "",
//     opengraph_image: "",
//     twitter_title: "",
//     twitter_description: "",
//     twitter_image: ""
//   }
// };

// export function reducer(
//   state = initialState,
//   action: fromActions.SeoActions
// ): fromSharedModel.SeoMetas {
//   switch (action.type) {
//     case fromActions.SeoActionTypes.GET_SEO:
//       return state;

//     case fromActions.SeoActionTypes.GET_SEO_FAIL:
//       return state;

//     case fromActions.SeoActionTypes.GET_SEO_SUCCESS:
//       const payload = action.payload;
//       return {
//         ...(state = payload)
//       };

//     default:
//       return state;
//   }
// }
