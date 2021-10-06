import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import HomePage from './components/HomePage.jsx';
import samplePosts from "./data/data"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'login',
      // trailers:[],
      currentTrailer: null,
      samplePosts:samplePosts
    }

    this.changeView = this.changeView.bind(this);
    this.handleTrailerItems= this.handleTrailerItems.bind(this)
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

getData(){
  this.setState({
    samplePosts: this.state.samplePosts
  })
}  

// updateData(trailerId){
//   axios.put(`/api/trailers/:trailerId/${trailerId}`,{})
//   .then((response)=>{
//     console.log(response)
//   })
// }

 // updateData(blogId,newTitle){
  //   var newTitle= prompt()
  //   axios.put(`http://localhost:3000/api/:trailerId/${trailerId}`,{title: newTitle})
  //   .then((response)=>{
  //     console.log(response)
  //   })
  // }

// deleteData(trailerId){
//   axios.delete(`/api/trailers/:trailerId${trailerId}`)
//   .then((response)=>{
//     console.log(response)
//   })
// }

  renderView() {
    const view = this.state.view;

    if (view === 'singin') {
      return <SingIn handleClick={() => this.changeView('login')}/>
    } 
    else if(view==='signup') {
      return <SignUp />
    }
    else if(view==='homepage') {
      return <HomePage />
    }
    else if(view==='watchList') {
      return <WatchList />
    }
  }
  

handleTrailerItems(trailer){
this.setState({
  currentTrailer: trailer,
})
}

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('rmdb')}>
              ЯMDb
          </span>
          <span className={this.state.view === 'rmdb'
            ? 'nav-selected'
            : 'nav-unselected'}
            onClick={() => this.changeView('towatch')}>
            WatchList
          </span>
          <span className="nav-unselected"  onClick={() => this.changeView('signin')}>
           Sign In
          </span>
          <span className="nav-unselected">
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
