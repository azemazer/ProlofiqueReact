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
        <div className="headerbloc mt-5 container">
            <div className="row">
                <div className="headerpart col">
                    <div className="row">
                        <h1 className="display-1">Le vrai son.</h1>
                    </div>
                    <div className="headerpicto row">
                        <img src={disc} alt="image du disque" className="smallpic col-2"/>
                        <p className="col">Choisissez parmis un catalogue ou commandez votre musique sur mesure</p>
                    </div>
                    <div className="headerpicto row">
                        <img src="ressources/images/loupe.png" alt="image de la loupe" className="smallpic col-2"/>
                        <p className="col">Un large choix de musiques sans droits d'auteurs et gratuites avec de vrais instruments</p>
                    </div>
                </div>
                <div className="headerpart col">
                    <img id="headermotif" src={headerMotif}/> {/* the repeating motif on the right of the header */} 
                </div>
            </div>
        </div>
        <img src={separatorHeader}/> {/* the big orange separator */}
    </header>

        {/* *** MAIN SECTION *** */}

        {/* *** CATALOG *** */}

    <main className="bg-dark py-4 container-fluid">
        <div className="section">
           <div className="blocsection container d-flex align-items-center justify-content-center flex-column ">
                <div className="sectionseparate my-5 row">
                    <div className="sectiontexte col mx-5">
                        <h2 className="text-light text-center text-uppercase">Catalogue</h2>
                        <p className="text-light fs-4 text-center text-uppercase fw-light mx-5">Un catalogue rempli de musiques variées. Achetez leurs licenses ou profitez de leur utilisation gratuite</p>
                    </div>
                    <div className="sectionitem col">
                        <div className="sectioniteminside d-flex flex-column justify-content-start">
                            <p className="text-light text-uppercase text-end">Accédez au</p>
                            <div className= "text-end">
                                <img className="separatore" src={separator1}/>
                                <a href="catalog">
                                    <img className="gobutton" src={buttonCatalog} href="catalog"/>
                                </a>
                            </div>
                            <p className="text-light text-uppercase text-end">catalogue</p>
                        </div>
                        <div className="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div className="sectiondiviser">
                    <img className="row divisersvg" src={lineCatalog}/>
                </div>


                {/* *** PORTFOLIO *** */}


                <div className="sectionseparate my-5 row">
                    <div className="sectiontexte order-2 col mx-5">
                        <h2 className="text-light text-center text-uppercase">Portfolio</h2>
                        <p className="text-light fs-4 text-center text-uppercase fw-light mx-5">Derrière chaque artiste, il y a un humain. Découvrez-le à travers son portfolio</p>
                    </div>
                    <div className="sectionitem col">
                        <div className="sectioniteminside d-flex flex-column justify-content-end">
                            <p className="text-light text-uppercase">Accédez au</p>
                            <div className= "text-start">
                                <a href="portfolio">
                                    <img className="gobutton" src={buttonPortfolio}/>
                                </a>
                                <img className="separatore" src={separator2}/>
                            </div>
                            <p className="text-light text-uppercase mt-3">portfolio</p>
                        </div>
                        <div className="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div className="sectiondiviser">
                    <img className="row divisersvg" src={linePortfolio}/>
                </div>


                {/* *** ORDERS *** */}

                
                <div className="sectionseparate my-5 row">
                    <div className="sectiontexte col mx-5">
                        <h2 className="text-light text-center text-uppercase">Commandes</h2>
                        <p className="text-light fs-4 text-center text-uppercase fw-light mx-5">Commandez vos propres musiques sur-mesures et obtenez-en la licence</p>
                    </div>
                    <div className="sectionitem col">
                        <div className="sectioniteminside d-flex flex-column justify-content-end">
                            <p className="text-light text-end text-uppercase align-middle">Accédez aux</p>
                            <div className= "text-end">
                                <img className="separatore align-middle" src={separator3}/>
                                <a href="commandes">
                                    <img className="gobutton" src={buttonCommandes}/>
                                </a>
                            </div>
                            <p className="text-light text-uppercase align-middle text-end">commandes</p>
                        </div>
                        <div className="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div className="sectiondiviser">
                    <img className="row divisersvg" src={lineCommandes}/>
                </div>


                {/* *** FAQ *** */}


                <div className="sectionseparate my-5 row">
                    <div className="sectiontexte order-2 col mx-5">
                        <h2 className="text-light text-center">FAQ</h2>
                        <p className="text-light fs-4 text-center text-uppercase fw-light mx-5">Si vous avez des questions sur le fonctionnement du site, cliquez ici</p>
                    </div>
                    <div className="sectionitem col">
                        <div className="sectioniteminside d-flex flex-column justify-content-end">
                            <p className="text-light text-uppercase">Accédez à la</p>
                            <div>
                                <a href="faq">
                                    <img className="gobutton" src={buttonFaq}/>
                                </a>
                                <img className="separatore" src={separator4}/>
                            </div>
                            <p className="text-light text-uppercase">faq</p>
                        </div>
                        <div className="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div className="sectiondiviser">
                    <img className="row divisersvg" src="ressources/svg/line_faq.svg"/>
                </div>
           </div> 
        </div>
    </main>
        </>
    )
}

export default Home;