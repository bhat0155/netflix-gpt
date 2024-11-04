import React, { useRef } from "react";

import { languages } from "../utils/languages";
import { useSelector } from "react-redux";
import openAIGPT from "../utils/openAI";
import model from "../utils/openAI";

const GPTSearchBar = () => {
  const chosenLanguage = useSelector((store) => store.language.language);
  console.log({ chosenLanguage });
  const searchText = useRef(null);

  const handleSearch = async () => {
    console.log(searchText.current.value);

    const query =
      "Give me names of 5 movies with the keyword: " +
      searchText.current.value +
      " and give them comma seperated. For example, don, sholay, gadar, koi mil gaya, singham. Also make sure you just output 5 comma separated movies and use knowledge to the best of your ability";

    const geminiResult = await model.generateContent(query);
    console.log(geminiResult.response.text());
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12 z-1 relative"
        onSubmit={(ev) => ev.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={languages[chosenLanguage].placeholder}
        ></input>
        <button
          className="bg-red-700 text-white rounded-lg py-2 px-4 m-4 col-span-3"
          onClick={handleSearch}
        >
          {languages[chosenLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
