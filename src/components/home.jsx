import React from "react";

/*

    --- HOME ---
Contains the home HTML
that appears by default
on the website
    --- **** ---

*/

//Importing pictures
import buttonCatalog from "../images/button-catalog.svg";
import buttonCatalogHovered from "../images/button-catalog-hovered.svg";
import buttonCommandes from "../images/button-commandes.svg";
import buttonCommandesHovered from "../images/button-commandes-hovered.svg";
import buttonFaq from "../images/button-faq.svg";
import buttonPortfolio from "../images/button-portfolio.svg";
import headerMotif from "../images/header-motif.svg";
import disc from "../images/disc.png";
import lineCatalog from "../images/line_catalog.svg";
import lineCommandes from "../images/line-commandes.svg";
import linePortfolio from "../images/line-portfolio.svg";
import separator1 from "../images/separaor1.png";
import separator2 from "../images/separator2.png";
import separator3 from "../images/separator3.png";
import separator4 from "../images/separator4.png";
import separatorHeader from "../images/separator-header-v2.svg";
// End of importing pictures

function Home () {
    return (
        <>

        {/* *** HEADER *** */}

            <header>
        <div class="headerbloc mt-5 container">
            <div class="row">
                <div class="headerpart col">
                    <div class="row">
                        <h1 class="display-1">Le vrai son.</h1>
                    </div>
                    <div class="headerpicto row">
                        <img src={disc} alt="image du disque" class="smallpic col-2"/>
                        <p class="col">Choisissez parmis un catalogue ou commandez votre musique sur mesure</p>
                    </div>
                    <div class="headerpicto row">
                        <img src="ressources/images/loupe.png" alt="image de la loupe" class="smallpic col-2"/>
                        <p class="col">Un large choix de musiques sans droits d'auteurs et gratuites avec de vrais instruments</p>
                    </div>
                </div>
                <div class="headerpart col">
                    <img id="headermotif" src={headerMotif}/> {/* the repeating motif on the right of the header */} 
                </div>
            </div>
        </div>
        <img src={separatorHeader}/> {/* the big orange separator */}
    </header>

        {/* *** MAIN SECTION *** */}

        {/* *** CATALOG *** */}

    <main class="bg-dark py-4 container-fluid">
        <div class="section">
           <div class="blocsection container d-flex align-items-center justify-content-center flex-column ">
                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte col mx-5">
                        <h2 class="text-light text-center text-uppercase">Catalogue</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Un catalogue rempli de musiques variées. Achetez leurs licenses ou profitez de leur utilisation gratuite</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-start">
                            <p class="text-light text-uppercase text-end">Accédez au</p>
                            <div>
                                <img class="separatore" src={separator1}/>
                                <img class="gobutton" src={buttonCatalog}/>
                            </div>
                            <p class="text-light text-uppercase text-end">catalogue</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src={lineCatalog}/>
                </div>


                {/* *** PORTFOLIO *** */}


                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte order-2 col mx-5">
                        <h2 class="text-light text-center text-uppercase">Portfolio</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Derrière chaque artiste, il y a un humain. Découvrez-le à travers son portfolio</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase">Accédez au</p>
                            <div>
                                <img class="gobutton" src={buttonPortfolio}/>
                                <img class="separatore" src={separator2}/>
                            </div>
                            <p class="text-light text-uppercase mt-3">portfolio</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src={linePortfolio}/>
                </div>


                {/* *** ORDERS *** */}

                
                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte col mx-5">
                        <h2 class="text-light text-center text-uppercase">Commandes</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Commandez vos propres musiques sur-mesures et obtenez-en la licence</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase align-middle">Accédez aux</p>
                            <div>
                                <img class="separatore align-middle" src={separator3}/>
                                <img class="gobutton" src={buttonCommandes}/>
                            </div>
                            <p class="text-light text-uppercase align-middle">commandes</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src={lineCommandes}/>
                </div>


                {/* *** FAQ *** */}


                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte order-2 col mx-5">
                        <h2 class="text-light text-center">FAQ</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Si vous avez des questions sur le fonctionnement du site, cliquez ici</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase">Accédez à la</p>
                            <div>
                                <img class="gobutton" src={buttonFaq}/>
                                <img class="separatore" src={separator4}/>
                            </div>
                            <p class="text-light text-uppercase">faq</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src="ressources/svg/line_faq.svg"/>
                </div>
           </div> 
        </div>
    </main>
        </>
    )
}

export default Home;