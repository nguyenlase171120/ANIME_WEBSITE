import { useEffect, useState } from "react";
import { FilmAPI } from "../../../api/FilmAPI";
import ListFilms from "../../../components/ListFilm/ListFilms";
import Search_film from "../../../components/Search/Search_film";

function Phimle() {
  const [listFilm, setListFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const params = {
      page: 20,
    };
    const listFilmApi = await FilmAPI.getAllFilm(params);
    const arrayLoop = listFilmApi.data.documents;

    const newAnime = [];
    const array = [];

    for (let i = 0; i < arrayLoop.length; i++) {
      if (i < 20) {
        newAnime.push(arrayLoop[i]);
      }
    }

    const value_film = {
      name: "Phim lẻ cập nhật",
      list_anime: newAnime,
    };

    array.push(value_film);

    setListFilm(array);
    setIsLoading(true);
  }, []);

  return (
    <div className="mt-[76px] element_center flex-col w-[80%] pt-[30px]">
      <Search_film />
      {isLoading ? (
        <ListFilms listFilmParams={listFilm} />
      ) : (
        <h1 className="text-white font-bold ">Loading...</h1>
      )}
    </div>
  );
}

export default Phimle;
