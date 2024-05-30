import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authFireBase } from '../../utils/firebase';
import { addUsers, removeUsers } from '../../redux/features/userSlice';
import { setShowGptSearch } from '../../redux/features/gptSearchSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const useAuthChange = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const gpt = useSelector((store) => store.gpt?.isShowSearchGpt);
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
      dispatch(setShowGptSearch())
    }
  
  return {user, gpt, handleToogleSearch, handleSignOut}
}
export default useAuthChange