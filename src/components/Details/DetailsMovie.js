import { useSelector } from "react-redux";
import RenderStar from "../../pages/Category/phimmoi/StarFilm/RenderStar";
import { AnimeDetails } from "../../redux/Selector/AnimeDetails_selector";
import Header_container from "../Header/Header_container";
import { FaTicketAlt, FaClock } from "react-icons/fa";
import Button_trailer from "../Button/Button_trailer";
import Button_watch from "../Button/Button_watch";
import TrailerVideo from "../Trailer/TrailerVideo";
import Suggest_movie from "./Suggest/Suggest_movie";

function DetailsMovie(props) {
  const getAnime = useSelector(AnimeDetails);

  return (
    <div className="bg_full bg-[#081B27] element_center flex-col min-h-full">
      <Header_container />

      <div className="mt-[76px] element_center   w-[90%] pt-[30px]">
        <img
          src={getAnime.cover_image}
          placeholder="Loading..."
          className="object-fill w-[340px] h-[510px] rounded-lg mr-[30px]"
        />
        <div className="flex justify-center ml-[70px] flex-col items-start">
          <div className="w-[484px]  mb-[15px]">
            <h1 className="font-bold text-[40px] text-white ">
              {getAnime.titles.en}
            </h1>
          </div>

          <div className="flex w-[440px] ">
            <div className="mr-5">
              <RenderStar scoreAnime={getAnime.score} />
            </div>
            <div className="flex items-center mr-3">
              <FaTicketAlt className="text-yellow-300 mr-2" />
              <p className="underline text-gray-400 hover:text-white cursor-pointer  ">
                {getAnime.genres[0]}
              </p>
            </div>
            <div className="flex items-center">
              <FaClock className="text-yellow-500 mr-2" />
              <p className="text-white ">{getAnime.start_date.slice(0, 10)}</p>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <Button_trailer name="Trailer" />
            <Button_watch name="Xem phim" />
          </div>

          <div className="flex flex-col  text-left items-center font-semibold text-white">
            <h2 className="my-[12px] w-full">
              Thời lượng : {getAnime.episode_duration} phút/tập
            </h2>
            <h2 className="mb-[12px]  w-full ">
              Số tập : {getAnime.episodes_count} tập
            </h2>
            <h2 className="mb-[12px]  w-full ">
              Năm sản xuất : {getAnime.season_year}
            </h2>
            <h2 className="mb-[12px]  w-full ">Quốc gia : Japan</h2>
            <h2 className="mb-[12px]  w-full ">
              Thể loại : {getAnime.genres[0]}
            </h2>
            <h2 className="mb-[12px]  w-full ">
              Ngày công chiếu : {getAnime.start_date.slice(0, 10)}
            </h2>
            <h2 className="mb-[12px]  w-full ">
              Diễn viên : Lâm Nhất, Trần Ngọc Kỳ, Yến Tử Đông, Thiên Ái
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[60%]">
        <div className="text-[#9cabb6] mt-[20px] mb-[10px]">
          {getAnime.descriptions.en}
        </div>
        <h1 className="text-[#f1b722] mt-[10px] mb-[20px] text-[28px] font-semibold">
          Review phim {getAnime.titles.en}
        </h1>
        <div className="flex flex-col w-full">
          <h1 className="text-white text-[30px] font-semibold mb-[15px]">
            Nội dung phim
          </h1>
        </div>
      </div>

      <div className="w-[60%] ">
        <TrailerVideo video={getAnime.trailer_url} />
      </div>

      <div className=" w-[80%]  element_center flex-col ">
        <Suggest_movie />
      </div>
    </div>
  );
}

export default DetailsMovie;
