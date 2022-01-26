import React from "react";
import Header_container from "../../components/Header/Header_container";
import { Routes, Route } from "react-router-dom";

//Import components
import Phimle from "../Category/phimle/Phimle";
import PhimBo from "../Category/phimbo/PhimBo";
import PhimChieuRap from "../Category/phimchieurap/PhimChieuRap";
import PhimHoatHinh from "../Category/phimhoathinh/PhimHoatHinh";
import Phimmoi from "../Category/phimmoi/Phimmoi";
import Footer_container from "../../components/Footer/Footer_container";

function Website_container() {
  return (
    <div className="bg_full bg-[#081B27] element_center flex-col min-h-full ">
      <Header_container />

      <Routes>
        <Route path="category/phim-le" element={<Phimle />} />
        <Route path="category/phim-bo" element={<PhimBo />} />
        <Route path="category/phim-chieu-rap" element={<PhimChieuRap />} />
        <Route path="category/phim-hoat-hinh" element={<PhimHoatHinh />} />
        <Route path="/" element={<Phimmoi />} />
      </Routes>

      {/* <Footer_container /> */}
    </div>
  );
}

export default Website_container;
