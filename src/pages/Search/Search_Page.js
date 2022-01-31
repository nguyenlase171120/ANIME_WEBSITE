import React from "react";
import Search_film from "../../components/Search/Search_film";
import Search_content from "./Search_content";

function Search_Page() {
  return (
    <div className="min-h-full  flex flex-col w-[1000px] mt-[76px]">
      <h1 className="uppercase text-[#f1b722] text-[38px] my-[40px] font-bold ">
        Tìm phim
      </h1>
      <div>
        <div className="float-left ">
          <Search_film />
        </div>
        <div>
          <Search_content />
        </div>
      </div>
    </div>
  );
}

export default Search_Page;
