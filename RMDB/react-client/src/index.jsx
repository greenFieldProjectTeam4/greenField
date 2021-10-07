import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HomePage from './components/HomePage.jsx';
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
      user: false
    }


    this.changeView = this.changeView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTrailerItems = this.handleTrailerItems.bind(this);
    this.signinHandle = this.signinHandle.bind(this);
    this.signUpsubmit = this.signUpsubmit.bind(this)
  }

  //// from dhafer 
  handleSearch(event) {
    let datafiltred = this.state.data.filter((element)=>{
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

  signupHandle() {
    axios.post('/signup', { username: this.state.username, password: this.state.password }).then(response => { console.log(response); }).catch(err => res.status(403).send('user not added'));
    this.changeView('homepage');
    this.setState({
      user: true

    })
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signinHandle() {
    axios.post('/signin', user)
      .then((data) => {
        if (data.data === true) {
          this.setState({
            user: true,
          })
        }
      })
      .catch((err) => { alert('Verify username or Password') })

  }

  signUpsubmit() {
    console.log(this.state.username)
    if (this.state.password !== '' && this.state.username !== '') {
      this.signupHandle(this.state)

      this.setState({
        username: '',
        password: ''
      })
    }
    else {alert('Enter both username and password')}}

  renderView() {
    const view = this.state.view;
    const user = this.state.user;
    if (view === 'signin') {
      return <SignIn signin={this.signinHandle} handleClick={() => this.changeView('login')} />
    }
    else if (view === 'signup') {
      return <SignUp username={this.state.username} password={this.state.password} submit={this.signUpsubmit} handleChange={this.handleChange} />
    }

    else if (view === 'watchList') {
      return <WatchList />
    }
    else if (view === 'homepage' && user === true) {
      return <HomePage />
    }

  }


  handleTrailerItems(trailer) {
    this.setState({
      currentTrailer: trailer,
    });
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById('RMDb'));
