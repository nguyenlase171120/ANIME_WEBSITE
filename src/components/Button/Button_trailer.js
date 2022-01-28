import React from "react";

function Button_trailer(props) {
  return (
    <div>
      <button className="bg-[#3898ec] mr-4 text-white rounded-lg py-[9px] px-[15px]">
        {props.name}
      </button>
    </div>
  );
}

export default Button_trailer;
