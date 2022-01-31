import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Phimmoi_slice } from "../../redux/Phimmoi_redux/Phimmoi_slice";
import { search_selector } from "../../redux/Selector/SearchAnime_selector";
import { useNavigate } from "react-router-dom";
function Search_content() {
  const listSearch = useSelector(search_selector);
  console.log(listSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = (value) => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(value));
    navigate("/movie/detailsMovie");
  };

  return (
    <div className="w-[80%] flex  flex-col">
      {listSearch.status_code === 200 ? (
        <div>
          {listSearch.data.documents.map((value) => (
            <div className="flex mb-[30px]">
              <img
                src={value.cover_image}
                placeholder="Loading..."
                className="rounded-lg object-fill mr-[20px] border-2  mr-[20px] w-[150px] h-[220px] cursor-pointer"
                onClick={() => handleDetails(value)}
              />
              <div classNam="element_center flex-col   ">
                <h1
                  onClick={() => handleDetails(value)}
                  className="text-[#f1b722] font-semibold text-[29px]  cursor-pointer hover:text-white "
                >
                  {value.titles.en}
                </h1>
                <p className="mb-[10px] text-[#979797]">
                  {value.descriptions.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="mb-5 uppercase text-center w-full text-white font-bold text-[20px] ">
            Không tìm thấy bộ phim này
          </h1>
        </div>
      )}
    </div>
  );
}

export default Search_content;
