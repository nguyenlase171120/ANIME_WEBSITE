import { useEffect, useState } from "react";
import { FilmAPI } from "../../../api/FilmAPI";
import RenderStar from "../../../pages/Category/phimmoi/StarFilm/RenderStar";
import { FaTicketAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../../redux/Phimmoi_redux/Phimmoi_slice";

function Suggest_movie() {
  const [suggestMovie, setSuggestMovie] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const movieApi = await FilmAPI.getFilmRandom(4);
    if (movieApi) {
      setSuggestMovie(movieApi.data);
    }
  }, []);

  const handleDetail = (value) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(value));
    window.location.reload();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="element_center  w-full flex-col">
      <h1 className="font-bold uppercase text-[#f1b722] mt-[10px] mb-[30px] text-[28px] ">
        Có thể bạn cũng muốn xem
      </h1>
      <div className="grid grid-cols-4 w-full justify-items-center ">
        {suggestMovie
          ? suggestMovie.map((value) => (
              <div className="w-full element_center flex-col ">
                <div
                  className="element_center  flex-col "
                  onClick={() => handleDetail(value)}
                >
                  <img
                    src={value.cover_image}
                    className="w-[168px] h-[256px] object-cover rounded-lg mb-[15px] cursor-pointer"
                  />
                </div>

                <div className="flex w-[170px] h-[200px] flex-col">
                  <RenderStar scoreAnime={value.score} />
                  <h1 className="text-white cursor-pointer hover:underline font-bold text-[20px]">
                    {value.titles.en}
                  </h1>

                  <div className="flex items-center  flex-row">
                    <FaTicketAlt className="text-yellow-500 mr-[15px]" />
                    <div
                      className="underline text-[#cad3da] hover:text-white "
                      to="/"
                    >
                      {value.genres[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default Suggest_movie;
