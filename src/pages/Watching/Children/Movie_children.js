import React from "react";
import ReactPlayer from "react-player";

function Movie_children() {
  return (
    <div className="bg-gray-300">
      <ReactPlayer
        url="https://api.aniapi.com/v1/proxy/https%3a%2f%2feu-01.gogoplay.in%2fwww04%2fwzFum1X4_soBNQaIs3muxw%2f1642685599%2fbabe87f3bb4a21ef820c63112f4f8185%2fep.24.1605758067.m3u8/gogoanime/?referrer=https%3a%2f%2fgogoplay1.com%2f"
        controls
        width="300px"
        height="400px"
      />
    </div>
  );
}

export default Movie_children;
