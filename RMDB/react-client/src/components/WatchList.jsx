import React from 'react';
// class and manipulate state
export default function WatchList(props) {
  console.log(props.user)
  return (
    <div >
      <ul className="wrapper haja">
    {props.user.map((e,key)=>{
      return (
        <li key ={key}>
          <div className="titlewatch">{e.title}</div>
          <div><iframe className="item" src={`https://www.youtube.com/embed/${e.youtube_trailer_key}`} allowFullScreen></iframe></div>
          <div className="item2"> <img id="star"  src="https://icon-library.com/images/empty-star-icon/empty-star-icon-14.jpg"  /> {e.imdb_rating} <button onClick={()=>{update(user._id) } } id="watch">Delete</button></div><br/>
        </li>
      )
    })}
        </ul>   
    </div>
  );
}
