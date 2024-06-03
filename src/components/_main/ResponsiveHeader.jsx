import React from "react";
import { LOGO_NETFLIX, USER_PHOTO } from "../../utils/helper";
import { PiListBold, PiXBold } from "react-icons/pi";
import styles from "classnames";

export const MobileBurger = ({
  onMenuClick,
  data,
  onToogle,
  onLogOut,
  botGpt,
}) => {
  return (
    <div className={divStyleMenu}>
      <div className="w-full flex justify-center items-center mb-4">
        <img className="w-28 mx-auto" src={LOGO_NETFLIX} alt="Netflix Logo" />
      </div>
      <section className="flex w-full justify-between px-4">
        <PiXBold className="my-3 ml-auto cursor-default" onClick={onMenuClick} size={35} />
      </section>
      <div className="w-full flex items-center py-2 px-4 border-b border-gray-700">
        <img
          className="w-11 h-11 rounded-full my-3"
          src={data ? USER_PHOTO : "default-user-image-url"}
          alt={data ? "User Photo" : "User"}
        />
        <span className="text-md font-medium text-white px-3">
          {data?.displayName || "Guest"}
        </span>
      </div>
      <div className="w-full py-2 px-4 border-b border-gray-700">
        <button
          onClick={onToogle}
          className="w-full py-2 text-lg font-medium text-white bg-gray-800 rounded"
        >
          {botGpt ? "Search for Recommendations" : "Movie List"}
        </button>
      </div>
      <div className="flex w-full mt-10 px-4">
        <button
          onClick={onLogOut}
          className="w-full bg-red-600 text-md py-3 rounded text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export const IconsListType = ({ isOpen, isOnToogle }) => {
  return (
    <div className="md:hidden flex max-md:mx-3">
      <section className="">
        <button onClick={isOnToogle} className="text-white">
          {!isOpen && <PiListBold size={30} />}
        </button>
      </section>
    </div>
  );
};

export const divStyleMenu = styles(
  `
   md:hidden  
   h-[70rem]
   pt-5
   relative -top-[6.6rem] left-0 w-full 
   bg-gray-900 text-white 
   flex flex-col items-start
  `,
  {}
);
