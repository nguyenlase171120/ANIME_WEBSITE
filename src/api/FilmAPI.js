import axiosClient from "./axiosClient";

export const FilmAPI = {
  getAllFilm: (params) => {
    const url = "/v1/anime";
    return axiosClient.get(url, { params });
  },
};
