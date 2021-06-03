import env from "./env";

export const moviePopular = (page = 1) => {
  return {
    api_key: env.API_KEY,
    language: "en-US",
    page: page,
  };
};

export const movieNowPlaying = (page = 1) => {
  return {
    api_key: env.API_KEY,
    language: "en-US",
    page: page,
  };
};

export const tvAiring = (page = 1) => {
  return {
    api_key: env.API_KEY,
    language: "en-US",
    page: page,
  };
};

export const tvPopular = (page = 1) => {
  return {
    api_key: env.API_KEY,
    language: "en-US",
    page: page,
  };
};
