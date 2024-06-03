import React from "react";
import Header from "../_main/header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchPage from "../_searchGpt/SearchPage";
import { useSelector } from "react-redux";

const BrowsePage = () => {
  const gpt = useSelector((store) => store.gpt?.isShowSearchGpt);

  return (
    <section className="grid w-full h-screen bg-black">
      <Header />
      {!gpt ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </section>
  );
};

export default BrowsePage;
