import OpenAI from "openai";

export const OPENAI_APIKEY =
  "sk-proj-PNLiu7EfpK48kUv7F1H1T3BlbkFJt4QmECTVgHAArbdBtC6m";

export const GPT_AI = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

// export const AI_MESSAGE = {
//   messages: [{ role: "user", content: "Say this is a test" }],
//   model: "gpt-3.5-turbo",
// };

export const movieSystemQuery ="Act like a movie recommendation system And suggest some movies for the query"
export const exampleSuggestionQueryResult = ". Only give me names of 15 movies, comma separed like the example result given ahead. Example: Ghosted, Vagabound 2, Dune, Garfield 2, Stone, Red Notice"  
