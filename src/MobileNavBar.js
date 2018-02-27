import React, {Component } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { Icon, Sidebar, Menu } from 'semantic-ui-react'


class MobileNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  componentDidMount() {
    document.addEventListener('click', (event) => {
      console.log(event.target.id)
      if (event.target.id !== 'sidebar' && event.target.id !== 'hamburger') {
        this.setState({visible: false})
      }
    })
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
  const { visible } = this.state
  return (
    <div id="navbar">
        <Icon id="hamburger" onClick={this.toggleVisibility} size="big" name="bars" />
        <NavLink id="header" to="/"><h1 id="logo">Stephanie Diaz</h1></NavLink>
        <Sidebar id="sidebar" as={Menu} animation="push" width="thin" visible={visible} icon="labeled" vertical inverted>
          <NavLink to="/schumacher">
          <Menu.Item name="home">
            <Icon name="home" />
            Schumacher
          </Menu.Item>
          </NavLink>
          <Menu.Item name="gamepad">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item name="camera">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

    </div>
    )
  }
}

export default MobileNavBar;
