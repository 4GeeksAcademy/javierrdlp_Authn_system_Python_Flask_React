import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (key, value) => {
        setNewUser((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el refresco de la página
        if (newUser.email === "" || newUser.password === "") {
            alert("Please fill out all fields.");
        } else {
            console.log("++++++++++++++++++++", newUser.email, newUser.password);
           await actions.login(newUser.email, newUser.password);

            // Vaciar los campos del formulario
            setNewUser({
                email: "",
                password: "",
            });
            const token = localStorage.getItem("token")
            console.log("---------", token)
            if(token != null){
                navigate("/private") 
            }
            
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-4">
                <h1 className="display-1 mb-5 fw-bold" style={{ color: "#6998df" }}>
                    Login
                </h1>
                <form
                    className="p-5 rounded-3"
                    style={{ backgroundColor: "#6998df" }}
                    onSubmit={handleSubmit}
                >
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Your email address"
                            value={newUser.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="userpassword"
                            placeholder="Your password"
                            value={newUser.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: "#6ecec1" }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Login