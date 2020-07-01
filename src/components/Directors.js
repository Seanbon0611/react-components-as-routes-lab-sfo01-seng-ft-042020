import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {directors.map(director => {
        return (
          <div>
            <h1>Name:{director.name}</h1>
            <p>Movies:</p>
            <ul>
              {director.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
          )
      })}
    </div>
  );
}

export default Directors
