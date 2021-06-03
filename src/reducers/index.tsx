import { combineReducers } from "redux";
import MovieReducer from "./movie.reducer";

const rootReducer = combineReducers({
  Movie: MovieReducer,
});

export default rootReducer;
