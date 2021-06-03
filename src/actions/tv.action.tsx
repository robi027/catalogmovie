import TvRepo from "../data/remote/repository/TvRepo";
import { tvAiring, tvPopular } from "../data/remote/params";

export enum TVAction {
  TV_REQUEST = "TV_REQUEST",
  TV_REQUEST_POPULAR = "TV_REQUEST_POPULAR",
  TV_FAILURE = "TV_FAILURE",
  TV_AIRING_SUCCESS = "TV_AIRING_SUCCESS",
  TV_POPULAR_SUCCESS = "TV_POPULAR_SUCCESS",
}

function onRequest() {
  return {
    type: TVAction.TV_REQUEST,
  };
}

function onRequestPopular() {
  return {
    type: TVAction.TV_REQUEST_POPULAR,
  };
}

function onFailure(err: any) {
  return {
    type: TVAction.TV_FAILURE,
    message: err.message,
  };
}

function onSuccessAiring(data: any) {
  return {
    type: TVAction.TV_AIRING_SUCCESS,
    data: data,
  };
}

export function getAiring() {
  return (dispatch: any) => {
    dispatch(onRequest());
    return TvRepo.getAiring(tvAiring())
      .then((res) => {
        dispatch(onSuccessAiring(res));
      })
      .catch((err) => {
        dispatch(onFailure(err));
      });
  };
}

function onSuccessPopular(data: any) {
  return {
    type: TVAction.TV_POPULAR_SUCCESS,
    data: data,
  };
}

export function getPopular() {
  return (dispatch: any) => {
    dispatch(onRequestPopular());
    return TvRepo.getPopular(tvPopular())
      .then((res) => {
        dispatch(onSuccessPopular(res));
      })
      .catch((err) => {
        dispatch(onFailure(err));
      });
  };
}
