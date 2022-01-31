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
import Search_Page from "../Search/Search_Page";
import Error_page from "../../error/Error_page";

function Website_container() {
  return (
    <div className="bg_full bg-[#081B27] element_center flex-col h-[100% + 50px] ">
      <Header_container />

      <Routes>
        <Route path="phim-le" element={<Phimle />} />
        <Route path="phim-bo" element={<PhimBo />} />
        <Route path="phim-chieu-rap" element={<PhimChieuRap />} />
        <Route path="phim-hoat-hinh" element={<PhimHoatHinh />} />
        <Route path="/" element={<Phimmoi />} />
        <Route path="/search" element={<Search_Page />} />
        <Route path="/*" element={<Error_page />} />
      </Routes>

      <Footer_container />
    </div>
  );
}

export default Website_container;
