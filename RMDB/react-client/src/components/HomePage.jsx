import React from 'react';
import TrailerList from './TrailerList.jsx';
import TrailerPlayer from './TrailerPlayer.jsx';
import TrailerRandom from './TrailerRandom.jsx';

export default function HomePage(props) {
  return (
    <div>
      <div>
        <div> <TrailerPlayer trailer={props.currentTrailer} /> </div>
        <div> <TrailerList trailers={props.trailers} handleTrailerItems={props.handleTrailerItems}/> </div>
      </div>
      
      <div> <TrailerRandom  /> </div>

    </div>
  );
}

 