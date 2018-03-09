import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
	return (
	<div id="navbar">
	<NavLink id="header" to="/"><h1 id="logo">Stephanie Diaz</h1></NavLink>
	<ul id="nav-options">
		<NavLink className="nav-item" to="/schumacher"><li>schumacher</li></NavLink>
		<li className="nav-item-separator">|</li>
		<NavLink  className="nav-item" to="/patterson"><li>patterson flynn martin</li></NavLink>
		<li className="nav-item-separator">|</li>
		<NavLink  className="nav-item" to="/theauthentics"><li>the authentics</li></NavLink>
		<li className="nav-item-separator">|</li>
		<NavLink  className="nav-item" to="/ad"><li>architectural digest</li></NavLink>
		<li className="nav-item-separator">|</li>
		<NavLink  className="nav-item" to="/self"><li>self</li></NavLink>
		<li className="nav-item-separator">|</li>
		<NavLink className="nav-item" to="/about"><li>about</li></NavLink>
	</ul>
	</div>
	)
}

export default NavBar;
