import React from 'react';


const TrailerList = (props) => (
  <div className="trailer">  
   
      {props.populars.map((e,key)=>{
        return(
          <div key={key} className="item1">  <img id="poster" onClick={()=>{props.getTrailer(e._id)}}   src={e.poster} /> </div>
        )
      })}
  </div>

);

export default TrailerList;


