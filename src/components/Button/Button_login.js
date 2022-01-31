import { Link } from "react-router-dom";
function Button_login() {
  return (
    <div>
      <Link to="/user-login">
        <button className="bg-white py-[5px] px-[15px] mr-5 hover:bg-indigo-400 hover:text-white font-bold rounded-md ">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Button_login;
