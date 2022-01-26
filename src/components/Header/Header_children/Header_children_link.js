import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Phimle from "../../../pages/Category/phimle/Phimle";
function Header_children_link() {
  return (
    <div>
      <ul className="element_center h-[76px]">
        <li className="text-[17px] text-white cursor-pointer mr-[30px] font-bold py-[23px] first_navLinks">
          <Link to="/">Phim mới</Link>
        </li>
        <li className="navLinks_header">
          <Link to="/category/phim-le">Phim lẻ</Link>
        </li>
        <li className="navLinks_header">
          <Link to="/category/phim-bo">Phim bộ</Link>
        </li>
        <li className="navLinks_header">
          <Link to="/category/phim-hoat-hinh">Phim hoạt hình</Link>
        </li>
        <li className="navLinks_header">
          <Link to="/category/phim-chieu-rap">Phim chiếu rạp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header_children_link;
