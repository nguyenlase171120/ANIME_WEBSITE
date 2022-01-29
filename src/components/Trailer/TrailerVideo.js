import { useState } from "react";
import ReactPlayer from "react-player/youtube";

function TrailerVideo(props) {
  const [videoTrailer, setVideoTrailer] = useState(props.video);

  return (
    <div className="flex flex-col mb-[60px] pt-[20px] border-t border-gray-600">
      <h1 className="text-[#f1b722] mt-[10px] mb-[20px] text-[28px] font-semibold">
        Official trailer:
      </h1>

      <div>
        {videoTrailer ? (
          <ReactPlayer
            url={videoTrailer}
            width="100%"
            style={{ borderRadius: "30px" }}
            controls
          />
        ) : (
          <h2 className="text-white">
            Trailer của phim đang có sự cố . Chúng tôi rất xin lỗi về trường hợp
            này
          </h2>
        )}
      </div>
    </div>
  );
}

export default TrailerVideo;
