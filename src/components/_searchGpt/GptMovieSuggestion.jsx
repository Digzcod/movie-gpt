import { IMG_CDN_URL } from "../../utils/helper";
import useGptMovieResult from "../../hooks/_gptsearch/useGptMovieResult";

const GptMovieSuggestion = () => {
  const { loading, gptMovieResults } = useGptMovieResult();
  if (!gptMovieResults ) return null;
  if (loading ) return null;
  return (
    <div
      className="w-full  py-5 px-[3rem] h-auto rounded-xl"
      style={{ backgroundColor: "rgba(1, 0, 0, 0.75)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {gptMovieResults.map((movie, index) => (
          <section
            key={movie?.id || index}
            className="w-full h-[full] flex flex-col items-center py-5 px-5 rounded-md shadow-md"
          >
            <p className="text-center text-xl text-white font-semibold my-3">
              {movie?.title}
            </p>
            <div className="w-[260px] h-[350px] flex justify-center items-center">
              <img
                className="w-full h-full object-cover rounded-md"
                src={IMG_CDN_URL + movie?.poster_path}
                alt={movie?.title}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestion;
