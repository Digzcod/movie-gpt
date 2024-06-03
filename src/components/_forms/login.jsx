import React from "react";
import Header from "../_main/header";
import useFormLogin from "../../hooks/_auth/useFormLogin";
import { Image_BG_NetFlix } from "../../utils/helper";

const Login = () => {
  const { formik, message, signIn, setSignIn } = useFormLogin();
  return (
    <>
      <Header />
      <div
        className="w-full h-[100vh] flex object-fit"
        style={{ backgroundImage: `url(${Image_BG_NetFlix})` }}
      >
        <section className="mx-auto mt-[10rem] px-2">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-black bg-opacity-65 w-auto sm:w-400px md:w-p[500px] px-[2rem] py-[3rem]"
          >
            <h1 className="text-2xl text-white font-bold mb-3">
              {signIn ? "Login" : "Sign up"}
            </h1>
            {!signIn && (
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="bg-gray-800 py-3 px-2 w-full my-3 text-white rounded"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
            )}
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-600">{formik.errors.fullName}</div>
            ) : null}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 py-3 px-2 w-full my-3 text-white rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="bg-gray-800 py-3 px-2 w-full my-3 text-lg text-white rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
            <span className="text-lg text-red-600 font-bold">{message}</span>
            <button
              type="submit"
              className="w-full bg-red-700 text-white mt-5 px-3 py-2 rounded-md opacity-100 font-medium"
            >
              {signIn ? "Sign In" : "Sign Up"}
            </button>
            <h1 className="text-md text-white text-center my-2 font-medium">
              OR
            </h1>
            {!signIn ? (
              <button className="w-full bg-white font-semibold text-gray-950  px-3 py-2 rounded-md z-[2]">
                Sign Up with Google
              </button>
            ) : (
              <button className="w-full bg-gray-700 text-white  px-3 py-2 rounded-md z-[2]">
                Use a Sign-In Code
              </button>
            )}
            {signIn && (
              <div className="mt-2">
                <span
                  onClick={() => setSignIn(!signIn)}
                  className="text-sm text-center my-5 text-white "
                >
                  Forgot Password
                </span>
                <div className="flex items-center my-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[1.2rem] text-black bg-white"
                  />
                  <span className="text-md text-white font-medium">
                    Remember Me
                  </span>
                </div>
              </div>
            )}
            {signIn ? (
              <span className="text-sm my-5 text-white">
                New Account?{" "}
                <span
                  onClick={() => setSignIn(!signIn)}
                  className=" font-bold hover:border-b-[2px] hover:cursor-pointer hover:border-red-500"
                >
                  {" "}
                  Please sign up
                </span>
              </span>
            ) : (
              <span className="text-sm my-5 text-white ">
                Already have an account?
                <span
                  onClick={() => setSignIn(!signIn)}
                  className="text-white ml-2 font-bold hover:border-b-[2px] hover:cursor-pointer hover:border-red-500"
                >
                  {" "}
                  Please sign in here
                </span>
              </span>
            )}
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
