import React from 'react';
import axios from 'axios';


export default function WatchList({movie}) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>        
      
            
    </div>
  );
}
