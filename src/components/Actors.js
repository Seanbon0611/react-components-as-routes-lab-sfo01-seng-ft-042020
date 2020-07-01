import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    {actors.map(actor => {
      return (
        <div>
          <h1>Name:{actor.name}</h1>
          <ul>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
        )
    })}
    </div>
  );
};

export default Actors;
