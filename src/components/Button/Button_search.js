import React from "react";

function Button_search(props) {
  return (
    <div>
      <button className="rounded-r-md px-[15px] py-[7px] bg-[#3898ec] text-white absolute top-0 right-0">
        {props.name}
      </button>
    </div>
  );
}

export default Button_search;
