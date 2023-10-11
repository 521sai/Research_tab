import "./SearchResults.css";
import SearchResultt from "./SearchResultt";

// eslint-disable-next-line react/prop-types
export const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
        {results.map((result, id)=>{
            return <SearchResultt result={result} key={id}/>
        })}
    </div>
  )
}
