import React from 'react'
import parchis from "../../img/parchis.jpg";
export const PrivateZone = () => {
  return (
        <div className='row'>
            <div className='col-6'>
            <h1 className="display-1 mb-5 fw-bold" style={{ color: "#cc5454" }}>
                    Private Zone
                </h1>
                <img src={parchis} class="img-fluid navbar-logo"  alt="parchis"/>
            </div>
        </div>    
  )
}

export default PrivateZone