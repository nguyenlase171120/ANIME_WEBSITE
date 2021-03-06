import React from "react";

function Button_logout() {
  //Remove account from local storage and reload website
  const handleLogout = () => {
    localStorage.removeItem("user_profile");
    window.location.reload();
  };
  return (
    <div className=" text-[10px] ">
      <button
        onClick={handleLogout}
        className="uppercase font-bold hover:bg-indigo-500 hover:text-white   py-2 px-5 bg-blue-500 text-white rounded-md "
      >
        Log out
      </button>
    </div>
  );
}

export default Button_logout;
