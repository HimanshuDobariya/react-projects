import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setNewsData(data.articles);
    };

    getData();
  }, [category]);


  return (
    <div className="py-4">
      <h2 className="text-center mb-4 fs-2">
        Latest{" "}
        <Badge bg="danger" className="text-light">
          New
        </Badge>
      </h2>
      <div className="container d-flex align-items-start flex-wrap justify-content-center gap-4">
        {newsData.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            urlToImage={news.urlToImage}
            description={news.description}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
