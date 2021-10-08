import React from 'react';
import TrailerList from './TrailerList.jsx';
import TrailerPlayer from './TrailerPlayer.jsx';
import TrailerRandom from './TrailerRandom.jsx';

export default function HomePage(props) {
  // console.log("home"+props.trailer)
  return (
    <div>
      <div>
        <div> <TrailerPlayer   trailer={props.trailer}/> </div>
        <div> <TrailerList populars={props.populars}  getTrailer={props.getTrailer}  
       /> </div>
      </div>
      
      <div> 
        <TrailerRandom trailers={props.trailers} handleClick={props.handleClick} getOne={props.getOne}/> 
      </div>

    </div>
  );
}
 