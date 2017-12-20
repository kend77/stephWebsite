import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar'

class App extends Component {
  render() {
    const { children } = this.props
    return (
    <div>
      <NavBar />
    { children }
    </div>
	);
  }
}

export default App;
