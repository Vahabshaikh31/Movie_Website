import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

const Movie = () => {
  const loader = useLoaderData();

  return (
    <div className="movie-container">
      {loader.Search.map((currMovie) => (
        <Card key={currMovie.imdbID} movie={currMovie} />
      ))}
    </div>
  );
};

export default Movie;
