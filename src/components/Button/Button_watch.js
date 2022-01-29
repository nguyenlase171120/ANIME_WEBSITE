import React from "react";
import { useNavigate } from "react-router-dom";
function Button_watch(props) {
  const navigate = useNavigate();
  const handleWatchMovie = () => {
    navigate("/watch/watchMovie");
  };
  return (
    <div
      className="text-white bg-[#e46466] cursor-pointer rounded-lg py-[9px] px-[25px]"
      onClick={handleWatchMovie}
    >
      {props.name}
    </div>
  );
}

export default Button_watch;
