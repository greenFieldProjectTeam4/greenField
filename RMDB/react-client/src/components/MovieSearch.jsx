import React from 'react';

export default function MovieSearch(props) {
  return (
    <div>
      <p>{props.data.Actors}</p>
      <p>{props.data.Awards}</p>     
      <p>{props.data.Genre}</p> 
      <p>{props.data.imdbRating}</p> 
      <img src ={props.data.Poster} />   
    </div>
  );
}
