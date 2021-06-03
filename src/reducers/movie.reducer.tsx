import { MovieAction } from "../actions/movie.action";

const initState = {
  isLoading: false,
  isLoadingPopular: false,
  message: "",
  dataPopular: {},
  dataNowPlaying: {},
};

export default function Movie(state: any = initState, action: any) {
  switch (action.type) {
    case MovieAction.MOVIE_REQUEST:
      return {
        ...state,
        message: "",
        isLoading: true,
      };
    case MovieAction.MOVIE_POPULAR_REQUEST:
      return {
        ...state,
        message: "",
        isLoadingPopular: true,
      };
    case MovieAction.MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoadingPopular: false,
        message: action.message,
      };
    case MovieAction.MOVIE_POPULAR_SUCCESS:
      return {
        ...state,
        isLoadingPopular: false,
        dataPopular: action.data,
      };
    case MovieAction.MOVIE_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataNowPlaying: action.data,
      };
    default:
      return state;
  }
}
