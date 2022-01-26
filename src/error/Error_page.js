//This file used to display error when not found page

import { useNavigate } from "react-router-dom";
function Error_page() {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('https://wallpaperaccess.com/full/2830779.jpg')] bg-cover bg-center w-screen h-screen element_center text-white">
      <h1 className="font-bold text-[80px] mb-[20px]">Oh no!</h1>
      <p className="mb-[20px] font-semibold text-[30px]">
        Sorry. This page does not exist
      </p>
      <button
        className="p-[20px] bg-yellow-400 uppercase text-md rounded-lg font-bold"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to homepage
      </button>
    </div>
  );
}

export default Error_page;
