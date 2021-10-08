
import React from 'react'

export default function SignIn(props) {
  return (
    <div id="fix" >
    <div class='bold-line'></div>
  <div class='container'>
    <div class='window'>
      <div class='overlay'></div>
      <div class='content'>
        <div class='welcome'>Hello There!</div>
        <div class='input-fields'>
          <input type='text' placeholder='Username' value={props.username} name="username" type="text"  onChange={props.handleChange} class='input-line full-width'></input>
          <input value={props.password} name="password" type="password"  onChange={props.handleChange} placeholder='Password' class='input-line full-width'></input>
  
        </div>
        <div><button onClick={props.submit} class='ghost-round full-width'>Enter to your account</button></div>
      </div>
    </div>
  </div></div>
  )
}


