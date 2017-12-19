import React from 'react'
import './navbar.css'
const NavBar = () => {
	return (
	<div id="navbar">
	<h1>Stephanie Diaz</h1>
	<ul id="nav-options">
		<li onClick={() => console.log('hello')}>schumacher</li>
		<li>|</li>
		<li>architectural digest</li>
		<li>|</li>
		<li>self</li>
		<li>|</li>
		<li>downtown</li>
		<li>|</li>
		<li>about</li>
	</ul>
	</div>
	)
	}

export default NavBar;
