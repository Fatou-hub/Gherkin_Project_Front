import React from 'react';
import './newMenu.css'
import logoBelieve from "../icons/Logo_Believe_White.svg";
import {Link} from 'react-router-dom';

export default function NewMenu(){
    return(
        <>
<nav id="gd_menu">
  <div className="wrapper">
    <div className="logo">
    <Link to="/home">
    <img id="logo" src={logoBelieve} alt="logo_Believe" />
    </Link>
    </div>
    <input type="radio" name="slider" id="menu-btn"></input>
    <input type="radio" name="slider" id="close-btn"></input>
    <ul className="nav-links">
      <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
      <li>
        <a href="#" className="desktop-item">Mon compte<i className="fa fa-user"></i></a>
        <input type="checkbox" id="showDrop"></input>
        <label htmlFor="showDrop" className="mobile-item">Dropdown Menu</label>
        <ul className="drop-menu">
        {/*eslint-disable-next-line*/}
          <li><a href="#">Profil</a></li>
          {/*eslint-disable-next-line*/}
          <li><a href="#">Mes favoris</a></li>
          {/*eslint-disable-next-line*/}
          <li><Link to="/login">Déconnexion</Link></li>
        </ul>
      </li>
      <li>
        <a href="#" className="desktop-item">Gerkhin</a>
        <input type="checkbox" id="showMega"></input>
        <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
        <div className="mega-box">
          <div className="content">
            <div className="row">
              <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg" alt=""></img>
            </div>
            <div className="row">
              <header>Backstage</header>
              <ul className="mega-links">
                {/*eslint-disable-next-line*/}
                <li><Link to="Backstage/Catalog_Optimization">Catalog_Optimization</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="Backstage/Easy_Entry">Easy_Entry</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="Backstage/Fcr_Split">Fcr_Split</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="Backstage/Shorts">Shorts</Link></li>
              </ul>
            </div>
            <div className="row">
              <header>Equipes</header>
              <ul className="mega-links">
                {/*eslint-disable-next-line*/}
                <li><Link to="Backstage/Dailychecks">Dailychecks</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/Common">Common</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/Details">Details</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/QA_Core">QA_Core</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/SEY">SEY</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/Scrap">Scrap</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/Sitemap">Sitemap</Link></li>
              </ul>
            </div>
            <div className="row">
              <header>Gherkin en savoir plus</header>
              <ul className="mega-links">
                {/*eslint-disable-next-line*/}
                <li><Link to="/gherkin-mots-cles">Vous avez dit Gkerkin ?</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="/gherkin-mots-cles">Synthaxe</Link></li>
                {/*eslint-disable-next-line*/}
                <li><Link to="gherkin-mots-cles">Step Organisation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
          <li><Link to="/gherkin-creation-page">Ecrire une feature</Link></li>
          <li><Link to="/home">Home</Link></li>
    </ul>
    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
  </div>
</nav>
        </>
    )
}