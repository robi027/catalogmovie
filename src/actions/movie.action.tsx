import MovieRepo from "../data/remote/repository/MovieRepo";
import { movieNowPlaying, moviePopular } from "../data/remote/params";

export enum MovieAction {
  MOVIE_REQUEST = "MOVIE_REQUEST",
  MOVIE_POPULAR_REQUEST = "MOVIE_POPULAR_REQUEST",
  MOVIE_FAILURE = "MOVIE_FAILURE",
  MOVIE_POPULAR_SUCCESS = "MOVIE_POPULAR_SUCCESS",
  MOVIE_NOW_PLAYING_SUCCESS = "MOVIE_NOW_PLAYING_SUCCESS",
}

function onRequest() {
  return {
    type: MovieAction.MOVIE_REQUEST,
  };
}

function onRequestPopular() {
  return {
    type: MovieAction.MOVIE_POPULAR_REQUEST,
  };
}

function onFailure(err: any) {
  return {
    type: MovieAction.MOVIE_FAILURE,
    message: err.message,
  };
}

function onSuccessPopular(data: any) {
  return {
    type: MovieAction.MOVIE_POPULAR_SUCCESS,
    data: data,
  };
}

export function getPopular() {
  return (dispatch: any) => {
    dispatch(onRequestPopular());
    return MovieRepo.getPopular(moviePopular())
      .then((res) => {
        dispatch(onSuccessPopular(res));
        return res;
      })
      .catch((err) => {
        dispatch(onFailure(err));
        return err;
      });
  };
}

function onSuccessNowPlaying(data: any) {
  return {
    type: MovieAction.MOVIE_NOW_PLAYING_SUCCESS,
    data: data,
  };
}

export function getNowPlaying() {
  return (dispatch: any) => {
    dispatch(onRequest());
    return MovieRepo.getNowPlaying(movieNowPlaying())
      .then((res) => {
        dispatch(onSuccessNowPlaying(res));
        return res;
      })
      .catch((err) => {
        dispatch(onFailure(err));
        return err;
      });
  };
}
