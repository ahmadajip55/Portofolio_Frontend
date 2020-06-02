import React from "react";

const Search = () => {
  return (
    <div>
      <form className="form-inline my-2">
        <input
          className="form-control"
          type="search"
          placeholder="search"
          aria-label="Search"
          style={{ width: "225px", borderRadius: "50px" }}
        />
        {/* <button
          className="btn btn-outline-secondary my-2 my-sm-0"
          type="submit"
        >
          <i class="fas fa-search"></i>
        </button> */}
      </form>
    </div>
  );
};

export default Search;
