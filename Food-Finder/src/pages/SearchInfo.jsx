import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchInfo = () => {
  const { mealId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const postData = await response.json();

      setInfo(postData.meals[0]);
    };

    fetchData();
  }, [mealId]);

  let list = [];
  if (info) {
    console.log(info.strInstructions);
    list = info.strInstructions.split(".").slice(0, -1);
  }

  return (
    <>
      {!info ? (
        "Data not available"
      ) : (
        <div className="container py-3">
          <img
            src={info.strMealThumb}
            alt=""
            className="d-block m-auto"
            style={{
              maxWidth:'350px',
              objectFit: "cover",
              aspectRatio :'4/3'
            }}
          />
          <div className="content">
            <h2 className="fw-bold text-center  my-4">{info.strMeal}</h2>
            <p className="fs-4">Recipe's Details :</p>

            <ul className="list-group px-3">
              {list && list.map((listItem) => <li className="">{listItem}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchInfo;
