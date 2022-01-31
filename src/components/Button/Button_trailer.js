import React from "react";
import { Link as Scroll } from "react-scroll";

function Button_trailer() {
  return (
    <div>
      <Scroll to="trailerVideo" smooth={true} duration={1000}>
        <button className="bg-[#3898ec] mr-4 text-white rounded-lg py-[9px] px-[15px]">
          Trailer
        </button>
      </Scroll>
    </div>
  );
}

export default Button_trailer;
