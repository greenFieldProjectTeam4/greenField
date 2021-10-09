import React from 'react';

export default function Details(props) {
  // console.log(props.video.directors)
  return (
    <div >
            
      <div >
             
        <div ><iframe className="details" src={`https://www.youtube.com/embed/${props.video.youtube_trailer_key}`} allowFullScreen></iframe>
          <button id="watchDetails">+ WatchList</button></div>
            
      </div >
      <div className="actors">
        Director: 
        {props.video.directors.map((e, key)=>{
          return (
                
            <div key={key} className="video-player-details">
              <div>{e}</div>
            </div>
          );  
        })}
      </div>
      <form>
        <textarea className="create-body-textarea" placeholder="Post Body" name="body" onChange={props.handleChange}></textarea>
        <button className="create-submit-button" type="submit" onClick={props.putComments}>Comments</button>
      </form>
        
    </div>

  );
}

