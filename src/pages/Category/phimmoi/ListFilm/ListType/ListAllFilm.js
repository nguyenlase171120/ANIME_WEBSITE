import { useState } from "react";
import Title_film from "../../../../../components/Title/Title_film";
import List_category from "../../ListCategory/List_category";
import List_film from "./List_film_le";

function ListAllFilm(props) {
  const [valueFilm, setValueFilm] = useState(props.allFilm);

  // console.log(valueFilm);
  const renderListAnime = () => {
    return valueFilm.map((value, id) => (
      <div className="w-[80%]" key={value.annilist_id}>
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

  return <div className="w-full">{renderListAnime()}</div>;
}

export default ListAllFilm;
