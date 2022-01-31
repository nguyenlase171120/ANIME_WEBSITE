import { Link } from "react-router-dom";
function Button_registration() {
  return (
    <div>
      <Link to="user-register">
        <button className="text-white font-bold text-[15px]  hover:text-indigo-400">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Button_registration;
