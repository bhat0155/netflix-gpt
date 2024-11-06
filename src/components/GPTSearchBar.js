import React, { useRef } from "react";

import { languages } from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import openAIGPT from "../utils/openAI";
import model from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
  const chosenLanguage = useSelector((store) => store.language.language);

  const searchText = useRef(null);
  const dispatch=useDispatch()

  const handleSearch = async () => {
    console.log("search button clicked");
    const query =
      "Give me names of 5 movies with the keyword: " +
      searchText.current.value +
      " and give them comma seperated. For example, don, sholay, gadar, koi mil gaya, singham. Also make sure you just output 5 comma separated movies and use knowledge to the best of your ability";

    const geminiResult = await model.generateContent(query);
    const arrayOfMovies =
      geminiResult.response.candidates[0].content?.parts[0].text.split(",");
    console.log(arrayOfMovies);

    const searchMovies = async (movie) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);

      return json.results;
    };

    const tmdbResults = arrayOfMovies?.map((item) => searchMovies(item));
    const resolvedResults= await Promise.all(tmdbResults);
    console.log(resolvedResults)

    dispatch(addMovies({gemini:arrayOfMovies, tmdb:resolvedResults}))
  };
  return (
    <div className="pt-[10%] flex justify-center bg-black">
      <form
        className="bg-black w-1/2 grid grid-cols-12 z-1 relative"
        onSubmit={(ev) => ev.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 w-full rounded-lg mx-2"
          placeholder={languages[chosenLanguage].placeholder}
        ></input>
        <button
          className="bg-red-700 text-white rounded-lg py-2 px-4 m-4 col-span-3 w-20"
          onClick={handleSearch}
        >
          {languages[chosenLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
