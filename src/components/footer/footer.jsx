import React from "react";

import footerLogo from "../../images/logo footer.svg"

function Footer () {
    return (
        <div className="infooter">
            <footer className="footer border-top border-5 border-warning">
                <div className="p-4 container">
                    <div className="row">
                        <div className="col-8 border-right border-5 border-warning">
                            <div className="row">
                                <img id="footerlogo" src={footerLogo}/>
                            </div>
                            <div className="row">
                                <h5 className="col">CONTACT</h5>
                                <h5 className="col">A PROPOS DE MOI</h5>
                            </div>
                            <div className="row">
                                <p>Prolofique Terms - Privacy</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col m-3">
                                    <a href="https://www.youtube.com/@prolofique/videos">
                                        <i className="fa-brands fa-youtube fa-2xl" style={{color: '#d96e17',}}></i>
                                    </a>
                                </div>
                                <div className="col m-3">
                                    <a href="https://open.spotify.com/artist/7FDvT8JE28cMtcYYJknp83?si=cp40HnihQ1GcSPoimtA3Xg">
                                        <i className="fa-brands fa-spotify fa-2xl" style={{color: '#d96e17',}} href=""></i>
                                    </a>
                                </div>
                                <div className="row">
                                    <div className="col m-3">
                                        <a href="https://prolofique.bandcamp.com/">
                                            <i className="fa-brands fa-bandcamp fa-2xl" style={{color: '#d96e17',}} href=""></i>
                                        </a>
                                    </div>
                                    <div className="col m-3">
                                        <a href="https://soundcloud.com/azemazer">
                                            <i className="fa-brands fa-soundcloud fa-2xl" style={{color: '#d96e17',}} href=""></i>
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