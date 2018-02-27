import React, { Component } from 'react'
import Navbar from './NavBar'
import MobileNavBar from './MobileNavBar'

class NavBarContainer extends Component {
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
      <div>
      {width < 750 ?
      <MobileNavBar /> :
      <Navbar /> }
      </div>
    )
  }
}


export default NavBarContainer;
