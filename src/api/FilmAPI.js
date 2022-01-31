import axiosClient from "./axiosClient";

export const FilmAPI = {
  getAllFilm: (params) => {
    const url = "/v1/anime";
    return axiosClient.get(url, { params });
  },
  getFilmRandom: (params) => {
    const url = `/v1/random/anime/${params}/true`;
    return axiosClient.get(url);
  },
  getEpisode: (params) => {
    const url = "/v1/episode";
    return axiosClient.get(url, { params });
  },
};
