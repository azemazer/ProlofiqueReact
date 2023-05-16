import React from "react";

function Home () {
    return (
        <>
            <header>
        <div class="headerbloc mt-5 container">
            <div class="row">
                <div class="headerpart col">
                    <div class="row">
                        <h1 class="display-1">Le vrai son.</h1>
                    </div>
                    <div class="headerpicto row">
                        <img src="ressources/images/disc.png" alt="image du disque" class="smallpic col"/>
                        <p class="col">Choisissez parmis un catalogue ou commandez votre musique sur mesure</p>
                    </div>
                    <div class="headerpicto row">
                        <img src="ressources/images/loupe.png" alt="image de la loupe"/>
                        <p>Un large choix de musiques sans droits d'auteurs et gratuites avec de vrais instruments</p>
                    </div>
                </div>
                <div class="headerpart col">
                    <img id="headermotif" src="ressources/svg/header-motif.svg"/>
                </div>
            </div>
        </div>
    </header>

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
                                <img class="separatore" src="ressources/images/separaor1.png"/>
                                <img class="gobutton" src="ressources/svg/Composant 4 – 5.svg"/>
                            </div>
                            <p class="text-light text-uppercase text-end">catalogue</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src="ressources/svg/line_catalog.svg"/>
                </div>
                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte order-2 col mx-5">
                        <h2 class="text-light text-center text-uppercase">Portfolio</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Derrière chaque artiste, il y a un humain. Découvrez-le à travers son portfolio</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase">Accédez au</p>
                            <div>
                                <img class="gobutton" src="ressources/svg/Composant 4 – 5.svg"/>
                                <img class="separatore" src="ressources/images/separator2.png"/>
                            </div>
                            <p class="text-light text-uppercase">portfolio</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src="ressources/svg/line-portfolio.svg"/>
                </div>
                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte col mx-5">
                        <h2 class="text-light text-center text-uppercase">Commandes</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Commandez vos propres musiques sur-mesures et obtenez-en la licence</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase align-middle">Accédez aux</p>
                            <div>
                                <img class="separatore align-middle" src="ressources/images/separator3.png"/>
                                <img class="gobutton" src="ressources/svg/Composant 4 – 5.svg"/>
                            </div>
                            <p class="text-light text-uppercase align-middle">commandes</p>
                        </div>
                        <div class="sectioniteminside">
                            <img/>
                        </div>
                    </div>
                </div>
                <div class="sectiondiviser">
                    <img class="row divisersvg" src="ressources/svg/line-commandes.svg"/>
                </div>
                <div class="sectionseparate my-5 row">
                    <div class="sectiontexte order-2 col mx-5">
                        <h2 class="text-light text-center">FAQ</h2>
                        <p class="text-light fs-4 text-center text-uppercase fw-light mx-5">Si vous avez des questions sur le fonctionnement du site, cliquez ici</p>
                    </div>
                    <div class="sectionitem col">
                        <div class="sectioniteminside d-flex flex-column justify-content-end">
                            <p class="text-light text-uppercase">Accédez à la</p>
                            <div>
                                <img class="gobutton" src="ressources/svg/Composant 4 – 5.svg"/>
                                <img class="separatore" src="ressources/images/separator4.png"/>
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