import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Modal</h1>
        </header>
        <div>
          <NavLink to="/">Home</NavLink> / <NavLink to="/about">About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
