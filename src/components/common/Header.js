import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const header = () => {
	const activeStyle = { color: "#F15B2A" };
	return (
		<nav className="stockHeader">
			<NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
			<NavLink to="/stocks" activeStyle={activeStyle}>Stocks</NavLink>{" | "}
			<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
		</nav>
	)
}

export default header;