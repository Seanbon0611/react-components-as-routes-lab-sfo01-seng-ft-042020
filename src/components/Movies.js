import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    {movies.map(movie => {
      return (
        <div>
        <h1>Name:{movie.title}</h1>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
        )
    })}
    </div>
  );
};

export default Movies;
