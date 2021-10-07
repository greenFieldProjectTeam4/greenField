
import React, { Component } from 'react'

export default class SignUp extends Component {
constructor(props) {
  super(props);
  this.state={
    username:'',
    password:''
  }
  this.handleChange=this.handleChange.bind(this)
}

handleChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

  submit() {
    console.log(this.state.username)
    // if (this.state.password !== '' && this.state.username !== '') {
    //   this.props.signup(this.state)

    //   this.setState({
    //     username: '',
    //     password: ''
    //   })
    // }

    // else {
    //   alert('Enter both username and password')
    // }

  }
  render() {
    return (
      <div>
        <input value={this.state.username} name="username" type="text" placeholder="username" onChange={this.handleChange} />
        <input value={this.state.password} name="password" type="password" placeholder="password" onChange={this.handleChange} />
        <button onClick={this.submit} > Sign-Up </button>
      </div>
    )
  }
}
