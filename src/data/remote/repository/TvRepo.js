import apiClient from "../apiClient";
import apiUrl from "../apiUrl";
import header from "../header";

export default class TvRepo {
  static async getAiring(params) {
    const response = await apiClient.get(
      apiUrl.TV_AIRING,
      header.getHeader(),
      params
    );

    return response;
  }

  static async getPopular(params) {
    const response = await apiClient.get(
      apiUrl.TV_POPULAR,
      header.getHeader(),
      params
    );

    return response;
  }
}
