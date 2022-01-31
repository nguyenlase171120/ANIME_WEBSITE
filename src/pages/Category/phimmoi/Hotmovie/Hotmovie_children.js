import { useState, useEffect } from "react";
import { FilmAPI } from "../../../../api/FilmAPI";
import HotMovide_content from "./Content/HotMovide_content";

function Hotmovie_children() {
  const [isLoading, setIsLoading] = useState(false);
  const [getAllFilm, setGetAllFilm] = useState([]);

  useEffect(async () => {
    try {
      const seriesMovieApi = await FilmAPI.getFilmRandom(10);
      const oddMovieApi = await FilmAPI.getFilmRandom(10);

      const serieMovie = {
        name: "Phim bộ hot",
        list_film: seriesMovieApi,
      };

      const oddMovie = {
        name: "Phim lẻ hot",
        list_film: oddMovieApi,
      };

      const new_list = [];
      new_list.push(serieMovie, oddMovie);
      if (new_list.length > 0) {
        setGetAllFilm(new_list);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="w-full">
      {isLoading ? (
        <HotMovide_content listHotMovie={getAllFilm} />
      ) : (
        <h1 className="text-lg text-white font-bold">Loading...</h1>
      )}
    </div>
  );
}

export default Hotmovie_children;
