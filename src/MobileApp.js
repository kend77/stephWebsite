import React, { Component } from 'react';
import MobileNavBar from './MobileNavBar'


class MobileApp extends Component {

  render() {

    document.title = 'stephanie diaz'
    const { children } = this.props
    return (
    <div id="app" >
    <MobileNavBar />
    { children }
    </div>
	);
  }
}

export default MobileApp;
