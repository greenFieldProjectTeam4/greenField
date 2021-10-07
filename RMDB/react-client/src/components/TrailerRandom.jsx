import React from 'react';


const TrailerRandom =(props)=> (

<div className="wrapper">

{props.trailers.map((e,key)=>{
return (
  <div key={key} className="item"> <img id="poster" onClick={()=>props.changeView("details")}  src={e.poster} />  <img id="star" src="https://icon-library.com/images/empty-star-icon/empty-star-icon-14.jpg"  />  <button id="watch">+ WatchList</button> </div>
)
})}
  
  
  </div>
)

export default TrailerRandom


{/* <h4>{e.imdb_rating}</h4>  */}