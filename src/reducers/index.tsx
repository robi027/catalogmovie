import { combineReducers } from "redux";
import MovieReducer from "./movie.reducer";
import TVReducer from "./tv.reducer";

const rootReducer = combineReducers({
  Movie: MovieReducer,
  TV: TVReducer,
});

export default rootReducer;
