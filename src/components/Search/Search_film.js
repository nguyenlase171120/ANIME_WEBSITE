import { useEffect, useState } from "react";
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
    const listFilm_5 = await FilmAPI.getAllFilm({ page: 5 });
    const listFilm_6 = await FilmAPI.getAllFilm({ page: 6 });
    const listFilm_7 = await FilmAPI.getAllFilm({ page: 7 });
    const listFilm_8 = await FilmAPI.getAllFilm({ page: 8 });
    const listFilm_9 = await FilmAPI.getAllFilm({ page: 9 });
    const listFilm_10 = await FilmAPI.getAllFilm({ page: 10 });
    const listFilm_11 = await FilmAPI.getAllFilm({ page: 11 });
    const listFilm_12 = await FilmAPI.getAllFilm({ page: 12 });
    const listFilm_13 = await FilmAPI.getAllFilm({ page: 13 });
    const listFilm_14 = await FilmAPI.getAllFilm({ page: 14 });
    const listFilm_15 = await FilmAPI.getAllFilm({ page: 15 });
    const listFilm_16 = await FilmAPI.getAllFilm({ page: 16 });
    const listFilm_17 = await FilmAPI.getAllFilm({ page: 17 });
    const listFilm_18 = await FilmAPI.getAllFilm({ page: 18 });
    const listFilm_19 = await FilmAPI.getAllFilm({ page: 19 });
    const listFilm_20 = await FilmAPI.getAllFilm({ page: 20 });

    const allListAnime = listFilm_1.data.documents.concat(
      listFilm_2.data.documents,
      listFilm_3.data.documents,
      listFilm_4.data.documents,
      listFilm_5.data.documents,
      listFilm_6.data.documents,
      listFilm_7.data.documents,
      listFilm_8.data.documents,
      listFilm_9.data.documents,
      listFilm_10.data.documents,
      listFilm_11.data.documents,
      listFilm_12.data.documents,
      listFilm_13.data.documents,
      listFilm_14.data.documents,
      listFilm_15.data.documents,
      listFilm_16.data.documents,
      listFilm_17.data.documents,
      listFilm_18.data.documents,
      listFilm_19.data.documents,
      listFilm_20.data.documents
    );

    setAllFilm(allListAnime);
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = allFilm.filter((titleValue) => {
        const regex = new RegExp(`${text}`, "gi");
        return titleValue.titles.en.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestion(matches);
    setText(text);
  };

  const onSuggestHandler = (value) => {
    setText(value);
    setSuggestion([]);
  };
  return (
    <div className="relative">
      <div className="element_center relative ">
        <input
          type="text"
          value={text}
          onChange={(e) => onChangeHandler(e.target.value)}
          className="w-[903px] h-[38px] p-[15px] rounded-md text-black border-none outline-none"
          placeholder="Bạn muốn tìm phim gì ? "
        />
        <Button_search name="Tìm kiếm" />
      </div>

      {suggestion && (
        <div className="overflow-y-auto flex flex-col w-[900px] float-right rounded-md   h-[70px] mt-[10px] z-30">
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
