import React from 'react';
import '../css/homepage.css'
import gherkinBest from "../img/Gherkin_image.jpg";
import beleieveLogo from "../img/wpp.gif";
import composeMyGherkin from "../img/write.jpg";
import testingBoardResults from "../img/monitoring.png";
import {Link} from 'react-router-dom';

export default function HomePage() {


  return (
  <>
  <div id="homepage_container">
    <header>
        <h1>Gherkin Dictionary</h1>
    </header>
    <div className="wow fadeInUp" data-wow-duration="2s">
        <h5>Projet réalisé par Fatou Cissé dans le cadre de son apprentissage chez Believe au sein de l'équipe QA</h5>
        <p>Ce projet a été réalisé pour répondre à un besoin bien spécifique de notre stack technique 
        </p>

        <div id="main">

            <div className="col_fourth">
              <div className="card">
                <img className="card-img-top" src={gherkinBest} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Gherkin Bonnes Pratique</h5>
                  <p className="card-text">Il y a des règles à suivre pour l'écriture du Gherkin</p>
                  <Link to="/gherkin-mots-cles" className="btn">Voir plus</Link>
                </div>
              </div>            
            </div>

            <div className="col_fourth">
              <div className="card">
                <img className="card-img-top" src={beleieveLogo} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Tous à propos du Gherkin et des steps</h5>
                  <p className="card-text">Mais de quoi parle t-on ?</p>
                  <Link to="/gherkin-mots-cles" className="btn">Nos features</Link>
                </div>
              </div>            
            </div>

            <div className="col_fourth">
              <div className="card">
                <img className="card-img-top" src={composeMyGherkin} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Créer mon propre fichier Feature</h5>
                  <p className="card-text">Maestro c'est à vous de jouer !</p>
                  <Link to="/gherkin-creation-page" className="btn">Ecrire une feature <i className="fa fa-pen"></i></Link>
                </div>
              </div>            
            </div>

            <div className="col_fourth">
              <div className="card">
                <img className="card-img-top" src={testingBoardResults} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Allez plus loin</h5>
                  <p className="card-text">Par la réalisation de vos propres tests ! </p>
                  <Link to="/step_definition" className="btn">Analyse des tests <i className="fa fa-search" aria-hidden="true"></i></Link>
                </div>
              </div>            
            </div>
            <div className="clear"></div>

        </div>
      </div>
    </div>
  </>
  )
}