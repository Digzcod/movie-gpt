import React from "react";
import {
  LOGO_NETFLIX,
  SUPPORTED_LANGUAGE,
  USER_PHOTO,
} from "../../utils/helper";
import { PiTranslateBold } from "react-icons/pi";
import useAuthChange from "../../hooks/_auth/useAuthChange";
import {
  setLanguage,
  setLanguageChange,
  langToogleShow,
} from "../../redux/features/configSlice";
import styles from "classnames";
import { MobileBurger, IconsListType } from "./ResponsiveHeader";

const Header = () => {
  const {
    refClickOutside,
    burgerMenu,
    selectedLanguage,
    showLanguage,
    user,
    gpt,
    dispatch,
    setBurgerMenu,
    handleSignOut,
    handleToogleSearch,
  } = useAuthChange();

  const handleLanguageChange = (lg) => {
    dispatch(setLanguageChange(lg));
    dispatch(setLanguage(lg));
  };

  return (
    <div className={TabletViewMD}>
      <img className={IMG_RESPONSIVE} src={LOGO_NETFLIX} alt="Netflix Logo" />
      <div className="mr-[1rem] md:mr-[3rem] flex items-center justify-end">
        {user && (
          <div className="flex items-center">
            {!gpt && (
              <div className="relative flex items-center">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => dispatch(langToogleShow())}
                >
                  <PiTranslateBold size={30} className="text-white" />
                  <span
                    key={selectedLanguage?.identifier}
                    className="w-[6rem] text-white text-lg font-medium ml-2 mr-3"
                  >
                    {selectedLanguage?.name}
                  </span>
                </div>
                {showLanguage && (
                  <div ref={refClickOutside} className="absolute mt-5 right-0">
                    <ul className="w-[10rem] py-3 bg-gray-800 text-lg text-white shadow-lg rounded-lg">
                      {SUPPORTED_LANGUAGE.map((lg) => (
                        <li
                          key={lg.identifier}
                          className="py-2 px-5 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleLanguageChange(lg.identifier)}
                        >
                          {lg.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="hidden md:flex md:items-center ml-4">
              <button
                onClick={handleToogleSearch}
                className="px-2 py-2 mr-4 text-lg font-medium text-white"
              >
                {!gpt ? "Movie List" : "Recommendations"}
              </button>
              <img
                className="w-[2rem] h-[2rem] rounded"
                src={user ? user.photoURL : USER_PHOTO}
                alt={user ? "User" : "User"}
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
            <IconsListType
              isOpen={burgerMenu}
              isOnToogle={() => setBurgerMenu(!burgerMenu)}
            />
          </div>
        )}
      </div>
      {burgerMenu && (
        <MobileBurger
          data={user}
          botGpt={gpt}
          onToogle={handleToogleSearch}
          onLogOut={handleSignOut}
          onMenuClick={() => setBurgerMenu(!burgerMenu)}
        />
      )}
    </div>
  );
};

export default Header;

export const TabletViewMD = styles(
  "absolute w-full max-md:w-full bg-gradient-to-b from-black to-transparent",
  {
    "max-md:flex max-md:justify-center max-md:flex-col" : true,
    "md:flex md:justify-between md:flex-row": true,
  }
);

export const IMG_RESPONSIVE = styles(
  "flex md:mx-0 mt-5 md:mt-0 w-[8.5rem] md:w-44"
);
