// /* eslint-disable */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState(""); //💀💀[HANDLING ERRORS]💀💀
  const navigate = useNavigate(); //HOOK used to navigate

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`); //here we the connection with the link, when the user is in the "order" step than the "query" will search depending on what the user is looking for, depending on the ID
    setQuery(""); //🔍🔍[SEARCH BAR]🔍🔍
  } //🔍🔍[SEARCH BAR]🔍🔍 this function is used bellow in the "form", when the user will hit the "Enter" key for exemple will auttomatically focus on the "search"  bar

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
      {/* //🔍🔍[SEARCH BAR]🔍🔍 */}
    </form> // 🔍🔍[SEARCH BAR]🔍🔍 including the "input"inside of the <form/> and like this we can acces the "Search" bar only by pressing the "ENTER"key🔍🔍[SEARCH BAR]🔍🔍
  );
}

export default SearchOrder;
