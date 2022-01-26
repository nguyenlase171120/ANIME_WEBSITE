import React from "react";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../../../redux/Phimmoi_redux/Phimmoi_slice";

function List_category() {
  const dispatch = useDispatch();

  const handleCommmingMovie = () => {
    dispatch(Phimmoi_slice.actions.hanldeNumberType(2));
  };

  const handleNewMovie = () => {
    dispatch(Phimmoi_slice.actions.hanldeNumberType(3));
  };

  const handleAllMovie = () => {
    dispatch(Phimmoi_slice.actions.hanldeNumberType(1));
  };

  return (
    <div>
      <ul className="element_center">
        <li className="bg-white link_film" onClick={handleAllMovie}>
          Tất cả phim
        </li>
        <li
          className="link_film_second link_film  active:bg-white active:text-[#495863]"
          onClick={handleCommmingMovie}
        >
          Sắp chiếu
        </li>
        <li
          className="link_film_second link_film active:bg-white active:text-[#495863]"
          onClick={handleNewMovie}
        >
          Phim mới
        </li>
      </ul>
    </div>
  );
}

export default List_category;
