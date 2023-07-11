import React from "react";

/*

    --- ORDERS ---
Contains the Orders HTML
that appears when user
goes to the Orders tab
on the website.
    --- **** ---

*/

function Commandes () {
    return <>
        <h1 className="m-5 text-center">COMMANDES</h1>
        <div className="container">
            <div className="d-flex flex-wrap justify-content-around">

                {/* FORFAIT 1 */}

                <div className="forfait card bg-dark text-center mb-3">
                    <div className="card-header text-light">
                        FORFAIT 1
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-light">Standard</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light">Feature 1 Impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 2 encore plus impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 3 décidément c'est trop d'émotions</li>
                        </ul>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-outline-warning rounded-pill">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* FORFAIT 2 */}

                <div className="forfait card bg-dark text-center mb-3">
                    <div className="card-header text-light">
                        FORFAIT 2
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-light">Standard</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light">Feature 1 Impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 2 encore plus impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 3 décidément c'est trop d'émotions</li>
                        </ul>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-outline-warning rounded-pill">Go somewhere</a>
                        </div>
                    </div>
                </div>

                {/* FORFAIT 3 */}

                <div className="forfait card bg-dark text-center mb-3">
                    <div className="card-header text-light">
                        FORFAIT 3
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-light">Standard</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light">Feature 1 Impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 2 encore plus impressionant !</li>
                            <li className="list-group-item bg-dark text-light">Feature 3 décidément c'est trop d'émotions</li>
                        </ul>
                        <div className="card-footer bg-transparent">
                            <a href="#" className="btn btn-outline-warning rounded-pill">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Commandes;