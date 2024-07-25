import React, { useState } from "react";

const SearchInput = ({ fetchData }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(search);
  };
  return (
    <form
      className="d-flex align-items-center justify-content-center mt-5 mb-3 gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search ingredient for food..."
        style={{ maxWidth: "450px" }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
