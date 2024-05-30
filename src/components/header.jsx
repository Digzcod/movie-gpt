import React, { useEffect, useState } from "react";
import { LOGO_NETFLIX, SUPPORTED_LANGUAGE, USER_PHOTO } from "../utils/helper";
import { PiTranslateBold } from "react-icons/pi";
import useAuthChange from "../hooks/_auth/useAuthChange";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  setLanguageChange,
  langToogleShow,
} from "../redux/features/configSlice";

const Header = () => {
  const { user, gpt, handleSignOut, handleToogleSearch } = useAuthChange();
  const { showLanguage, selectedLanguage } = useSelector(
    (store) => store.multi_language
  );
  const dispatch = useDispatch();
  const handleLanguageChange = (lg) => {
    dispatch(setLanguageChange(lg));
    dispatch(setLanguage(lg));
  };

  return (
    <div className=" absolute w-full bg-gradient-to-b from-black to-transparent flex justify-between">
      <img className="w-44" src={LOGO_NETFLIX} alt="" />
      <div className="mr-[3rem] flex items-center">
        {user && (
          <div className="flex items-center cursor-default">
            {!gpt && (
              <>
                <div
                  className="flex items-center"
                  onClick={() => dispatch(langToogleShow())}
                >
                  <PiTranslateBold size={30} className="text-white " />
                  <span
                    key={selectedLanguage?.identifier}
                    className="w-[6rem] text-white text-lg font-medium ml-2 mr-6"
                  >
                    {selectedLanguage?.name}
                  </span>
                </div>
                {showLanguage && (
                  <div className="relative mt-5 -right-[8%] ">
                    <ul className="w-[10rem] absolute right-0 mt-3 py-3 bg-gray-800 text-lg text-white  shadow-lg rounded-lg">
                      {SUPPORTED_LANGUAGE.map((lg) => (
                        <li
                          key={lg.identifier}
                          className="py-2 px-5 hover:bg-gray-700 cursor-default"
                          onClick={() => handleLanguageChange(lg?.identifier)}
                        >
                          {lg.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            <button
              onClick={handleToogleSearch}
              className="px-2 py-2 mr-[2rem] text-lg font-medium text-white"
            >
              {!gpt ? "Movie List" : "Search for Recommendations"}
            </button>
            <img
              className="w-[2rem] h-[2rem] rounded"
              src={user ? user.photoURL : USER_PHOTO}
              alt={user ? "pics" : "user"}
            />
            <span className="text-md font-medium text-white px-2">
              {user?.displayName}
            </span>
            <button
              onClick={handleSignOut}
              className="text-sm px-3 py-1 rounded border border-white text-white ml-3 hover:font-medium hover:bg-red-600 hover:border-none"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;


export const TabletView = {
  
}