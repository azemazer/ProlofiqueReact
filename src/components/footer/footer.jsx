import React from "react";

import footerLogo from "../../images/logo footer.svg"

function Footer () {
    return (
        <div class="infooter">
            <footer class="footer border-top border-5 border-warning">
                <div class="p-4 container">
                    <div class="row">
                        <div class="col-8 border-right border-5 border-warning">
                            <div class="row">
                                <img id="footerlogo" src={footerLogo}/>
                            </div>
                            <div class="row">
                                <h5 class="col">CONTACT</h5>
                                <h5 class="col">A PROPOS DE MOI</h5>
                            </div>
                            <div class="row">
                                <p>Prolofique Terms - Privacy</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <a href="https://www.youtube.com/@prolofique/videos">
                                        <i class="fa-brands fa-youtube fa-2xl" style={{color: '#d96e17',}}></i>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="https://open.spotify.com/artist/7FDvT8JE28cMtcYYJknp83?si=cp40HnihQ1GcSPoimtA3Xg">
                                        <i class="fa-brands fa-spotify fa-2xl" style={{color: '#d96e17',}} href=""></i>
                                    </a>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <a href="https://prolofique.bandcamp.com/">
                                            <i class="fa-brands fa-bandcamp fa-2xl" style={{color: '#d96e17',}} href=""></i>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="https://soundcloud.com/azemazer">
                                            <i class="fa-brands fa-soundcloud fa-2xl" style={{color: '#d96e17',}} href=""></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;