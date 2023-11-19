import React from "react";
import { movies } from "../data";

function Movies() {
  const cinema = movies.map((movie) => (
    <div>
      <h1>Name: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      <p>
        Genres:
        <ul>  {movie.genres.map((genre, index)=>(
          <li key={index}>{genre}</li>
        ))}
        </ul>
      </p>
    </div>
  ));

  return (
    <div>
     <h1>Movies Page</h1>
      {cinema}
    </div>
    )
}

export default Movies;
