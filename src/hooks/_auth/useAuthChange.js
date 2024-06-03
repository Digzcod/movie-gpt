import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authFireBase } from "../../utils/firebase";
import { addUsers, removeUsers } from "../../redux/features/userSlice";
import { setShowGptSearch } from "../../redux/features/gptSearchSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { langToogleShow } from "../../redux/features/configSlice";


const useAuthChange = () => {
  const navigate = useNavigate();
  const [burgerMenu, setBurgerMenu] = useState(false)
  const refClickOutside = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt?.isShowSearchGpt);
  const { showLanguage, selectedLanguage } = useSelector(
    (store) => store.multi_language
  );

  function onClickOutside(event) {
    if (
      refClickOutside.current &&
      !refClickOutside.current.contains(event.target)
    ) {
      dispatch(langToogleShow());
    }
  }

  useEffect(() => {
    if (showLanguage) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [showLanguage, refClickOutside]);


  const handleSignOut = () => {
    signOut(authFireBase);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(authFireBase, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUsers());
        navigate("/");
      }
    });
    return () => subscribe();
  }, [dispatch]);

  const handleToogleSearch = () => {
    dispatch(setShowGptSearch());
    setBurgerMenu(false)
  };

  return {
    refClickOutside,
    burgerMenu,
    selectedLanguage,
    user,
    gpt,
    showLanguage,
    selectedLanguage,
    setBurgerMenu,
    dispatch,
    handleToogleSearch,
    handleSignOut,
  };
};
export default useAuthChange;
