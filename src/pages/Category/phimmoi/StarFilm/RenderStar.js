import React from "react";
import { FaStar } from "react-icons/fa";

function RenderStar(props) {
  const renderStarAnime = () => {
    if (props.animeScore >= 50 && props.animeScore < 70) {
      return (
        <div className="element_center">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (props.animeScore >= 70 && props.animeScore < 80) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else {
      return (
        <div className="flex items-center my-[5px] text-yellow-500  ">
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar />
        </div>
      );
    }
  };

  return <div>{renderStarAnime()}</div>;
}

export default RenderStar;
