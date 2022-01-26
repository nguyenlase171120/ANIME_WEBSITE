import { useState, useEffect } from "react";
import { FilmAPI } from "../../../api/FilmAPI";
import Search_film from "../../../components/Search/Search_film";
import ListAllFilm from "./ListFilm/ListType/ListAllFilm";

function Phimmoi() {
  const [listFilm, setListFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listFilmLe, setListFilmLe] = useState([]);
  const [listFilmBo, setListFilmBo] = useState([]);
  const [listFilmHoatHinh, setListFilmHoatHinh] = useState([]);
  const [listFilmChieuRap, setListFilmChieuRap] = useState([]);
  const [getAllFilm, setGetAllFilm] = useState([]);

  //Call API to get list film
  useEffect(async () => {
    try {
      const data = {
        page: 1,
      };

      const allFilm = await FilmAPI.getAllFilm(data);
      setListFilm(allFilm.data.documents);
    } catch (error) {
      console.log(error);
    }
  }, []);

  //Set list film le
  useEffect(() => {
    const getFilmFirst = [];
    for (let i = 0; i < listFilm.length; i++) {
      if (i < 12) {
        getFilmFirst.push(listFilm[i]);
      }
    }
    setListFilmLe(getFilmFirst);
  }, [listFilm]);

  //Set list film bo
  useEffect(() => {
    const getFilmFirst = [];
    for (let i = 12; i < listFilm.length; i++) {
      if (i < 24) {
        getFilmFirst.push(listFilm[i]);
      }
    }

    setListFilmBo(getFilmFirst);
  }, [listFilm]);

  //Set list film hoat hinh
  useEffect(() => {
    const getFilmFirst = [];
    for (let i = 24; i < listFilm.length; i++) {
      if (i < 36) {
        getFilmFirst.push(listFilm[i]);
      }
    }

    setListFilmHoatHinh(getFilmFirst);
  }, [listFilm]);

  //Set list film chieu rap
  useEffect(() => {
    const getFilmFirst = [];
    for (let i = 36; i < listFilm.length; i++) {
      if (i < 48) {
        getFilmFirst.push(listFilm[i]);
      }
    }

    setListFilmChieuRap(getFilmFirst);
  }, [listFilm]);

  //Get All film to render
  useEffect(() => {
    const phimbo = {
      list_anime: listFilmBo,
      isFirst: true,
      name: "Phim bộ mới",
    };

    const phimle = {
      list_anime: listFilmLe,
      isFirst: false,
      name: "Phim lẻ mới",
    };

    const phimhoathinh = {
      list_anime: listFilmHoatHinh,
      isFirst: false,
      name: "Phim Hoạt Hình",
    };
    const phimchieurap = {
      list_anime: listFilmChieuRap,
      isFirst: false,
      name: "Phim chiếu rạp",
    };
    const allFilms = [phimbo, phimle, phimhoathinh, phimchieurap];

    if (allFilms[0].list_anime.length > 0) {
      setGetAllFilm(allFilms);
      setIsLoading(true);
      console.log(allFilms);
    }
  }, [listFilmChieuRap]);

  return (
    <div className="mt-[76px] element_center flex-col w-[80%] pt-[30px]">
      <Search_film />
      {isLoading ? (
        <ListAllFilm allFilm={getAllFilm} />
      ) : (
        <h1 className="text-white ">PLease wait a minute for loading ...</h1>
      )}
    </div>
  );
}

export default Phimmoi;
