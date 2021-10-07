import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx';
import WatchList from "./components/WatchList.jsx"
import Details from './components/Details.jsx';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'homepage',
      username: '',
      password: '',
      currentTrailer: null,
      trailers:[]
    }

    this.changeView = this.changeView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitUp = this.submitUp.bind(this);
    this.handleTrailerItems = this.handleTrailerItems.bind(this);
   
  }

  

  changeView(option) {
    this.setState({
      view: option
    });
  }

  submitUp() {
    axios.post('/Rmdb/signup', { username: this.state.username, password: this.state.password }).then(response => { console.log(response); }).catch(err => res.status(403).send('user not added'));
    this.changeView('homepage');
  }

  submitIn() {
    axios.post('/Rmdb/signin', { username: this.state.username, password: this.state.password }).then(response => console.log(response)).catch(err => res.status(403).send('user not checked'));
  
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

getData(){
  axios.get("http://localhost:3000/api/videos")
  .then((response)=>{ 
    this.setState({   
      trailers: response.data
    })
  })
}

componentDidMount(){
  this.getData()
}
getOne(videoId){
  axios.get(`http://localhost:3000/api/videos${videoId}`)
  .then((response)=>{ 
    console.log(response)
  })
}
  renderView() {
    const view = this.state.view;

    if (view === 'singin') {
      return <SingIn handleClick={() => this.changeView('login')} />
    }
    else if (view === 'signup') {
      return <SignUp submitUp={this.submitUp} handleChange={this.handleChange} />
    } 
  
    else if(view==='watchList') {
      return <WatchList />
    }
    else if(view==='details') {
      return <Details />
    }
    else if(view==='homepage'){
      return <HomePage trailers={this.state.trailers} trailer={this.state.currentTrailer}
      handleTrailerItems={this.handleTrailerItems} />
    }

  }
  

  handleTrailerItems(trailer) {
    this.setState({
      currentTrailer: trailer,
    });
  }


  render() {
  //  console.log(this.state.trailers)
    return (
      <div>
        <div className="nav">

          <span className={this.state.view === 'homepage' ,'logo'}
            
          onClick={() => this.changeView('homepage')} >
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
