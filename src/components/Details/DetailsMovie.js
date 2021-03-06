import { useSelector } from "react-redux";
import RenderStar from "../../pages/Category/phimmoi/StarFilm/RenderStar";
import { AnimeDetails } from "../../redux/Selector/AnimeDetails_selector";
import Header_container from "../Header/Header_container";
import { FaTicketAlt, FaClock } from "react-icons/fa";
import Button_trailer from "../Button/Button_trailer";
import Button_watch from "../Button/Button_watch";
import TrailerVideo from "../Trailer/TrailerVideo";
import { List_description } from "../Description/Description_movie";
import { useState } from "react";
import Footer_container from "../Footer/Footer_container";
import Suggest_movie from "../SuggestSearch/Suggest_search";

function DetailsMovie(props) {
  const getAnime = useSelector(AnimeDetails);
  window.scrollTo({ top: 0, behavior: "smooth" });

  //Get description from DetailsMovie
  const [description, setDescription] = useState(() => {
    const randomNumber = Math.trunc(Math.random() * 4);
    const valueDesc = List_description[randomNumber];
    return valueDesc;
  });

  return (
    <di
      id="elementTop"
      className="bg-cover bg-center h-full w-full   absolute top-0 left-0  "
      style={{
        backgroundImage: `url('${getAnime.cover_image}')`,
      }}
    >
      {getAnime && (
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
                    <p className="text-white ">
                      {getAnime.start_date.slice(0, 10)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-5">
                  <Button_trailer />
                  <Button_watch anime={getAnime} />
                </div>

                <div className="flex flex-col  text-left items-center font-semibold text-white">
                  <h2 className="my-[12px] w-full">
                    Th???i l?????ng : {getAnime.episode_duration} ph??t/t???p
                  </h2>
                  <h2 className="mb-[12px]  w-full ">
                    S??? t???p : {getAnime.episodes_count} t???p
                  </h2>
                  <h2 className="mb-[12px]  w-full ">
                    N??m s???n xu???t : {getAnime.season_year}
                  </h2>
                  <h2 className="mb-[12px]  w-full ">Qu???c gia : Japan</h2>
                  <h2 className="mb-[12px]  w-full ">
                    Th??? lo???i : {getAnime.genres[0]}
                  </h2>
                  <h2 className="mb-[12px]  w-full ">
                    Ng??y c??ng chi???u : {getAnime.start_date.slice(0, 10)}
                  </h2>
                  <h2 className="mb-[12px]  w-full ">
                    Di???n vi??n : L??m Nh???t, Tr???n Ng???c K???, Y???n T??? ????ng, Thi??n ??i
                  </h2>
                </div>
              </div>
            </div>

            {description && (
              <div className="flex flex-col w-[60%]">
                <div className="text-[#9cabb6] mt-[20px] mb-[10px]">
                  {getAnime.descriptions.en}
                </div>
                <h1 className="text-[#f1b722] mt-[10px] mb-[20px] text-[28px] font-semibold">
                  Review phim {getAnime.titles.en}
                </h1>
                <div className="flex flex-col w-full">
                  <h1 className="text-white text-[30px] font-semibold mb-[15px]">
                    N???i dung phim
                  </h1>

                  <div className="max-w-full flex flex-col">
                    <div>
                      <p className="style_desc">{description.describe_1}</p>
                      <img
                        src={description.image[0].image_1}
                        placeholder="Loading..."
                        className="w-full"
                      />

                      <p className="style_desc">{description.describe_2}</p>
                      <p className="style_desc">{description.describe_3}</p>
                      <img
                        src={description.image[0].image_2}
                        placeholder="Loading..."
                        className="w-full"
                      />
                      <p className="style_desc">{description.describe_4}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="w-[60%] " id="trailerVideo">
              <TrailerVideo video={getAnime.trailer_url} />
            </div>

            <div className=" w-[80%]  element_center flex-col ">
              <Suggest_movie />
            </div>
          </div>
        </div>
      )}
      <div>
        <Footer_container />
      </div>
    </di>
  );
}

export default DetailsMovie;
