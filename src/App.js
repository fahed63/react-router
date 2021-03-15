import React, { useState } from "react";
import "./App.css";
import Cardi from "./Components/Card";
import MovieList from "./Components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAdd from "./Components/modalpop";
import SearchBox from "./Components/Filter";
import { Button, Modal } from "react-bootstrap";
import modalAdd from "./Components/modalpop";
import { Switch, Link, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter } from "react-router-dom";
import MoreAbout from "./Components/MoreAbout";
function App() {
  const [movies, setMovies] = useState([
    {
      Id: uuidv4(),
      Title: "Bad Boy For Life",
      Description: "Es handelt sich um ein Junge, der ....",
      PosterUrl:
        "data:image/jpeg;base64,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",
      Rate: 4,
      Trailer: (
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=jKCj3XuPG8M"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The great Gatsby",
      Description: "Es handelt sich um einen Mann, der ....",
      PosterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71oI1YEWt8L._AC_SL1200_.jpg",
      Rate: 3,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=rARN6agiW7o"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Fault in our Stars",
      Description: "Es handelt sich um zwei Freunde, die an Krebs leiden ....",
      PosterUrl:
        "https://nesmedia2017.files.wordpress.com/2016/08/tfios-poster.jpg",
      Rate: 5,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=9ItBvH5J6ss"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "X-men apocalypse",
      Description: "Es handelt sich um einen Mann, der ....",
      PosterUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg",
      Rate: 3,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=Jer8XjMrUB4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Loft",
      Description: "Es geht darum, ...",
      PosterUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/42/The_Loft_film_poster.png",
      Rate: 2,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=1bJZYqGfYGE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      Id: uuidv4(),
      Title: "The Joker",
      Description: "Es geht darum, ...",
      PosterUrl:
        "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
      Rate: 1,
      Trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/watch?v=zAGVQLHvwOY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  const search = (text) => {
    setSearchValue(text);
  };
  const [keyRate, setKeyRate] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <h1 className="header">Movie Database</h1>
      </div>
      <div className="SearchBar">
        <SearchBox search={search} setKeyRate={setKeyRate} keyRate={keyRate} />
        <ModalAdd addmovie={addMovie} />
      </div>

      <div
        className="row"
        style={{ display: "flex", justifyContent: "spaceBetween" }}
      >
        <MovieList
          className="MovieList"
          movies={movies.filter(
            (movie) =>
              movie.Rate >= keyRate &&
              movie.Title.toLowerCase().includes(
                searchValue.toLowerCase().trim()
              )
          )}
        />
      </div>
      <Route
          path="/Movie/:id"
          render={(props) => <MoreAbout {...props} movies={movies} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
