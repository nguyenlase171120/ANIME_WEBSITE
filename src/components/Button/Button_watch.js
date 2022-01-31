import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Phimmoi_slice } from "../../redux/Reducer/Phimmoi_slice";

function Button_watch(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Show episode movie corresponding to movie that user wanna watch
  const handleWatchMovie = () => {
    dispatch(Phimmoi_slice.actions.handleDetailsAnime(props.anime));
    navigate("/watch/watchMovie");
  };
  return (
    <div
      className="text-white bg-[#e46466] cursor-pointer rounded-lg py-[9px] px-[25px]"
      onClick={handleWatchMovie}
    >
      Xem Phim
    </div>
  );
}

export default Button_watch;
