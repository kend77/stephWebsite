import React, { Component } from 'react';
import NavBarContainer from './NavBarContainer'

class App extends Component {

  render() {
    document.title = 'stephanie diaz'
    const { children } = this.props
    return (
    <div id="app" >
      <NavBarContainer />
    { children }
    </div>
	);
  }
}

export default App;
