import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header>
      <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
      </Card.Header>
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Img variant="top" src={news.image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
