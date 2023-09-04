import React, { useState } from "react";
import axios from "axios";

function MovieSearch() {
  const [movieToSearch, setMovieToSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const img_base_path = "https://image.tmdb.org/t/p/original";

  function handleSubmit(e) {
    e.preventDefault();
    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/search/movie?query=" +
    //       movieToSearch +
    //       "&api_key=8125db8f67d23da1d30f6063b1b794b8&include_adult=false&language=en-US&page=1'"
    //   )
    //   .then((result) => {
    //     console.log(result.data.results);
    //     setMovies(result.data.results);
    //   })
    //   .catch((error) => {console.log("You have an error: " + error)})

    async function fetchData() {
      const result = await axios.get(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieToSearch +
          "&api_key=8125db8f67d23da1d30f6063b1b794b8&include_adult=false&language=en-US&page=1'"
      );
      console.log(result.data.results);
      setMovies(result.data.results);
    }

    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Movie / TV Show Name"
          value={movieToSearch}
          onChange={(e) => setMovieToSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="searchResults">
        {movies.map((movie, index) => {
          return (
            <div className="movie" key={index}>
              <img src={img_base_path + movie.poster_path} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieSearch;
