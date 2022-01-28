import { useState } from "react";
import RenderStar from "../../StarFilm/RenderStar";
import { FaTicketAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../../../../redux/Phimmoi_redux/Phimmoi_slice";

function List_film(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [listFilms, setListFilms] = useState(props.listFilmLe);
  const handleDetailsMovie = (animeClick) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(animeClick));
    navigate("/movie/detailsMovie");
  };

  const hanldeLoadImage = () => {
    return listFilms.map((anime, id) => (
      <div className="mb-[30px]">
        <div className="flex flex-col mb-[20px] cursor-pointer hover:scale-125 transition-all">
          <div className="relative  ">
            <LazyLoadImage
              effects="blur"
              src={anime.cover_image}
              alt="Loading..."
              key={id}
              height="280px"
              width="168px"
              className="rounded-lg pt-[10px]"
              onClick={() => handleDetailsMovie(anime)}
            />
            <p className="text-white bg-yellow-500 inline p-[7px]  rounded-xl absolute top-[0] left-[25%]">
              {anime.score}
            </p>
          </div>
        </div>

        <RenderStar scoreAnime={anime.score} key={id} />

        <Link
          to="/phim/detailsMovie"
          key={anime.id}
          className="font-bold my-[15px] text-md text-white hover:underline cursor-pointer"
        >
          {anime.titles.en}
        </Link>

        <div className="flex items-center  flex-row">
          <FaTicketAlt className="text-yellow-500 mr-[15px]" />
          <Link className="underline text-[#cad3da] hover:text-white " to="/">
            {anime.genres[0]}
          </Link>
        </div>
      </div>
    ));
  };
  return <div className="grid grid-cols-4">{hanldeLoadImage()}</div>;
}

export default List_film;
