import React from "react";

function Catalog () {
    return <>
        <h1>CATALOGUE</h1>
        <div class="container">
            <div class="catalog overflow-y-scroll d-flex flex-fill flex-column mb-3 bg-dark rounded border border-primary border-5">
                <div class="list-group list-group-horizontal list-group-flush flex-grow d-flex align-items-center">
                    <div class="p-2">
                        <audio id="sound1" src="../ressources/other/saxvid.mp3" preload="auto"></audio>
                        <img class="playbutton" onclick="document.getElementById('sound1').play();" src="../ressources/svg/Composant 14 – 4.svg" />
                    </div>
                    <div class="p-2 text-light fw-bold">
                        Le titre de la musique
                    </div>
                    <div class="p-2 text-light flex-grow-1 d-flex">
                        <div class="mx-2">
                            <button type="button" value="Style" data-bs-toggle="button" class="btn btn-outline-primary">Style 1</button>
                            <button type="button" value="Style" data-bs-toggle="button" class="btn btn-outline-primary">Style 2</button>  
                        </div>
                        <div class="mx-2">
                            <button type="button" value="Intrument" data-bs-toggle="button" class="btn btn-outline-info">Instrument 1</button>
                            <button type="button" value="Intrument" data-bs-toggle="button" class="btn btn-outline-info">Instrument 2</button>
                        </div>
                        <div class="mx-2">
                            <button type="button" value="Mood" data-bs-toggle="button" class="btn btn-outline-danger">Mood 1</button>
                            <button type="button" value="Mood" data-bs-toggle="button" class="btn btn-outline-danger">Mood 2</button>
                        </div>
                    </div>
                    <div class="p-2 text-light">
                        Acheter, favoris...
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Catalog;