import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL_OPTIONS } from "../../utils/helper";
import { getGptMovieSuggestions } from "../../redux/features/configSlice";
import {
  exampleSuggestionQueryResult,
  GPT_AI,
  movieSystemQuery,
} from "../../utils/openai";

const useGptMovieSearch = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.multi_language?.language);

  const searchGptMovie = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false",
      URL_OPTIONS
    );
    const data = await res.json();
    return data?.results[0];
  };

  const handleSearchGpt = async () => {
    setLoading(true);
    try {
      // Make an API call to GPT API then Get the Movies Result
      const dataWasSearch = await GPT_AI.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              movieSystemQuery +
              searchText.current.value +
              exampleSuggestionQueryResult,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      // console.log(dataWasSearch.choices?.[0]?.message?.content);
      // console.log(dataWasSearch.choices?.[0]?.message?.content.split(","));
      const gtpMovies = dataWasSearch.choices?.[0]?.message?.content.split(",");
      const promiseArray = gtpMovies.map((movie) => searchGptMovie(movie));
      const dataResult = await Promise.all(promiseArray);
      // console.log(dataResult);
      dispatch(getGptMovieSuggestions(dataResult));
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getGptMovieSuggestions();
  }, [searchText]);

  return { loading, searchText, languageKey, handleSearchGpt };
};

export default useGptMovieSearch;
