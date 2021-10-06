import React from 'react';

const SignUp = (props) => (
  <div className="signup">

    <input name="username" type="text" placeholder="username" onChange={props.handleChange} />
    <input name="password" type="password" placeholder="password" onChange={props.handleChange} />
    <button onClick={props.submitUp} > Sign-in </button>

  </div>
);

export default SignUp;