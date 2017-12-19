import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import App from './App'
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();



class Routes extends Component {

  render() {
    return (
      <Router history={customHistory}>
        <App>
          <Switch>
          </Switch>
        </App>
      </Router>
    )
  }
}


export default Routes;
