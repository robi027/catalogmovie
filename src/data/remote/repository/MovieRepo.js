import ApiClient from "../apiClient";
import apiUrl from "../apiUrl";
import header from "../header";

export default class MovieRepo {
  static async getPopular(params) {
    const response = await ApiClient.get(
      apiUrl.MOVIE_POPULER,
      header.getHeader(),
      params
    );
    return response;
  }

  static async getNowPlaying(params) {
    const response = await ApiClient.get(
      apiUrl.MOVIE_NOW_PLAYING,
      header.getHeader(),
      params
    );

    return response;
  }
}
