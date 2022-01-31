import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { numberHeader_selector } from "../../../redux/Selector/NumberHeader_selector";
import { styleLinks } from "../../HeaderStyle/HeaderLinkStyle";
import { Phimmoi_slice } from "../../../redux/Reducer/Phimmoi_slice";
import { saveValueStorage } from "../../LocalStorage/StorageHeader";
import Button_login from "../../Button/Button_login";
import Button_registration from "../../Button/Button_registration";
import Button_logout from "../../Button/Button_logout";

const $ = document.querySelector.bind(document);
function Header_children_link(props) {
  const [user, setUser] = useState(() => {
    const profile = localStorage.getItem("user_profile");
    return JSON.parse(profile);
  });
  const dispatch = useDispatch();
  const numberPage = useSelector(numberHeader_selector);
  const navigate = useNavigate();

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

  useEffect(() => {}, []);

  // first_navLinks
  const handleSeriesFilm = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(3));
    navigate("/phim-bo");
  };

  const handleOddFilm = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(2));
    navigate("/phim-le");
  };

  const handleNewMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(1));
    navigate("/");
  };

  const handleCartoonMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(4));
    navigate("/phim-hoat-hinh");
  };

  const handleCinemaMovie = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(5));
    navigate("/phim-chieu-rap");
  };

  return (
    <div className="flex items-center">
      <ul className="element_center h-[76px]">
        <li
          id="link_1"
          className="text-[17px] text-[#899ead] hover:text-white cursor-pointer mr-[30px] font-bold py-[23px] "
          onClick={handleNewMovie}
        >
          Phim mới
        </li>
        <li id="link_2" className="navLinks_header" onClick={handleOddFilm}>
          Phim lẻ
        </li>
        <li id="link_3" className="navLinks_header" onClick={handleSeriesFilm}>
          Phim bộ
        </li>
        <li
          onClick={handleCartoonMovie}
          id="link_4"
          className="navLinks_header"
        >
          Phim hoạt hình
        </li>
        <li id="link_5" className="navLinks_header" onClick={handleCinemaMovie}>
          Phim chiếu rạp
        </li>
      </ul>

      {props.isLogin ? (
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <img
              src="https://toppng.com/uploads/preview/vu-thi-ha-user-pro-icon-115534024853ae3gswzwd.png"
              alt="Loading..."
              className="h-[30px] rounded-2xl mr-3 cursor-pointer"
            />
            <p className="text-white font-semibold text-[14px]">{user.name}</p>
          </div>

          <Button_logout />
        </div>
      ) : (
        <div className="flex items-center">
          <Button_login />
          <Button_registration />
        </div>
      )}
    </div>
  );
}

export default Header_children_link;
