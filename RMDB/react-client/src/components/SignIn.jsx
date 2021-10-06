import React from 'react';

const SignIn = (props) => (
  <div className="signin">
    
    <input type="text" placeholder="username" onChange={props.handleChange} />
    <input type="password" placeholder="password" onChange={props.handleChange} />
    <button onClick={props.submit} > Sign-in </button>

  </div>
);

export default SignIn;