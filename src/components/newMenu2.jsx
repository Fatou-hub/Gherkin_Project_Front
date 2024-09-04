import React from 'react';
import './newMenu.css'
import logoBelieve from "../icons/Logo_Believe_White.svg";
import {Link} from 'react-router-dom';

export default function NewMenu2(){
    return(
        <>
<nav id="gd_menu">
  <div className="wrapper">
    <div className="logo">
    <Link to="/">
    <img id="logo" src={logoBelieve} alt="logo_Believe" />
    </Link>
    </div>
    <input type="radio" name="slider" id="menu-btn"></input>
    <input type="radio" name="slider" id="close-btn"></input>

    <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
  </div>
</nav>
        </>
    )
}