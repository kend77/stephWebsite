import React, { Component } from 'react';
import NavBar from './NavBar'
import { Sidebar } from 'semantic-ui-react'

class App extends Component {

  render() {
    console.log('hello', 'app')
    document.title = 'stephanie diaz'
    const { children } = this.props
    return (
    <div id="app" >
      <NavBar />
    { children }
    </div>
	);
  }
}

export default App;
