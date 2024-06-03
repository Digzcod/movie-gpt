import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/features/userSlice";
import { authFireBase } from "../../utils/firebase";
import { GITHUB_PHOTO } from "../../utils/helper";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const useFormLogin = () => {
  const [signIn, setSignIn] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const initialFormValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    fullName: !signIn
      ? Yup.string().required("Full Name is required")
      : Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: async (values) => {
      setMessage("");
      setLoading(true);
      if (!signIn) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            authFireBase,
            values.email,
            values.password
          );
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: values.fullName,
            photoURL: GITHUB_PHOTO,
          });
          const { uid, email, displayName, photoURL } =
            authFireBase.currentUser;
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
            values.email,
            values.password
          );
        } catch (error) {
          setMessage("Invalid password or email");
          const time = setTimeout(() => {
            setMessage("");
          }, [4000]);
          return () => clearTimeout(time);
        }
      }
      setLoading(false);
    },
  });

  return { formik, message, signIn, setSignIn };
};

export default useFormLogin;
