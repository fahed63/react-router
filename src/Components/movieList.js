import Cardi from "./Card";
import "../movieList.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, i) => (
        <div>
          <Cardi movie={movie} key={i} />
          <Link to={`/movie/${movie.Id}`}>Movie Description</Link>
        </div>
      ))}
    </>
  );
};
export default MovieList;