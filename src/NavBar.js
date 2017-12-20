import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
	return (
	<div id="navbar">
	<h1>Stephanie Diaz</h1>
	<ul id="nav-options">
		<NavLink className="nav-item" to="/schumacher"><li>schumacher</li></NavLink>
		<li className="nav-item" >|</li>
		<NavLink className="nav-item" to="/ad"><li>architectural digest</li></NavLink>
		<li className="nav-item">|</li>
		<NavLink className="nav-item" to="/self"><li>self</li></NavLink>
		<li className="nav-item">|</li>
		<NavLink className="nav-item" to="/downtown"><li>downtown</li></NavLink>
		<li className="nav-item">|</li>
		<NavLink className="nav-item" to="/about"><li>about</li></NavLink>
	</ul>
	</div>
	)
	}

export default NavBar;
