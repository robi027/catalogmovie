import { MovieAction } from "../actions/movie.action";

const initState = {
  isLoading: true,
};

export default function Movie(state: any = initState, action: any) {
  switch (action.type) {
    case MovieAction.FAILURE:
      return {
        ...state,
        isLoading: true,
      };
    case MovieAction.FAILURE:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };
    case MovieAction.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default:
      return state;
  }
}
