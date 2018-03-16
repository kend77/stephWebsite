import React, { Component } from 'react';
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom';
import App from './App'
import Carousel from './Carousel'
import About from './About'
import Home from './Home'
import createBrowserHistory from 'history/createBrowserHistory'
import MobileApp from './MobileApp';


const customHistory = createBrowserHistory();

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth})
    })
  }

  render() {
    const { width } = this.state
    return (
      <Router history={customHistory}>
      { width < 750 ?
        <MobileApp>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/schumacher" render={() => <Carousel folder="schumacher" />} />
            <Route path="/about" component={About} />
          </Switch>
        </MobileApp>
        :
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/schumacher" render={() => <Carousel folder="schumacher" />} />
            <Route path="/patterson" render={() => <Carousel folder="patterson" />} />
            <Route path="/about" component={About} width={width} />
          </Switch>
        </App>
      }
      </Router>
    )
  }
}


export default Routes;
