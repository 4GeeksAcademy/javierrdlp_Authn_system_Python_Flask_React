import React from "react";
import diceIcon from "../../img/dice_icon.png";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
				<img src={diceIcon} class="img-fluid navbar-logo"  alt="dice"/>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn m-3 login-button ">Login</button>
					</Link>

					<Link to="/sign">
						<button className="btn sign-button">Sign up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
