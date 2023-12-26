import React from 'react';

const MovieCard = ({ cinema }) => {
  const {poster_path, title, vote_average, overview } = cinema;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{overview}</p>
          <h5 className="card-text">Rating: {vote_average}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
