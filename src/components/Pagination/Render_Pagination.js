import { FilmAPI } from "../../api/FilmAPI";

export const ListRender = async (name, number) => {
  const params = {
    page: number,
    per_page: 20,
  };
  const listFilmApi = await FilmAPI.getAllFilm(params);
  const value_film = {
    name: name,
    list_anime: listFilmApi.data.documents,
  };

  return value_film;
};
