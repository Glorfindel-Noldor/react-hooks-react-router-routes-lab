import React from "react";
import { actors } from "../data";

function Actors() {
  const people = actors.map((person)=>(
    <>
    <h4>Name: {person.name}</h4>
    <ul>Movies: { person.movies.map((movie, index)=>(
      <li key={index}>{movie}</li>
    ))}
    </ul>
    </>
  ))



  return (
    <div>
      {people}
    </div>
  )
}

export default Actors;
