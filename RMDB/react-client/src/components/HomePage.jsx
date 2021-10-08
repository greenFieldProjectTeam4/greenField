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
        <TrailerRandom trailers={props.trailers} handleClick={props.handleClick} getOne={props.getOne}
        /> 
      </div>
    <div className="reference">
    <img id="img"  src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"/>
    <img id="img"  src="https://www.symbiotech.com/wp-content/uploads/2021/05/instagram.png"/>
    <img id="img"  src="http://pngimg.com/uploads/twitter/twitter_PNG23.png"/>
    <img id="img"  src="https://www.designbust.com/download/1005/png/transparent_background_youtube_logo_png256.png"/>
    </div>
    <div className="reference2">
    <h4>Get the ЯMDb App ||  Help  ||   Site Index  ||   IMDbPro  ||   Box Office Mojo  ||   IMDb Developer</h4>
    <h4>Press Room ||  Advertising  ||   Jobs  ||   Conditions of Use  ||  Privacy Policy  ||   Interest-Based Ads</h4>
    <h5 id="amazon">© 1990-2021 by ЯMDb.com, Inc.</h5>
    <h5></h5>
    </div>
    </div>
  );
}
 