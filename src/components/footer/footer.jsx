import React from "react";

function Footer () {
    return (
        <footer class="border-top border-5 border-warning">
            <div class="p-4 container">
                <div class="row">
                    <div class="col-8 border-right border-5 border-warning">
                        <div class="row">
                            <img id="footerlogo" src="ressources/images/logo.png"/>
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
                                <img class="extlinkpic" src="ressources/svg/Icon feather-youtube.svg"/>
                            </div>
                            <div class="col">
                                <img class="extlinkpic" src="ressources/svg/Icon simple-spotify.svg"/>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <img class="extlinkpic" src="ressources/svg/Icon simple-bandcamp.svg"/>
                                </div>
                                <div class="col">
                                    <img class="extlinkpic" src="ressources/svg/Icon simple-soundcloud.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;