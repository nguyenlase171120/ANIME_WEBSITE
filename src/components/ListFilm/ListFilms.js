import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RenderStar from "../../pages/Category/phimmoi/StarFilm/RenderStar";
import { FaTicketAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../redux/Phimmoi_redux/Phimmoi_slice";

function ListFilms(props) {
  const [films, setFilms] = useState(props.listFilmParams);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetailsMovie = (animeClick) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(animeClick));
    navigate("/movie/detailsMovie");
  };
  const renderListFilm = () => {
    return films.map((value) => (
      <div>
        <h1 className="text-yellow-600 text-[40px] font-bold mb-[20px] ">
          {value.name}
        </h1>
        <div className="grid grid-cols-4 justify-items-start">
          {value.list_anime.map((value) => (
            <div className="flex flex-col">
              <div className="mb-[10px] relative ">
                <div>
                  <LazyLoadImage
                    src={value.cover_image}
                    className="object-top cursor-pointer  hover:scale-125 transition-all rounded-lg"
                    alt="loading..."
                    key={value.id}
                    onClick={() => handleDetailsMovie(value)}
                  />
                </div>
                {/* <p className="text-white bg-yellow-500 inline p-[7px]  rounded-xl absolute top-[0] left-[40%]">
                  {value.score}
                </p> */}
              </div>
              <RenderStar
                scoreAnime={value.score}
                key={value.id}
                className="my-[20px]"
              />
              <Link
                to="/"
                className=" mb-[10px]  mt-[10px] text-white font-semibold hover:underline"
              >
                {value.titles.en}
              </Link>

              <div className="flex items-center mb-[20px]">
                <FaTicketAlt className="mr-[12px] text-yellow-500 text-lg" />
                <Link className="underline text-white " to="/">
                  {value.genres[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return <div className=" w-full flex flex-col ">{renderListFilm()}</div>;
}

export default ListFilms;
