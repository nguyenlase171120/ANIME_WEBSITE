import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserLogin_slice } from "../../../redux/User/UserLogin_slice";

function UserRegistration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name cant empty")
        .matches(
          /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
          "User name was invalid"
        ),
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
      confirmPassword: Yup.string()
        .required("Confirm password cant empty")
        .oneOf([Yup.ref("password"), null], "Password must matched"),
    }),
    onSubmit: (value) => {
      const data = {
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
      };

      // dispatch(UserLogin_slice.actions.handleUserProfile(data));
      localStorage.setItem("user_profile", JSON.stringify(data));
      navigate("/");
    },
  });

  return (
    <div className="bg-[url('https://images6.alphacoders.com/904/thumb-1920-904751.png')] bg-center bg-cover h-screen ">
      <div className="w-[500px]  bg-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg">
        <h1 className="text-center font-bold text-gray-500 text-[20px] uppercase py-[20px] border-b-2 border-gray-500">
          Sign Up
        </h1>
        <div className="p-[20px]">
          <form
            className="flex justify-center flex-col"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="text"
              className="input_login"
              id="name"
              name="name"
              placeholder="USER-NAME"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p className="error_input">{formik.errors.name}</p>
            )}
            <input
              type="email "
              id="email"
              name="email"
              className="input_login"
              placeholder="USER-EMAIL"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="error_input">{formik.errors.email}</p>
            )}
            <input
              id="password"
              name="password"
              type="password"
              className="input_login"
              placeholder="PASSWORD"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <p className="error_input">{formik.errors.password}</p>
            )}
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="input_login"
              placeholder="CONFIRM-PASSWORD"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && (
              <p className="error_input">{formik.errors.confirmPassword}</p>
            )}
            <div className="text-right">
              <Link to="user-login" className="link_form">
                Already account ?
              </Link>
            </div>
            <input
              type="submit"
              className="w-full cursor-pointer my-[10px] py-[10px] rounded-md text-white font-semibold text-[15px bg-blue-500 hover:bg-black hover:text-white transition-all "
              value="SIGN UP"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
