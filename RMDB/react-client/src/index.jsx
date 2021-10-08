import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'rmdb',
      username: '',
      password: '',
      currentTrailer: null,
      user: false,
      data: []
    }


    this.changeView = this.changeView.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.signUpsubmit = this.signUpsubmit.bind(this);
    this.signInsubmit = this.signInsubmit.bind(this);

  }


  //// from dhafer 
  handleSearch(event) {
    let datafiltred = this.state.data.filter((element) => {
      return element.title === event || event.slice(0, 2);
    });
    this.setState({
      view: event,
      data: datafiltred
    });

  }

  changeView(option) {
    this.setState({
      view: option
    });
  }
  signUpsubmit() {
    if (this.state.password !== '' && this.state.username !== '') {
      axios.post('/signup', { username: this.state.username, password: this.state.password })
        .then(() => {
          this.setState({
            username: '',
            password: '',
            user: true
          })
        })

        .catch(() => { alert('username already existed') })

    }
    else { alert('fill all the fields ') }
  }






  signInsubmit() {
    if (this.state.password !== '' && this.state.username !== '') {
      axios.post('/signin', { username: this.state.username, password: this.state.password })
        .then((data) => {console.log('here',data)
          if (data.data===true) {
            this.setState({
              user: true,
              username: '',
              password: ''
            })
          }
        })
        .catch((err) => { alert('Verify username or Password') })
    }
  }




  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderView() {
    const view = this.state.view;
    const user = this.state.user;
    if (view === 'signin') {
      return <SignIn username={this.state.username} password={this.state.password} submit={this.signInsubmit} handleChange={this.handleChange} handleClick={() => this.changeView('login')} />
    }
    else if (view === 'signup') {
      return <SignUp username={this.state.username} password={this.state.password} submit={this.signUpsubmit} handleChange={this.handleChange} />
    }
  }

  render() {

    if (this.state.user === true) {
      return (
        <div>
          <div className="nav">

            <span className={this.state.view === 'homepage'
              ? 'nav-selected'
              : 'nav-unselected'}

              onClick={() => this.changeView('rmdb')} >
              ЯMDb
            </span>
            <span
              className={this.state.view === 'homepage'
                ? 'nav-selected'
                : 'nav-unselected'}

            // onClick={() => this.changeView('rmdb')}
            >
              TEST
            </span>


            <span className={this.state.view === 'rmdb'
              ? 'nav-selected'
              : 'nav-unselected'}
              onClick={() => this.changeView('towatch')}>
              WatchList
            </span>
            <span className="nav-unselected" onClick={() => this.changeView('signin')}>
              Sign In
            </span>
            <span className="nav-unselected" onClick={() => this.changeView('signup')}>
              Sign Up
            </span>
          </div>


          <div className="main">
            {this.renderView()}
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="nav">

          <span className={this.state.view === 'homepage'
            ? 'nav-selected'
            : 'nav-unselected'}

            onClick={() => this.changeView('rmdb')} >
            ЯMDb
          </span>


          <span className="nav-unselected" onClick={() => this.changeView('signin')}>
            Sign In
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('signup')}>
            Sign Up
          </span>
        </div>


        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('RMDb'));
