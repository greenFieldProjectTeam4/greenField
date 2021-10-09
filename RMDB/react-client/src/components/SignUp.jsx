import React from 'react';

export default function SignUp(props) {
  return ( <div id="fix" >
    <div class='bold-line'></div>
    <div class='container'>
      <div class='window'>
        <div class='overlay'></div>
        <div class='content'>
          <div class='welcome'>Hello There!</div>
          <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
          <div class='input-fields'>
            <input type='text' placeholder='Username' value={props.username} name="username" type="text" onChange={props.handleChange} class='input-line full-width'></input>
            <input value={props.password} name="password" type="password" onChange={props.handleChange} placeholder='Password' class='input-line full-width'></input>

          </div>
          <div><button onClick={props.submit} class='ghost-round full-width'>Create Account</button></div>
      
    </div>
  </div>
</div>
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
    </div></div>
  )
}

