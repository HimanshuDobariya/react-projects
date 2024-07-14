import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import newsImage from "../assets/news.jpg";
const NewsItem = ({ title, url, description, urlToImage }) => {

  return (
    <Card style={{ width: "300px" }}>
      <Card.Img
        variant="top"
        src={urlToImage ? urlToImage : newsImage}
        style={{ width: "100%", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{title.slice(0, 50)}</Card.Title>
        <Card.Text>
          {description
            ? description.slice(0, 90)
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
        </Card.Text>
        <Button variant="primary" onClick={()=>{window.location.href = url}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
