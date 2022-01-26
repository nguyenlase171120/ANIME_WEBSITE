import React from "react";
import Button_search from "../Button/Button_search";

function Search_film() {
  return (
    <div className="element_center relative mb-[30px]">
      <input
        type="text"
        className="w-[903px] h-[38px] p-[15px] rounded-md text-black border-none outline-none"
        placeholder="Bạn muốn tìm phim gì ? "
      />
      <Button_search name="Tìm kiếm" />
    </div>
  );
}

export default Search_film;
