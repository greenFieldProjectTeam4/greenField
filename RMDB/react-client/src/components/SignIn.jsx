
import React from 'react'

export default function SignIn(props) {
  return (
    <div>
      <input value={props.username} name="username" type="text" placeholder="username" onChange={props.handleChange} />
      <input value={props.password} name="password" type="password" placeholder="password" onChange={props.handleChange} />
      <button onClick={props.submit} > Sign-In</button>


    </div>
  )
}


