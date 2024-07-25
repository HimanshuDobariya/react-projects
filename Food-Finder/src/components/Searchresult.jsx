import React from "react";
import { Link } from "react-router-dom";

const Searchresult = ({ item }) => {
  
  return (
    <div
      className="card"
      style={{
        width: "300px",
        padding: "0",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        border: "none",
      }}
    >
      <img
        src={item.strMealThumb}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", aspectRatio: "3/2" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center mb-4">{item.strMeal}</h5>

        <Link
          to={`/${item.idMeal}`}
          className="btn btn-dark d-block w-75 m-auto"
        >
          Recipe
        </Link>
      </div>
    </div>
  );
};

export default Searchresult;
