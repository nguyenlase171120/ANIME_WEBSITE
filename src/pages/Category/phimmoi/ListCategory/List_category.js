import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pagination_slice } from "../../../../redux/Phimmoi_redux/Pagination_slice";
import { number_selector } from "../../../../redux/Selector/Numbertype_selector";
import { event_text, white_bg } from "../MovieStyle";

function List_category() {
  const dispatch = useDispatch();
  const typeSelect = useSelector(number_selector);

  console.log(typeSelect);
  useEffect(() => {
    if (typeSelect === 1) {
      white_bg("#allFilm");
      event_text("#allFilm");
    } else if (typeSelect === 2) {
      white_bg("#commingFilm");
      event_text("#commingFilm");
    } else {
      white_bg("#newFilm");
      event_text("#newFilm");
    }
  }, []);

  const handleCommmingMovie = () => {
    dispatch(pagination_slice.actions.handleNumberType(2));
  };

  const handleNewMovie = () => {
    dispatch(pagination_slice.actions.handleNumberType(3));
  };

  const handleAllMovie = () => {
    dispatch(pagination_slice.actions.handleNumberType(1));
  };

  return (
    <div>
      <ul className="element_center">
        <li
          id="allFilm"
          className="bg-[#0c2738] hover:text-white text-[#495863] link_film"
          onClick={handleAllMovie}
        >
          Tất cả phim
        </li>
        <li
          id="commingFilm"
          className="link_film_second link_film bg-[#0c2738]   active:bg-white active:text-[#495863]"
          onClick={handleCommmingMovie}
        >
          Sắp chiếu
        </li>
        <li
          id="newFilm"
          className="link_film_second link_film bg-[#0c2738] active:bg-white active:text-[#495863]"
          onClick={handleNewMovie}
        >
          Phim mới
        </li>
      </ul>
    </div>
  );
}

export default List_category;
