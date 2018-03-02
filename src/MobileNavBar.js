import React, {Component } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { Icon, Sidebar, Menu } from 'semantic-ui-react'


class MobileNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      menuVisible: true
    }
  }
  componentDidMount() {
    document.addEventListener('touchstart', (event) => {
      if (event.target.id !== 'sidebar' && event.target.id !== 'hamburger') {
        this.setState({visible: false, menuVisible: true})
      }
    })
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible, menuVisible: !this.state.menuVisible })

  render() {
  const { visible, menuVisible } = this.state
  return (
    <div id="navbar">
        {menuVisible ?
        <Icon id="hamburger" onClick={this.toggleVisibility} size="big" name="bars" /> :
        <Icon id="nohamburger" size="big" name="bars" />}
        <NavLink id="header" to="/"><h1 id="logo">Stephanie Diaz</h1></NavLink>
        <Sidebar id="sidebar" as={Menu} animation="overlay" width="thin" visible={visible} icon="labeled" vertical inverted>
          <NavLink to="/schumacher">
          <Menu.Item name="home">
            schumacher
          </Menu.Item>
          </NavLink>
          <NavLink to="/theauthentics">
          <Menu.Item name="home">
            theauthentics
          </Menu.Item>
          </NavLink>
          <NavLink to="/self">
          <Menu.Item name="home">
            self
          </Menu.Item>
          </NavLink>
          <NavLink to="/ad">
          <Menu.Item name="home">
            architetural digest
          </Menu.Item>
          </NavLink>
          <NavLink to="/about">
          <Menu.Item name="home">
            about
          </Menu.Item>
          </NavLink>
        </Sidebar>
    </div>
    )
  }
}

export default MobileNavBar;
