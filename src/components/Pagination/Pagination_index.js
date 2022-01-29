import { useDispatch, useSelector } from "react-redux";
import { pagination_slice } from "../../redux/Phimmoi_redux/Pagination_slice";
import { ListRender } from "./Render_Pagination";

const $ = document.querySelector.bind(document);
function Pagination_index(props) {
  const idPage = `page-${props.index}`;

  const colorPaging = () => {
    const isResult = localStorage.getItem("colorPage");
    if (isResult) {
      $(`#${isResult}`).style.backgroundColor = "white";
      $(`#${isResult}`).style.text = "gray";
    }
    localStorage.setItem("colorPage", idPage);
    $(`#${idPage}`).style.backgroundColor = "black";
    $(`#${idPage}`).style.text = "white";
  };

  const dispatch = useDispatch();
  const handlePaging = async () => {
    "vo day";
    switch (props.name) {
      case "phim-le": {
        let index = props.index;
        if (index === 1) {
          index = 0;
        }

        const numberPage = 1 + index;
        const name = "Phim lẻ cập nhật";
        const result = await ListRender(name, numberPage);
        return result;
      }
      case "phim-bo": {
        let index = props.index;
        console.log("phim bo" + index);
        if (index === 1) {
          index = 0;
        }
        const numberPage = 10 + index;
        const name = "Phim bộ cập nhật";
        const result = await ListRender(name, numberPage);
        return result;
      }
      case "phim-hoat-hinh": {
        let index = props.index;
        if (index === 1) {
          index = 0;
        }
        const numberPage = 20 + index;
        const name = "Phim hoạt hình cập nhật";
        const result = await ListRender(name, numberPage);
        return result;
      }
      case "phim-chieu-rap": {
        let index = props.index;
        if (index === 1) {
          index = 0;
        }
        const numberPage = 30 + props.index;
        const name = "Phim chiếu rạp cập nhật";
        const result = await ListRender(name, numberPage);
        return result;
      }
      default: {
        console.log("Can't get path");
      }
    }
  };

  //Handle pagination
  const handlePagination = async () => {
    const listAnime = await handlePaging();
    dispatch(
      pagination_slice.actions.handleListPaging({
        name: listAnime.name,
        list_anime: listAnime.list_anime,
      })
    );
    colorPaging();
  };

  return (
    <p
      id={idPage}
      onClick={handlePagination}
      className="cursor-pointer active:bg-black active:text-white bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
    >
      {props.index}
    </p>
  );
}

export default Pagination_index;
