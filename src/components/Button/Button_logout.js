import React from "react";

function Button_logout() {
  const handleLogout = () => {
    localStorage.removeItem("user_profile");
    localStorage.setItem("previousId", "#link_1");
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
