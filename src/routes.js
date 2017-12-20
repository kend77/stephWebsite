import React, { Component } from 'react';
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom';
import App from './App'
import Carousel from './Carousel'
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();



class Routes extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <App>
        <Route path="/schumacher" render={() => <Carousel folder="schumacher" />} />
        </App>
      </Router>
    )
  }
}


export default Routes;
