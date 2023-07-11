import React from "react";

/*

    --- PORTFOLIO ---
Contains the portfolio HTML
that appears when user goes to
the "Portfolio" section of
the website
    --- ********* ---

*/

function Portfolio () {
    return <>
                <h1>PORTFOLIO</h1>

                <div className="container">

                    {/* BIOGRAPHY */}

                    <section>
                        <div className="d-flex">
                            <div className="p-5">
                                <h2>Biographie</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum odio eligendi nobis laudantium dolorem atque dolore eaque animi exercitationem! Ipsam veritatis saepe quis aliquam recusandae natus, numquam dolore blanditiis.</p>
                            </div>
                            <div>         
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/240px-Blank_square.svg.png"/>
                            </div>
                        </div>
                    </section>

                    <hr className="hrpf bg-primary border-5 border-top border-primary m-5"/>

                    {/* DISCOGRAPHY */}

                    <section>
                        <div className="d-flex">
                            <div>         
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/240px-Blank_square.svg.png"/>
                            </div>
                            <div className="p-5">
                                <h2>Discographie</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum odio eligendi nobis laudantium dolorem atque dolore eaque animi exercitationem! Ipsam veritatis saepe quis aliquam recusandae natus, numquam dolore blanditiis.</p>
                            </div>
                        </div>
                    </section>

                    <hr className="hrpf bg-primary border-5 border-top border-primary m-5"/>

                    {/* PROJECTS PARTICIPATED TO */}

                    <section>
                        <div className="d-flex flex-column">
                            <h2>Projets participés</h2>
                            <div className="d-flex mt-5">
                                <div>   
                                    <h3 className="p-2">Projet 1</h3>      
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/240px-Blank_square.svg.png"/>
                                </div>
                                <div className="p-5">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum odio eligendi nobis laudantium dolorem atque dolore eaque animi exercitationem! Ipsam veritatis saepe quis aliquam recusandae natus, numquam dolore blanditiis.</p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <div>   
                                    <h3 className="p-2">Projet 2</h3>      
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/240px-Blank_square.svg.png"/>
                                </div>
                                <div className="p-5">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum odio eligendi nobis laudantium dolorem atque dolore eaque animi exercitationem! Ipsam veritatis saepe quis aliquam recusandae natus, numquam dolore blanditiis.</p>
                                </div>
                            </div>
                            <div className="d-flex mt-5">
                                <div>   
                                    <h3 className="p-2">Projet 3</h3>      
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/240px-Blank_square.svg.png"/>
                                </div>
                                <div className="p-5">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum odio eligendi nobis laudantium dolorem atque dolore eaque animi exercitationem! Ipsam veritatis saepe quis aliquam recusandae natus, numquam dolore blanditiis.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
    </>
}

export default Portfolio;