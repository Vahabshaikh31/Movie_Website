import { useLoaderData } from "react-router-dom";

export const MovieDetail = () => {
  const moviesData = useLoaderData();
  const { Title, Released, Poster, Year } = moviesData;

  return (
    <div className="movie-detail-container">
      <h1 className="movie-title">{Title}</h1>
      <h2 className="movie-released">Released: {Released}</h2>
      <img className="movie-poster" src={Poster} alt={Title} />
      <h3 className="movie-year">Year: {Year}</h3>
    </div>
  );
};
