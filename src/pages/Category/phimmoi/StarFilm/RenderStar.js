import React from "react";
import { FaStar } from "react-icons/fa";

function RenderStar(props) {
  // console.log(props.animeScore);
  const renderStarAnime = () => {
    if (props.scoreAnime >= 0 && props.scoreAnime < 50) {
      return (
        <div className="render_star">
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
        </div>
      );
    } else if (props.scoreAnime >= 50 && props.scoreAnime < 80) {
      return (
        <div className="render_star">
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
          <FaStar className="mr-[10px]" />
        </div>
      );
    } else if (props.scoreAnime >= 80) {
      return (
        <div className="render_star ">
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
