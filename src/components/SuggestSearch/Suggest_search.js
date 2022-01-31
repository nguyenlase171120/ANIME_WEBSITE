import { useEffect, useState } from "react";
import { FilmAPI } from "../../api/FilmAPI";
import MovieWatch from "../SuggestMovie/MovieWatch";

function Suggest_movie() {
  const [suggestMovie, setSuggestMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const movieApi = await FilmAPI.getFilmRandom(4);
    if (movieApi) {
      setSuggestMovie(movieApi.data);
      setIsLoading(true);
    }
  }, []);

  return (
    <div className=" w-full">
      {isLoading ? (
        <MovieWatch value={suggestMovie} />
      ) : (
        <h1 className="text-white">Loading....</h1>
      )}
      ;
    </div>
  );
}

export default Suggest_movie;
