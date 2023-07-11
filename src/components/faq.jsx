import React from "react";

/*

    --- FAQ ---
Contains the FAQ HTML
that appears when user
goes to the FAQ tab
on the website.
    --- *** ---

*/

function Faq () {
    return <>
        <h1 className = "m-5 text-center">FAQ</h1>
        <div className="container">
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Question 1
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                    <strong>Badabadaba is that true ?</strong> Wow, you go big guy.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Question 2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>Badabadaba is that true ?</strong> Wow, you go big guy.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Question 3
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <strong>Badabadaba is that true ?</strong> Wow, you go big guy.
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
}

export default Faq;