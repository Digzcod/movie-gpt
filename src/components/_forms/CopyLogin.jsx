import React, { useRef, useState } from "react";
import Header from "../_main/header";
import { GITHUB_PHOTO, Image_BG_NetFlix } from "../../utils/helper";
import { ValidationWithRegex } from "./validation";
import { authFireBase } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../../redux/features/userSlice";
const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch()

  const handleSubmitBtnClick = async () => {
    if (!emailRef.current || !passwordRef.current) return;

    const message = ValidationWithRegex(
      emailRef.current.value,
      passwordRef.current.value
    );
    setMessage(message);
    if (message) return;
    setLoading(true);
    if (!signIn) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          authFireBase,
          emailRef.current.value,
          passwordRef.current.value
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: fullName.current.value,
          photoURL: GITHUB_PHOTO,
        });
        const { uid, email, displayName, photoURL } = authFireBase.currentUser;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } catch (error) {
        setMessage("Error signing up: " + error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(
          authFireBase,
          emailRef.current.value,
          passwordRef.current.value
        );
      } catch (error) {
        setMessage("Invalid password or email");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div>
        <img className="w-full h-full" src={Image_BG_NetFlix} alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-[15%] grid right-[35%] w-[25%] bg-black px-[2.5rem] py-[3rem] mx-auto opacity-[89.5%] tracking-wide"
      >
        <h1 className="text-2xl text-white font-bold mb-3">
          {signIn === false ? "Sign up" : "Login"}
        </h1>
        {signIn === false && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="bg-gray-800 py-3 px-2 w-full my-3 text-white rounded"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="bg-gray-800 py-3 px-2 w-full my-3 text-white rounded"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="bg-gray-800 py-3 px-2 w-full my-3 text-lg text-white rounded"
        />
        <span className="text-lg text-red-600 font-bold">{message}</span>
        <button
          onClick={handleSubmitBtnClick}
          className="w-full bg-red-700 text-white mt-5 px-3 py-2 rounded-md opacity-100 font-medium"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-md text-white text-center my-2 font-medium">OR</h1>
        {signIn === false ? (
          <button className="w-full bg-white font-semibold text-gray-950  px-3 py-2 rounded-md z-[2]">
            Sign Up with Google
          </button>
        ) : (
          <button className="w-full bg-gray-700 text-white  px-3 py-2 rounded-md z-[2]">
            Use a Sign-In Code
          </button>
        )}
        {signIn && (
          <>
            <span
              onClick={() => setSignIn(!signIn)}
              className="text-sm text-center my-5 text-white "
            >
              Forgot Password
            </span>
            <div className="flex">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[1.2rem] text-black bg-white"
              />
              <span className="text-md text-white ml-3 font-medium">
                Remember Me
              </span>
            </div>
          </>
        )}

        {signIn === true && (
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
        )}
        {signIn === false && (
          <>
            <span
              onClick={() => setSignIn(!signIn)}
              className="text-sm my-5 text-white "
            >
              Already have an account?
              <span
                onClick={() => setSignIn(!signIn)}
                className="text-white ml-2 font-bold hover:border-b-[2px] hover:cursor-pointer hover:border-red-500"
              >
                {" "}
                Please sign in here
              </span>
            </span>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
