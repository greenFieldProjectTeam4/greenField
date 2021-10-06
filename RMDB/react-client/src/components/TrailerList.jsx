import React from 'react';
import TrailerListItems from './TrailerListItems.jsx';

const TrailerList = ({trailers,handleTrailerItems}) => (
  <div className="trailer">  
   
      {trailers.map((trailer)=>{
        return(
          <TrailerListItems className="trailer-list-item" trailer={trailer} handleTrailerItems={handleTrailerItems}/>
        )
      })}
  </div>

);

export default TrailerList;