import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { numberHeader_selector } from "../../../redux/Selector/NumberHeader_selector";
import { styleLinks } from "../../HeaderStyle/HeaderLinkStyle";
import { Phimmoi_slice } from "../../../redux/Phimmoi_redux/Phimmoi_slice";
import { saveValueStorage } from "../../LocalStorage/StorageHeader";

const $ = document.querySelector.bind(document);
function Header_children_link() {
  const dispatch = useDispatch();
  const numberPage = useSelector(numberHeader_selector);

  useEffect(() => {
    if (numberPage === 1) {
      saveValueStorage("#link_1");
      styleLinks("#link_1");
    } else if (numberPage === 2) {
      saveValueStorage("#link_2");
      styleLinks("#link_2");
    } else if (numberPage === 3) {
      saveValueStorage("#link_3");
      styleLinks("#link_3");
    } else if (numberPage === 4) {
      saveValueStorage("#link_4");
      styleLinks("#link_4");
    } else {
      saveValueStorage("#link_5");
      styleLinks("#link_5");
    }
  }, [numberPage]);

  // first_navLinks

  const handleSeriesFilm = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(3));
  };

  const handleOddFilm = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(2));
  };

  const handleNewMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(1));
  };

  const handleCartoonMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(4));
  };

  const handleCinemaMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(5));
  };
  return (
    <div>
      <ul className="element_center h-[76px]">
        <li
          id="link_1"
          className="text-[17px] text-[#899ead] hover:text-white cursor-pointer mr-[30px] font-bold py-[23px] "
          onClick={handleNewMovie}
        >
          <Link to="/">Phim mới</Link>
        </li>
        <li id="link_2" className="navLinks_header" onClick={handleOddFilm}>
          <Link to="/category/phim-le">Phim lẻ</Link>
        </li>
        <li id="link_3" className="navLinks_header" onClick={handleSeriesFilm}>
          <Link to="/category/phim-bo">Phim bộ</Link>
        </li>
        <li
          onClick={handleCartoonMovie}
          id="link_4"
          className="navLinks_header"
        >
          <Link to="/category/phim-hoat-hinh">Phim hoạt hình</Link>
        </li>
        <li id="link_5" className="navLinks_header" onClick={handleCinemaMovie}>
          <Link to="/category/phim-chieu-rap">Phim chiếu rạp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header_children_link;
