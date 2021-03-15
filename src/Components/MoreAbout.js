import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
const MoreAbout = (props) => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(props.movies.filter((el) => el.Id === props.match.params.Id)[0]);
  });
  return (
    <>
      {movie && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movie.PosterUrl} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.PosterUrl}</Card.Text>
            <Card.Text>{movie.Description}</Card.Text>
            <Card.Text>{movie.Trailer}</Card.Text>
            
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MoreAbout;