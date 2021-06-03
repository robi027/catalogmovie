import Env from "./env";

const V3 = "3";

//Movie
const MOVIE_POPULER = Env.BASE_URL + "/" + V3 + "/movie/popular";
const MOVIE_NOW_PLAYING = Env.BASE_URL + "/" + V3 + "/movie/now_playing";

//TV
const TV_AIRING = Env.BASE_URL + "/" + V3 + "/tv/airing_today";
const TV_POPULAR = Env.BASE_URL + "/" + V3 + "/tv/popular";

export default {
  MOVIE_POPULER,
  MOVIE_NOW_PLAYING,
  TV_AIRING,
  TV_POPULAR,
};
