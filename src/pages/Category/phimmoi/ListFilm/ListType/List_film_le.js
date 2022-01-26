import { useState } from "react";
import RenderStar from "../../StarFilm/RenderStar";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function List_film(props) {
  const [listFilms, setListFilms] = useState(props.listFilmLe);
  const hanldeLoadImage = () => {
    return listFilms.map((anime, id) => (
      <div className="mb-[30px]">
        <Link
          className="flex flex-col mb-[20px]  hover:scale-125 transition-all"
          to="/"
        >
          <LazyLoadImage
            effects="blur"
            src={anime.cover_image}
            alt="Loading..."
            key={id}
            height="256px"
            width="168px"
            className="rounded-lg"
          />
        </Link>

        <RenderStar scoreAnime={anime.score} key={id} />

        <Link
          to="/"
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
