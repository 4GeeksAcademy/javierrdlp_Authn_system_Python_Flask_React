import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import diceIcon from "../../img/dice_icon.png";

import "../../styles/navbar.css"

export const Navbar = () => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const navigate = useNavigate();
  
	useEffect(() => {
	  // Función para actualizar el token cuando cambie en localStorage
	  const updateToken = () => {
		setToken(localStorage.getItem("token"));
	  };
  
	  // Escuchar cambios en localStorage desde otras pestañas
	  window.addEventListener("storage", updateToken);
  
	  return () => {
		window.removeEventListener("storage", updateToken);
	  };
	}, []);


	  if (!localStorage.getItem("token")) {
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
		 
	  }else{
		return(
		<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link to="/">
					<img src={diceIcon} class="img-fluid navbar-logo"  alt="dice"/>
					</Link>
					<div className="ml-auto">
						<Link to="/">
							<button className="btn m-3 login-button " onClick={() =>
								localStorage.removeItem("token")
							}>Log out</button>
						</Link>						
					</div>
				</div>
			</nav>
		)

	  }	
};
