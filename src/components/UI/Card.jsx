import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

export const Card = ({ movie }) => {
  const { Title, Poster, Year, imdbID } = movie;

  return (
    <div className="card">
      <img src={Poster} alt={Title} />
      <h1>{Title}</h1>
      <h3>{Year}</h3>

      <div> 
        <NavLink to={`/movie/${imdbID}`}>
          <button className="ticket_buy-btn">Watch Now </button>
        </NavLink>
      </div>
    </div>
  );
};
