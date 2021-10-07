
import React from 'react'

export default function TrailerPlayer(props) {
  console.log(props.trailer)
  return (
    <div className="player">
         <div >
            <div ><iframe className="details" src={`https://www.youtube.com/embed/${props.trailer.youtube_trailer_key}`} allowFullScreen></iframe></div>
        </div >
    </div>
  )
}
