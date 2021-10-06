import React from 'react'

export default function TrailerListItems({video,handleTrailerItems}) {
    return (
        <div>
            <div>
            <img  src={video.snippet.thumbnails.default.url}/>
            </div>
            <div> 
                <div onClick={()=> handleTrailerItems(video)}>{video.snippet.title}</div> 
                <div>{video.snippet.description}</div>
            </div>
        </div>
       
    )
}
