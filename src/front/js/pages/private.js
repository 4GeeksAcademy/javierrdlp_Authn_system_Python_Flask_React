
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import danger from "../../img/danger.png";

export const PrivateZone = () => {  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]); // Agregamos `navigate` como dependencia


  return (
    <div className='row  justify-content-center mt-5'>
      
      <div className='col-6 text-center'>
        <h1 className="display-1 mb-5 fw-bold" style={{ color: "#cc5454" }}>
          Private Zone
        </h1>
        <img src={danger} class="img-fluid navbar-logo" alt="danger" style={{ width: "50%", height: "50%" }} />
      </div>
    </div>
  )
}

export default PrivateZone