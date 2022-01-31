import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import Header_container from "../../../components/Header/Header_container";
import { AnimeDetails } from "../../../redux/Selector/AnimeDetails_selector";
import RenderStar from "../../Category/phimmoi/StarFilm/RenderStar";
import { useNavigate } from "react-router-dom";
import { Phimmoi_slice } from "../../../redux/Phimmoi_redux/Phimmoi_slice";
import { logo_website } from "../../../assets/asset_render";
import Search_film from "../../../components/Search/Search_film";
import { FilmAPI } from "../../../api/FilmAPI";
import HotMovide_content from "../../Category/phimmoi/Hotmovie/Content/HotMovide_content";
import MovieWatch from "../../../components/Suggest/MovieWatch";
import Footer_container from "../../../components/Footer/Footer_container";
import { Link as Scroll } from "react-scroll";

function Movie_children() {
  const movie = useSelector(AnimeDetails);

  console.log(Math.trunc(13 / 10));
  // console.log(movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSuggest, setIsLoadingSuggest] = useState(false);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);
  const [getAllFilm, setGetAllFilm] = useState([]);
  const [suggestMovie, setSuggestMovie] = useState([]);
  const [videoSpecific, setVideoSpecific] = useState();
  const [listPart, setListPart] = useState([]);
  const [part, setPart] = useState(1);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(async () => {
    try {
      const seriesMovieApi = await FilmAPI.getFilmRandom(10);
      const oddMovieApi = await FilmAPI.getFilmRandom(10);
      const cartoonMovieApi = await FilmAPI.getFilmRandom(10);
      const cinemaMovieApi = await FilmAPI.getFilmRandom(10);

      const serieMovie = {
        name: "Phim bộ hot trong tuần",
        list_film: seriesMovieApi,
      };

      const oddMovie = {
        name: "Phim lẻ hot trong tuần",
        list_film: oddMovieApi,
      };

      const cinemaMovie = {
        name: "Phim chiếu rạp hot trong tuần",
        list_film: cinemaMovieApi,
      };

      const cartoonMovie = {
        name: "Phim hoạt hình hot trong tuần",
        list_film: cartoonMovieApi,
      };

      const new_list = [];
      new_list.push(serieMovie, oddMovie, cinemaMovie, cartoonMovie);
      if (new_list.length > 0) {
        setGetAllFilm(new_list);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    const movieApi = await FilmAPI.getFilmRandom(20);
    if (movieApi) {
      setSuggestMovie(movieApi.data);
      setIsLoadingSuggest(true);
    }
  }, []);

  //Get specific episode video to display
  useEffect(async () => {
    const movie_data = {
      anime_id: movie.id,
      locale: "it",
      source: "dreamsub",
      number: part,
    };
    const movieEpisode = await FilmAPI.getEpisode(movie_data);

    console.log(movieEpisode);
    if (movieEpisode.status_code === 200) {
      setVideoSpecific(movieEpisode.data.documents[0]);
      setIsLoadingEpisode(true);
    }
  }, [part]);

  //Get List episode to display part movie
  useEffect(async () => {
    const movie_data = {
      anime_id: movie.id,
      locale: "it",
      source: "dreamsub",
      page: page,
    };

    const listMovie = await FilmAPI.getEpisode(movie_data);
    if (listMovie) {
      setListPart(listMovie.data.documents);
      setLastPage(listMovie.data.last_page);
    }
  }, [page]);

  const handleDetails = (value) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(value));
    navigate("/movie/detailsMovie");
  };

  const handleMoveEpisode = (value) => {
    setPart(value);
  };

  const handlePart = (event) => {
    if (event === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  const handlePage = () => {
    if (lastPage > 1 && page < lastPage && page !== 1) {
      return (
        <div>
          <button
            onClick={() => handlePart("previous")}
            className="  bg-violet-400 text-white rounded-md ml-5 py-[5px] px-[10px] "
          >
            Previous page
          </button>
          <button
            onClick={() => handlePart("next")}
            className="  bg-violet-400 text-white rounded-md ml-5 py-[5px] px-[10px] "
          >
            Next page
          </button>
        </div>
      );
    } else if (page > 1 && page === lastPage) {
      return (
        <button
          onClick={() => handlePart("previous")}
          className="  bg-violet-400 text-white rounded-md ml-5 py-[5px] px-[10px] "
        >
          Previous page
        </button>
      );
    } else if (page === 1 && lastPage > 1) {
      return (
        <button
          onClick={() => handlePart("next")}
          className="  bg-violet-400 text-white rounded-md ml-5 py-[5px] px-[10px] "
        >
          Next page
        </button>
      );
    }
  };

  return (
    <div
      id="elementTop"
      className="bg-cover bg-center h-full w-full   absolute top-0 left-0  "
      style={{
        backgroundImage: `url('${movie.cover_image}')`,
      }}
    >
      <div
        className="z-10 bg-cover bg-center min-h-full "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgb(8, 27, 39) 70%, rgba(6, 41, 60, 0.4))",
        }}
      >
        <div className=" element_center flex-col min-h-full">
          <Header_container />
          <div className="mt-[76px] element_center   w-[90%] pt-[30px]">
            <img
              src={movie.cover_image}
              placeholder="Loading..."
              className="object-fill w-[340px] h-[510px] rounded-lg mr-[30px]"
            />
            <div className="flex justify-center ml-[70px] flex-col items-start">
              <div className="w-[484px]  mb-[15px]">
                <h1 className="font-bold text-[40px] text-white ">
                  {movie.titles.en} - Tập 1
                </h1>
              </div>
              <div className="flex w-[440px] flex-col ">
                <div className="mr-5">
                  <RenderStar scoreAnime={movie.score} />
                </div>
                <div>
                  <h2 className="my-[12px] w-full text-white ">
                    <spam className=" font-bold mr-[10px]">Thời lượng :</spam>{" "}
                    {movie.episode_duration} phút/tập
                  </h2>
                  <h2 className="my-[12px] w-full text-white ">
                    <spam className=" font-bold mr-[10px]">Đạo diễn :</spam>
                    Monalisa kiolokia
                  </h2>
                  <div className="flex items-center">
                    <FaClock className="text-yellow-500 mr-2" />
                    <p className="text-white ">
                      {movie.start_date.slice(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] text-[#9cabb6]">
                  <p>{movie.descriptions.en}</p>[
                  <span
                    onClick={() => handleDetails(movie)}
                    className="text-[#3d6888] hover:text-white font-bold cursor-pointer hover:underline"
                  >
                    Xem thêm
                  </span>
                  ]
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[100px]" id="playing">
          <div className="w-[75%]  flex items-center flex-col min-h-full mt-[60px] ">
            {isLoadingEpisode ? (
              <ReactPlayer
                url={videoSpecific.video}
                controls
                width="809px"
                height="455px"
                playing
              />
            ) : (
              <h1 className="text-white text-[25px]">
                Watting for loading video....
              </h1>
            )}
            <div className=" mt-[10px] w-[809px]">
              <span className="font-bold text-gray-500">Lịch chiếu :</span>{" "}
              <span className="text-[#9cabb6]">
                1 tập mỗi tối thứ 2,3 lúc 22h00 trên anhnguyen_movie.net
              </span>
            </div>

            <div className="w-[809px]">
              <div className="flex   items-center my-[20px]">
                <h1 className="text-[#9cab66] uppercase font-bold text-[20px] ">
                  Chọn tập phim
                </h1>

                {handlePage()}
              </div>

              <div>
                {isLoadingEpisode &&
                  listPart.map((value) => (
                    <Scroll to="playing" smooth={true} duration={1000}>
                      <button
                        onClick={() => handleMoveEpisode(value.number)}
                        className="bg-[#3898ec] rounded-3xl py-[5px] px-[15px] mr-[15px] text-white mb-[20px] mt-[15px]"
                      >
                        {value.number}
                      </button>
                    </Scroll>
                  ))}
              </div>
              <div className="w-full mb-[20px] p-[10px] bg-black text-[#9cabb6] border-2 border-yellow-600">
                <span className="font-bold uppercase">Cảnh báo : </span> Không
                bấm vào các đường link lạ ở khu vực bình luận. Việc truy cập vào
                các liên kết lạ ngoài anhnguyen_movie có thể khiến bạn bị hack
                tài khoản Facebook.
              </div>

              <div className="w-full flex items-center">
                <h1 className="text-yellow-600 font-bold text-[21px] mr-[10px] uppercase">
                  Bình luận về phim :{" "}
                </h1>
                <img
                  src={logo_website}
                  className="w-[285px] h-[49px]"
                  alt="Loading..."
                />
              </div>

              <div className="w-full bg-white my-[20px]">
                <div
                  class="fb-comments"
                  data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                  data-width="809"
                  data-numposts="5"
                ></div>
              </div>
              <div className="w-full mb-[20px]">
                <div className=" w-full">
                  {isLoadingSuggest ? (
                    <MovieWatch value={suggestMovie} />
                  ) : (
                    <h1 className="text-white">Loading....</h1>
                  )}
                  ;
                </div>
              </div>
            </div>
          </div>

          <div className="w-[25%] mr-5">
            <div class=" mt-[60px]">
              <Search_film />
            </div>

            <div>
              {isLoading ? (
                <HotMovide_content listHotMovie={getAllFilm} />
              ) : (
                <h1 className="text-lg text-white font-bold">Loading...</h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer_container />
    </div>
  );
}

export default Movie_children;
