// MovieTable.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieTable = ({ cinema, updateMovieStatus, movieStatus }) => {
    const [click , setClick] = useState("Completed")
  return (
    <div className="container">
        <div>
            <button onClick={()=> setClick("completed")}>Completed</button>
            <button onClick={()=> setClick("Watching")}>Watching</button>
            <button onClick={()=> setClick("HoldList")}>HoldList</button>
        </div>
        <h1>{click.toUpperCase}Movies</h1>
      <div className="movie-grid">
        {cinema.map((movie) => (
          <MovieCard
            key={movie.id}
            cinema={movie}
            onUpdateStatus={(status) => updateMovieStatus(movie.id, status)}
            initialStatus={movieStatus[movie.id] || 'Completed'}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieTable;
