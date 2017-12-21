import React, { Component } from 'react';
import NavBar from './NavBar'

class App extends Component {
  render() {
    document.title = 'stephanie diaz'
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
