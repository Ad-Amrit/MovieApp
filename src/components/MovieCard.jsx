import React, { useEffect, useState } from 'react';
import '../styles/MovieCard.css';
import Status from './Status';

const MovieCard = ({ cinema, movies }) => {
  const { poster_path, title, vote_average, overview } = cinema;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const [movieStatus, setMovieStatus] = useState({});

  useEffect(() => {
    if (movies && Array.isArray(movies)) {
      movies.forEach((movie) => {
        const storedStatus = localStorage.getItem(`movieStatus_${movie.id}`);
        if (!storedStatus) {
          // Set initial status and update state
          localStorage.setItem(`movieStatus_${movie.id}`, 'Completed');
          setMovieStatus((prevStatus) => ({
            ...prevStatus,
            [movie.id]: 'Completed',
          }));
        } else {
          // Update state with stored status
          setMovieStatus((prevStatus) => ({
            ...prevStatus,
            [movie.id]: storedStatus,
          }));
        }
      });
    }
  }, []);

  const handleUpdateStatus = (newStatus) => {
    setMovieStatus((prevStatus) => ({
      ...prevStatus,
      [cinema.id]: newStatus,
    }));
    localStorage.setItem(`movieStatus_${cinema.id}`, newStatus);
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{overview}</p>
          <h5 className="card-text">Rating: {vote_average}</h5>
          <Status
            onUpdateStatus={handleUpdateStatus}
            initialStatus={movieStatus[cinema.id] || 'Completed'}
            movieId={cinema.id}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
