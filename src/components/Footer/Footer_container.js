import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer_container() {
  return (
    <div className="h-[70px] w-full bg-cover bg-center ">
      <div className="w-[80%] flex items-center justify-around ">
        <ul>
          <li className="footer_link">Liên hệ</li>
          <li className="footer_link">Giới thiệu</li>
          <li className="footer_link">Bản quyền</li>
        </ul>

        <ul>
          <li className="footer_link">Phim bộ</li>
          <li className="footer_link">Phim lẻ</li>
          <li className="footer_link">Phim chiếu rạp</li>
        </ul>

        <ul className="element_center flex-col">
          <li className="element_center   mb-[10px] ">
            <FaFacebookSquare className="text-yellow-500 mr-[10px]" />
            <p className="text-[#74a8cf]  cursor-pointer hover:text-white  ">
              Facebook
            </p>
          </li>
          <li className="flex items-center mb-[10px]   w-[90px] ">
            <FaTwitterSquare className="text-yellow-500 mr-[10px]" />
            <p className="text-[#74a8cf] cursor-pointer hover:text-white">
              Twitter
            </p>
          </li>
          <li className="element_center   mb-[10px] ">
            <FaInstagramSquare className="text-yellow-500 mr-[10px]" />
            <p className="text-[#74a8cf] cursor-pointer hover:text-white  ">
              Instagram
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer_container;
