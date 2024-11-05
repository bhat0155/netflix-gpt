import { NETFLIX_BACKGROUND } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearchPage=()=>{
    return (
        <div className="">
            <div className=" absolute ">
                <img src={NETFLIX_BACKGROUND} alt="background"/>
            </div>
            {
                /**This will have 2 components: GPT Searchbar and GPT movie suggestions */
            }
            <GPTSearchBar/>
            <GPTSuggestions/>
            <h2>GPT Search Page</h2>
        </div>
    )
}

export default GPTSearchPage;