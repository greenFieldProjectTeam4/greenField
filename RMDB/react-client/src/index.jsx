import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'feed'
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const view = this.state.view;

    if (view === 'singin') {
      return <SingIn handleClick={() => this.changeView('login')}/>;
    } else if (view === 'signup') {
      return <SignUp />;
    } else if (view === 'watchList') {
      return <WatchList />;
    }
  }


  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo"
            onClick={() => this.changeView('feed')}>
            RMDB
          </span>
          <span className={this.state.view === 'feed'
            ? 'nav-selected'
            : 'nav-unselected'}
          onClick={() => this.changeView('kjhg')}>
            WatchList
          </span>
          <span className="nav-unselected" onClick={() => this.changeView('signin')}>
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

ReactDOM.render(<App />, document.getElementById('blogmodo'));
