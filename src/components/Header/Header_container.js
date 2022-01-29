import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//Import libraries
import { logo_website } from "../../assets/asset_render";
import Header_children_link from "./Header_children/Header_children_link";
import { Phimmoi_slice } from "../../redux/Phimmoi_redux/Phimmoi_slice";

function Header_container() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(Phimmoi_slice.actions.handleNumberHeader(1));
    navigate("/");
  };

  return (
    <div className="w-screen h-[76px] bg-[#0c2738] element_center fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between w-[80%]">
        <img
          className="w-[163px] h-[28px] cursor-pointer"
          src={logo_website}
          alt="Loading..."
          onClick={handleHome}
        />
        <Header_children_link />
      </div>
    </div>
  );
}

export default Header_container;
