
import React from 'react';

export default function TrailerPlayer(props) {
  return (
    <div className="player">
      
      <div >
        <div ><iframe className="details" src={`https://www.youtube.com/embed/${props.trailer.youtube_trailer_key}`} allowFullScreen></iframe></div>
      </div >
      <div className="video-player-details">
        <div> <img id="star" src="https://icon-library.com/images/empty-star-icon/empty-star-icon-14.jpg" />{props.trailer.release_date, props.trailer.imdb_rating}</div>
      </div>
    </div>
  );
}
