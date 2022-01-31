import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../../../firebase/Firebase-config";
import { useSelector } from "react-redux";
import { UserLogin_selector } from "../../../redux/User/UserLogin_selector";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserLogin() {
  const navigate = useNavigate();
  const userSelector = useSelector(UserLogin_selector);

  //Initialize formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email can't empty")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please enter a valid email address"
        ),

      password: Yup.string()
        .required("Password can't empty")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,19}$/,
          "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        ),
    }),
    onSubmit: (value) => {
      userSelector.map((value) => {
        if (
          value.email === formik.values.email &&
          value.password === formik.values.password
        ) {
          console.log("Hello anh em");
          const user_data = {
            email: formik.values.email,
            name: "admin",
          };
          localStorage.setItem("user_profile", JSON.stringify(user_data));
          navigate("/");
        } else {
          // Do something if false
        }
      });
    },
  });

  const handleLoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((user) => {
        if (user) {
          const user_data = {
            name: user.user.displayName,
            email: user.user.email,
          };
          localStorage.setItem("user_profile", JSON.stringify(user_data));
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[url('https://images4.alphacoders.com/102/thumb-1920-1028306.png')] bg-cover bg-center w-screen h-screen">
      <div className="bg-white w-[420px] h-[520px] rounded-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  ">
        <h1 className="text-gray-500 font-bold py-[20px] border-b-2 w-full text-center text-[20px] border-gray-500">
          Login Account
        </h1>

        <div className="element_center mt-[30px] m-[13px] flex-col">
          <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
            <input
              type="text"
              className="input_login"
              placeholder="USER-EMAIL"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="error_input">{formik.errors.email}</p>
            )}
            <input
              type="password"
              className="input_login"
              placeholder="PASSWORD"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <p className="error_input">{formik.errors.password}</p>
            )}
            <Link to="/user-register" className="link_form ">
              Forgot password ?
            </Link>
            <input
              type="submit"
              className="upper-case transition-all w-full py-[10px] bg-indigo-400 cursor-pointer text-white my-[15px] rounded-md"
              value="LOG IN"
            />
          </form>

          <div className="w-full flex flex-col items-center">
            <h1 className="text-gray-600 font-bold text-[14px]">
              -----Or Sign-in with-----
            </h1>

            <div className="w-[40%] mt-5 bg-[#f2f3f4] rounded-md">
              <button
                className="p-[5px] w-full flex items-center"
                onClick={handleLoginWithGoogle}
              >
                <FcGoogle className="w-[10%] ml-5 text-[20px]" />
                <span className=" w-[70%]">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
