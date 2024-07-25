import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import Searchresult from "../components/Searchresult";

const Home = () => {
  const [data, setData] = useState(null);

  const [message, setMessage] = useState('')

  const fetchData = async (search) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    const postData = await response.json();

    setData(postData.meals) 
    
    postData.meals ? setMessage('Your Search result :') : setMessage(`No Data Found`)
    
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Food Recipe App</h1>
      <SearchInput fetchData={fetchData} />
      <p className="text-center fw-bold mb-4 fs-3">{message}</p>
      <div className="d-flex align-content-center justify-content-center flex-wrap gap-5">
        {data &&
          data.map((item) => <Searchresult key={item.idMeal} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
