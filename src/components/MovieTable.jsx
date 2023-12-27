import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import '../styles/ListMovie.css'

const MovieTable = ({ cinema }) => {
  const [movieStatus, setMovieStatus] = useState({});

  useEffect(() => {
    const initialStatuses = {};
    cinema.forEach((movie) => {
      const storedStatus = localStorage.getItem(`movieStatus_${movie.id}`);
      if (storedStatus) {
        initialStatuses[movie.id] = storedStatus;
      } else {
        initialStatuses[movie.id] = "default";
      }
    });
    setMovieStatus(initialStatuses);
  }, [cinema]);

  const updateMovieStatus = (movieId, status) => {
    setMovieStatus((prevStatuses) => ({
      ...prevStatuses,
      [movieId]: status,
    }));
  };

  const [click, setClick] = useState("default");

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => setClick("default")}>Default</button>
        <button onClick={() => setClick("completed")}>Completed</button>
        <button onClick={() => setClick("watching")}>Watching</button>
        <button onClick={() => setClick("holdList")}>HoldList</button>
      </div>
      <h1 className="MoviesStatus">{click.toUpperCase()} MOVIES</h1>
      <div className="movie-grid">
        {cinema.map((movie) => {
          if (movieStatus[movie.id]?.toLowerCase() === click.toLowerCase())
            return (
              <MovieCard
                key={movie.id}
                cinema={movie}
                onUpdateStatus={(status) => updateMovieStatus(movie.id, status)}
                initialStatus={movieStatus[movie.id] || "default"}
              />
            );
        })}
      </div>
    </div>
  );
};

export default MovieTable;