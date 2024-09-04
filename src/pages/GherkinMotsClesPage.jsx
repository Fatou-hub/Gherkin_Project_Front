import React from "react";
import "../css/gherkin_mot_cles_page.css";


const GherkinMotsClesPage = () => {
    return (
        <>
            <div className="gherkin_mots_cles_pages">
                <h2 id="unique_h2" className="steps_gkn">Vous avez dit Gherkin ? </h2>
                <div>
                    <p className="paragraph_gkn">Le Gherkin est un langage qui permet de décrire le comportement utilisateur. <br /> 
                        Il répond à la problématique de transmissions des informations entre les différentes parties prenantes dans un projet <br />
                        entre les développeurs, les QA ingénieurs et les Product Owner qui ont la plupart du temps du mal à se comprendre afin de <br />
                        collaborer sur un projet. <br />
                    </p>
                    
                    <p className="paragraph_gkn">
                    Le langage Gherkin est utilisé par tous les acteurs du projet :<br />
                        <ul>
                            <li>Le Product Owner pour écrire ses User Stories</li>
                            <li>Le QA agile pour écrire ses critères et ses scénarios de test</li>
                            <li>Le Développeur ou le QA automaticien pour scripter les tests automatisés</li>
                        </ul>
                    </p>
                </div>
                <h2 className="steps_gkn">Synthaxe</h2>
                <p className="paragraph_gkn">
                Le langage Gherkin est structuré par ligne et par mots clés : <br/>
                <ol>
                    <li>Une ligne commence par un mot clé</li>
                    <li>Un mot clé correspond à une étape du comportement utilisateur</li>
                    <li>Une ligne = un mot clé</li>
                </ol></p>
                <p className="paragraph_gkn">Les principaux mots-clés de Gherkin sont :
	                <ul>
                        <li>Feature</li>
                        <li>Background</li>
                        <li>Scenario</li>
                        <li>Scenario Outline</li>
                        <li>Given</li>
                        <li>When</li>
                        <li>And</li>
                        <li>Then</li>
                    </ul></p>
                <div>
                    <h3 className="steps_gkn">Feature</h3>
                    <p className="paragraph_gkn">Ce mot-clé fournit une description de haut niveau d'une fonctionnalité logicielle et de regrouper les scénarios associés.
                    </p>
                </div>
                <div>
                    <h3 className="steps_gkn">Background</h3>
                    <p className="paragraph_gkn">
                    Le Background permet d'ajouter du contexte à tous les scénarios dans une seule Feature (fonctionnalité).<br/> 
                    Un Background est comme un scénario sans titre, contenant un certain nombre de « steps ».<br/> 
                     La différence réside dans le moment où il est exécuté : le background est exécuté avant chacun des scénarios.<br/> 
                    </p>
                </div>
                <div>
                    <h3 className="steps_gkn">Scenario</h3>
                    <p className="paragraph_gkn">
                    Le scénario est la structure principale du Gherkin. <br/> 
                    Chaque scénario commence par le mot-clé Scénario : (ou un mot-clé localisé), suivi d'un titre de scénario facultatif. <br/> 
                    Chaque Feature (fonctionnalité) peut avoir un ou plusieurs scénarios, et chaque scénario comprend une ou plusieurs steps (étapes).<br/> 
                    </p>
                </div>
                <div>
                    <h3 className="steps_gkn">Scenario Outline</h3>
                    <p className="paragraph_gkn">
                    Dans l’usage du Gherkin, le Scenario Outline trouve son utilité lorsque les tests end-to-end nécessite d’évaluer divers cas similaires avec plusieurs données différentes.
                     On utilise cela lorsque l’on a besoin d’injecter différentes valeurs.
                     Cela évite la répétition et le Scenario Outline agit donc comme une boucle en repassant sur chaque cas. 
                    </p>
                </div>
                <h3 className="steps_gkn">Steps</h3>
                <p className="paragraph_gkn">
                De façon structuré le Gherkin est constitué à sa tête d’une seule Feature puis juste en dessous 
                il peut y avoir un Background puis un ou plusieurs scénarios qui contiennent des « steps » (des étapes). 
                </p>
                <h3 className="steps_gkn">Given</h3>
                <p className="paragraph_gkn">
                Le but du step « Given » est de mettre le système dans un état connu avant que l'utilisateur ne commence à interagir avec le système.
                 Cela permet d’avoir un peu de contexte sur l’utilisateur à quel stade il en est avant d’agir avec l’application. 
                </p>
                <h3 className="steps_gkn">When</h3>
                <p className="paragraph_gkn">
                Le step « When » lui permet d’interagir avec le système au moyen de diverses action. Ce step utilise des verbes d’action (je remplis, je clique, je sélectionne, j’appuie sur tel élément)
                 on est placé à ce moment-là au niveau du déclenchement d’une évènement de l’application.
                </p>
                <h3 className="steps_gkn">Then</h3>
                <p className="paragraph_gkn">
                Le « Then » quant à lui intervient à la fin des steps (étapes) afin d’observer le résultat attendu par le test Gherkin. 
                </p>
                <h3 className="steps_gkn">But, And</h3>
                <p className="paragraph_gkn">
                Ils sont utilisés lorsque notre scenario dispose de nombreux Given, When and Then afin de rendre la lecture du Gherkin plus fluide. 
                </p>
            </div>
        </>

    );
}

export default GherkinMotsClesPage;