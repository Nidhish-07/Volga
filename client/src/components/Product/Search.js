import React, { Fragment, useState } from "react";
import "./Search.css";
const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push(`/products`);
    }
  };

  return (
    <Fragment>
      <form
        className="search w-[100vw] h-[100vh] max-w-[100%] flex justify-center items-center fixed top-[0%] left-[0%] bg-slate-400"
        onSubmit={searchSubmitHandler}
      >
        <input
          type="text"
          placeholder="Search product"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
