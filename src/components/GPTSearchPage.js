import { useSelector } from "react-redux";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearchPage = () => {
  return (
    <div className="bg-black pt-[10%] h-screen">
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearchPage;
