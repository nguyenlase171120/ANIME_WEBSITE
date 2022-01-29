import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer_container() {
  return (
    <div
      className="h-[200px] w-full bg-cover bg-center border-none outline-none "
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/79/b8/86/79b8860843487cd551902cd45c4a32a5--wallpaper-earth-mountain-wallpaper.jpg')",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgb(8, 27, 39) 70%, rgba(6, 41, 60, 0.1))",
        }}
      >
        <div className="w-[80%] h-full grid grid-cols-3 justify-items-center content-center  ">
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

          <ul className="flex flex-col">
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
    </div>
  );
}

export default Footer_container;
