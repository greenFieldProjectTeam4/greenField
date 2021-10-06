import React from 'react';
import TrailerListItems from './TrailerListItems.jsx';

const TrailerList = ({trailers,handleTrailerItems}) => (
  <div className="trailer">  
<<<<<<< HEAD
    <ul>
      {/* map here */}
      <li className="trailer-list-item">

      </li>
    </ul>
=======
   
      {trailers.map((trailer)=>{
        return(
          <TrailerListItems className="trailer-list-item" trailer={trailer} handleTrailerItems={handleTrailerItems}/>
        )
      })}
>>>>>>> 2da37bd45f6d6f04d4a157ca7c52883e90099f1c
  </div>

);

export default TrailerList;