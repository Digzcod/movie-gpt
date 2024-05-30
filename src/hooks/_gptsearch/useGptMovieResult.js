import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGptMovieSuggestions } from "../../redux/features/configSlice";

const useGptMovieResult = () => {
 
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getGptMovieSuggestions())
    }, [dispatch])

    const { gptMovieResults } = useSelector(
        (store) => store.multi_language
      );

  return {gptMovieResults}
}

export default useGptMovieResult