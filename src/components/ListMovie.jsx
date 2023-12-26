import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MovieCard from './MovieCard';
import '../styles/ListMovie.css'

const ListMovie = () => {
  const [cinema, setCinema] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await Axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=874282a4b8c5618954278b0f8c66509c&language=en-US&sort_by=popularity.desc"
        );
        setCinema(response.data.results);
      } catch (error) {
        console.error("Error on Fetching", error);
      }
    };
    getdata();
  }, []);

  return (
    <div className="movie-grid">
      {cinema.map((movie) => (
        <MovieCard key={movie.id} cinema={movie} />
      ))}
    </div>
  );
};

export default ListMovie;
