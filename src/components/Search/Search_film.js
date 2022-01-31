import { useState, useEffect } from "react";
import { FilmAPI } from "../../api/FilmAPI";
import Button_search from "../Button/Button_search";

function Search_film() {
  const [allFilm, setAllFilm] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(async () => {
    const listFilm_1 = await FilmAPI.getAllFilm({ page: 1 });
    const listFilm_2 = await FilmAPI.getAllFilm({ page: 2 });
    const listFilm_3 = await FilmAPI.getAllFilm({ page: 3 });
    const listFilm_4 = await FilmAPI.getAllFilm({ page: 4 });
    // const listFilm_5 = await FilmAPI.getAllFilm({ page: 5 });
    // const listFilm_6 = await FilmAPI.getAllFilm({ page: 6 });
    // const listFilm_7 = await FilmAPI.getAllFilm({ page: 7 });
    // const listFilm_8 = await FilmAPI.getAllFilm({ page: 8 });
    // const listFilm_9 = await FilmAPI.getAllFilm({ page: 9 });
    // const listFilm_10 = await FilmAPI.getAllFilm({ page: 10 });

    const allListAnime = listFilm_1.data.documents.concat(
      listFilm_2.data.documents,
      listFilm_3.data.documents,
      listFilm_4.data.documents
      // listFilm_5.data.documents,
      // listFilm_6.data.documents,
      // listFilm_7.data.documents,
      // listFilm_8.data.documents,
      // listFilm_9.data.documents,
      // listFilm_10.data.documents
    );

    setAllFilm(allListAnime);
  }, []);

  //It Will Call API when user focus input
  // const onFocusHandler = async () => {
  //   const listFilm_1 = await FilmAPI.getAllFilm({ page: 1 });
  //   const listFilm_2 = await FilmAPI.getAllFilm({ page: 2 });
  //   const listFilm_3 = await FilmAPI.getAllFilm({ page: 3 });
  //   const listFilm_4 = await FilmAPI.getAllFilm({ page: 4 });
  //   // const listFilm_5 = await FilmAPI.getAllFilm({ page: 5 });
  //   // const listFilm_6 = await FilmAPI.getAllFilm({ page: 6 });
  //   // const listFilm_7 = await FilmAPI.getAllFilm({ page: 7 });
  //   // const listFilm_8 = await FilmAPI.getAllFilm({ page: 8 });
  //   // const listFilm_9 = await FilmAPI.getAllFilm({ page: 9 });
  //   // const listFilm_10 = await FilmAPI.getAllFilm({ page: 10 });

  //   const allListAnime = listFilm_1.data.documents.concat(
  //     listFilm_2.data.documents,
  //     listFilm_3.data.documents,
  //     listFilm_4.data.documents
  //     // listFilm_5.data.documents,
  //     // listFilm_6.data.documents,
  //     // listFilm_7.data.documents,
  //     // listFilm_8.data.documents,
  //     // listFilm_9.data.documents,
  //     // listFilm_10.data.documents
  //   );

  //   setAllFilm(allListAnime);
  // };

  //Suggest keyword search for user
  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = allFilm.filter((titleValue) => {
        const regex = new RegExp(`${text}`, "gi");
        return titleValue.titles.en.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };

  //Set new value search If user choose value on suggest table
  const onSuggestHandler = (value) => {
    setText(value);
    setSuggestion([]);
  };
  return (
    <div className="relative">
      <div className="element_center relative ">
        <input
          type="text"
          required
          value={text}
          onChange={(e) => onChangeHandler(e.target.value)}
          className="w-[903px] h-[38px] p-[15px] rounded-md text-black border-none outline-none"
          placeholder="Bạn muốn tìm phim gì ? "
        />
        <Button_search name="Tìm kiếm" valueSearch={text} />
      </div>

      {suggestion && (
        <div className="overflow-y-auto flex flex-col w-full float-right rounded-md  h-[60px] mt-[10px] z-30">
          {suggestion.map((value) => (
            <p
              onClick={() => onSuggestHandler(value.titles.en)}
              className="bg-white text-red-400 border-2 border-b-gray-500 hover:bg-[#f5f5dc] cursor-pointer py-[2px] pl-[15px]"
            >
              {value.titles.en}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search_film;
