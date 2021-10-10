import React from 'react';


const TrailerRandom = ({trailers, handleClick, getOne, update, user})=> (
  <div className="wrapper">

    {trailers.map((e, key)=>{
      return (
        <div key={key} className="item"> <img id="poster" onClick={()=>{ handleClick(); getOne(e._id); }} src={e.poster} />  
          <img id="star" src="https://icon-library.com/images/empty-star-icon/empty-star-icon-14.jpg" />{e.imdb_rating}  <button onClick={()=>{ update(user._id, e); } } id="watch">+ WatchList</button> </div>
      );
    })}
  </div>
);

export default TrailerRandom;


