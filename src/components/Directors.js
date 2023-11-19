import React from "react";
import { directors } from "../data";

function Directors() {
  
  const Dudes = directors.map((person) => (
    <>
      <h4>Name: {person.name}</h4>
      <p>
        Movies:
        <ul>  {person.movies.map((movie, index)=>(
          <li key={index}>{movie}</li>
        ))}
        </ul>
      </p>
    </>
  ));




  return (
    <div>
      {Dudes}
    </div>
  )
}

export default Directors;
