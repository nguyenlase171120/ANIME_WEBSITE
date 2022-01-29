import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RenderStar from "../../pages/Category/phimmoi/StarFilm/RenderStar";
import { FaTicketAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../redux/Phimmoi_redux/Phimmoi_slice";
import Pagination_movie from "../Pagination/Pagination_movie";
import { useSelector } from "react-redux";
import {
  listPagination_selector,
  numberPage_selector,
} from "../../redux/Selector/ListPagination_selector";

function ListFilms(props) {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numberPage = useSelector(numberPage_selector);
  const listValue = useSelector(listPagination_selector);

  useEffect(() => {
    setFilms(listValue);
    setIsLoading(true);
  }, [listValue]);

  window.scrollTo({ top: 0, behavior: "smooth" });

  console.log(films);

  //Handle show details movie clicked
  const handleDetailsMovie = (animeClick) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(animeClick));
    navigate("/movie/detailsMovie");
  };

  //Render UI list movie
  const renderListFilm = () => {
    return films.list_anime.map((value) => (
      <div className="inline-block mb-[20px]">
        <div className="mb-[10px] relative ">
          <div className=" w-[225px] h-[350px]">
            <LazyLoadImage
              src={value.cover_image}
              className="object-top cursor-pointer object-fill h-full hover:scale-125 transition-all rounded-lg"
              alt="loading..."
              key={value.id}
              onClick={() => handleDetailsMovie(value)}
              effects="opacity"
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
    ));
  };

  return (
    <div className=" w-full">
      <h1 className="text-yellow-600 text-[40px] font-bold mb-[20px] ">
        {films.name}
      </h1>
      {isLoading ? (
        <div className=" w-full grid grid-cols-4">{renderListFilm()}</div>
      ) : (
        <h1 className="text-yellow-600 ">Loading....</h1>
      )}
    </div>
  );
}

export default ListFilms;
