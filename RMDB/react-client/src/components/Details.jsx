import React from 'react'

export default function Details(props) {
    console.log(props.video.stars)
    return (
        <div >
             <div >
            <div ><iframe className="details" src={`https://www.youtube.com/embed/${props.video.youtube_trailer_key}`} allowFullScreen></iframe></div>
        </div >
        <div className="actors">
        {props.video.stars.map((e,key)=>{
            return(
                <div className="item2" key={key}>{e}</div>
            )
           
        })}
        </div>
        </div>

    )
}

