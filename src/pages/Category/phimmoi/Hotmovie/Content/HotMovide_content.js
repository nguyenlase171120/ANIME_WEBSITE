import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RenderStar from "../../StarFilm/RenderStar";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../../../../redux/Reducer/Phimmoi_slice";

function HotMovide_content(props) {
  const [listMovie, setListMovie] = useState(props.listHotMovie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetailsMovie = (animeClick) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(animeClick));
    navigate("/details-movie");
  };

  const renderListMovie = () => {
    return listMovie.map((value) => (
      <div>
        <h1 className="text-yellow-600 font-bold text-[21px] my-[20px]  w-[340px]  uppercase">
          {value.name}
        </h1>
        <div className="overflow-y-scroll w-[340px] h-[500px] ">
          {value.list_film.data.map((anime) => (
            <div className="flex w-full mb-[15px] items-center ">
              <div className="relative">
                <div onClick={() => handleDetailsMovie(anime)}>
                  <img
                    src={anime.cover_image}
                    className="w-[60px] mt-[10px] rounded-lg h-[100px] mr-[20px] mb-[20px] object-cover cursor-pointer hover:scale-110"
                    id={anime.id}
                    alt="Loading..."
                  />
                </div>
                <p className="text-white bg-yellow-500 inline p-[4px]  rounded-lg absolute top-[0] left-[25%]">
                  {anime.score}
                </p>
              </div>
              <div className="flex flex-col ml-[15px] w-[60%]">
                <div
                  onClick={() => handleDetailsMovie(anime)}
                  className="text-white hover:underline cursor-pointer font-semibold "
                >
                  {anime.titles.en}
                </div>

                <RenderStar scoreAnime={anime.score} key={anime.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return <div>{renderListMovie()}</div>;
}

export default HotMovide_content;
