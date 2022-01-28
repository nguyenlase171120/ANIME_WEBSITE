import { useState } from "react";
import Title_film from "../../../../../components/Title/Title_film";
import Hotmovie_container from "../../Hotmovie/Hotmovie_container";
import List_category from "../../ListCategory/List_category";
import List_film from "./List_film_le";

function ListAllFilm(props) {
  const [valueFilm, setValueFilm] = useState(props.allFilm);

  const renderListAnime = () => {
    return valueFilm.map((value, id) => (
      <div className="w-[80%] transition-all" key={value.annilist_id}>
        <div className="listFilm_render ">
          <Title_film name={value.name} />
          {value.isFirst ? <List_category /> : ""}
        </div>
        <div className="mt-[15px]">
          <List_film listFilmLe={value.list_anime} />
        </div>
      </div>
    ));
  };

  return (
    <div className=" relative w-full">
      <div className="w-full ">{renderListAnime()}</div>
      <div className="w-[20%] absolute top-3 right-0">
        <Hotmovie_container />
      </div>
    </div>
  );
}

export default ListAllFilm;
