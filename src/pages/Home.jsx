import React, { useState, useEffect } from "react";

import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";
import ActorGrid from "../components/actor/ActorGrid";
import ShowGrid from "../components/show/ShowGrid";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState("shows"); // because ../shows?q=girls

  const isShowSearch = searchOption === "shows";

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResult(result);
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const renderResults = () => {
    if (result && result.length === 0) {
      return <div>No results</div>;
    }
    if (result && result.length > 0) {
      // разные свойства в получаемом объекте: item.show || item.person
      return result[0].show ? (
        <ShowGrid data={result} />
      ) : (
        <ActorGrid data={result} />
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="search.."
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show-search">
          Shows
          <input
            type="radio"
            id="show-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
