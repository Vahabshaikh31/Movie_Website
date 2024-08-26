import React from "react";
import "./card.css";

export const Card = ({ movie }) => {
  const { Title, Poster, Year } = movie;

  return (
    <div className="card">
      <img src={Poster} alt={Title} />
      <h1>{Title}</h1>
      <h3>{Year}</h3>
    </div>
  );
};
