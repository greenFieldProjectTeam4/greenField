import React from 'react'

export default function Details(props) {
    // console.log(props.video.directors)
    return (
        <div >
             <div >
            <div ><iframe className="details" src={`https://www.youtube.com/embed/${props.video.youtube_trailer_key}`} allowFullScreen></iframe></div>
        </div >
        <div className="actors">
        Director: 
        {props.video.directors.map((e,key)=>{
            return(
                
                <div key={key} className="video-player-details">
                    <div>  {e}</div>
                 </div>
            )  
        })}
        </div>

        </div>

    )
}

