import { useState } from "react";
import { Link } from "react-router-dom";
import RenderStar from "../../StarFilm/RenderStar";

function HotMovide_content(props) {
  const [listMovie, setListMovie] = useState(props.listHotMovie);

  const renderListMovie = () => {
    return listMovie.map((value) => (
      <div>
        <h1 className="text-yellow-600 font-bold mb-[30px] uppercase">
          {value.name}
        </h1>
        <div className="overflow-y-scroll w-[271px] h-[500px] ">
          {value.list_film.data.map((anime) => (
            <div className="flex w-full mb-[15px] items-center justify-center">
              <div className="relative">
                <Link to="/">
                  <img
                    src={anime.cover_image}
                    className="w-[60px] mt-[10px] rounded-lg h-[100px] mr-[20px] mb-[20px] object-cover cursor-pointer hover:scale-110"
                    id={anime.id}
                    alt="Loading..."
                  />
                </Link>
                <p className="text-white bg-yellow-500 inline p-[4px]  rounded-lg absolute top-[0] left-[25%]">
                  {anime.score}
                </p>
              </div>
              <div className="flex flex-col ml-[15px] w-[60%]">
                <Link
                  to="/"
                  className="text-white hover:underline font-semibold "
                >
                  {anime.titles.en}
                </Link>

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
