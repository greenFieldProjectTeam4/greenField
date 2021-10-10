import React from 'react';


const TrailerTvShow = ({tvs, handleClick, getOneTv})=> (

  <div className="wrapper">

    {tvs.map((e, key)=>{
      return (
        
        <div key={key} className="item"> <img id="poster" onClick={()=>{ handleClick(); getOneTv(e._id); }} src={e.poster} />  
          <img id="star" src="https://icon-library.com/images/empty-star-icon/empty-star-icon-14.jpg" />{e.imdb_rating}  <button id="watch">+ WatchList</button> </div>
      );
    })}
  </div>
);

export default TrailerTvShow;
