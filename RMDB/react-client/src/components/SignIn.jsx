
import React, { Component } from 'react'

export default class SignIn extends Component {
 constructor(props) {
   super(props);
   this.state={
     username:'', 
     password:''
   }
 }
handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

submit(){
  if(this.state.password !== '' && this.state.username !== ''){
    this.props.signin(this.state)

  this.setState({
    username:'',
    password:''
  })  
}

else{
    alert('Enter both username and password')
}

}

  render() {
    return (
      <div>
        <input type="text" placeholder="username" onChange={props.handleChange} />
        <input type="password" placeholder="password" onChange={props.handleChange} />
        <button onClick={this.submit} > Sign-in </button>



      </div>
    )
  }
}
