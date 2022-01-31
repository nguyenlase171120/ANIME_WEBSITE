import { useNavigate } from "react-router-dom";
import { FilmAPI } from "../../api/FilmAPI";
import { useDispatch } from "react-redux";
import { Search_slice } from "../../redux/Phimmoi_redux/Search_slice";

function Button_search(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const param = {
      title: props.valueSearch,
    };
    const listAnime = await FilmAPI.getAllFilm(param);
    dispatch(Search_slice.actions.handleSearchFilm(listAnime));
    navigate("/search");
  };

  return (
    <button
      onClick={handleSearch}
      className="rounded-r-md px-[15px] py-[7px] bg-[#3898ec] text-white absolute top-0 right-0"
    >
      {props.name}
    </button>
  );
}

export default Button_search;
