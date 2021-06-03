import { TVAction } from "../actions/tv.action";

const initState = {
  isLoading: false,
  isLoadingPopular: false,
  dataAiring: {},
  dataPopular: {},
};

export default function tv(state: any = initState, action: any) {
  switch (action.type) {
    case TVAction.TV_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TVAction.TV_REQUEST_POPULAR:
      return {
        ...state,
        isLoadingPopular: true,
      };
    case TVAction.TV_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoadingPopular: false,
        message: action.message,
      };
    case TVAction.TV_AIRING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataAiring: action.data,
      };
    case TVAction.TV_POPULAR_SUCCESS:
      return {
        ...state,
        isLoadingPopular: false,
        dataPopular: action.data,
      };
    default:
      return state;
  }
}
