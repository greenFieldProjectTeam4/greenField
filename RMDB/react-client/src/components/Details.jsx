import React from 'react'

export default function Details(props) {
    // console.log(props.video.directors)
    return (
        <div>
            
            <div className="detailsRandom">  
                <div><iframe className="details" src={`https://www.youtube.com/embed/${props.video.youtube_trailer_key}`} allowFullScreen></iframe>
                
            </div>
        </div >   
        <div className="infos">
        <h4 className="title">Title: {props.video.title} </h4>
        </div>
        <form>
        <button id="watchDetails">+ WatchList</button> 
        <div className="description">Description: <br/> {props.video.description}</div><br/>
        <textarea className="create-body-textarea"  placeholder="Post Body" name="body" onChange={props.handleChange}></textarea>
        <button className="create-submit-button" type="submit" onClick={props.putComments}>Submit</button>
        </form>
        <div className="reference">
    <img id="img"  src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"/>
    <img id="img"  src="https://www.symbiotech.com/wp-content/uploads/2021/05/instagram.png"/>
    <img id="img"  src="http://pngimg.com/uploads/twitter/twitter_PNG23.png"/>
    <img id="img"  src="https://www.designbust.com/download/1005/png/transparent_background_youtube_logo_png256.png"/>
    </div>
    <div className="reference2">
    <h4>Get the ЯMDb App ||  Help  ||   Site Index  ||   ЯMDbPro  ||   Box Office Mojo  ||   ЯMDb Developer</h4>
    <h4>Press Room ||  Advertising  ||   Jobs  ||   Conditions of Use  ||  Privacy Policy  ||   Interest-Based Ads</h4>
    <h5 id="amazon">© 1990-2021 by ЯMDb.com, Inc.</h5>
    </div>
        </div>

    )
}

