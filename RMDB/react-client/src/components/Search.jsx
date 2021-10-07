import React from 'react';
import WatchList from './WatchList';

export default function Search({ filteredMovies }) {
  const filtered = filteredMovies.map(movie => <WatchList key={movie.title} movie={movie} />); 
  return (
    <div>
      {filtered}    
    </div>
  );
}
