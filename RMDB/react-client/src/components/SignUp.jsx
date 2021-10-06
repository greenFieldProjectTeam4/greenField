import React from 'react';

const SignUp = (props) => (
  <div className="signup">

    <input name="username" type="text" placeholder="username" onChange={props.handleChange} />
    <input name="password" type="password" placeholder="password" onChange={props.handleChange} />
    <button onClick={props.submitUp} > Sign-in </button>

  </div>
<<<<<<< HEAD
);
=======
)
>>>>>>> 2da37bd45f6d6f04d4a157ca7c52883e90099f1c

export default SignUp;