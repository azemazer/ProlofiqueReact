import React from "react";
import axios from "./axios";
import Song from "./catalog/song";

/*

    --- CATALOG ---
Contains the Catalogs HTML
that appears when user
goes to the Catalogs tab
on the website.
    --- ******* ---

*/

function Catalog () {

    const [songs, setSongs] = React.useState([
        { 
            
            title: "This is a sample title",
            description: "This is a sample description",
            length: 120,
            date: "2012-02-24",
            price: 5.00 ,
            url: "https://puu.sh/JGTBN.mp3",
            styles: ["Soul"],
            instruments: ["Saxophone", "Drums", "Electric guitar", "Piano"],
            moods: ["Energetic", "Happy"]
        },
        {
            title: "This is a sample title 2",
            description: "This is a sample description",
            length: 120,
            date: "2012-02-24",
            price: 5.00 ,
            url: "https://puu.sh/JGTBN.mp3",
            styles: ["Soul"],
            instruments: ["Saxophone", "Drums", "Electric guitar", "Piano"],
            moods: ["Energetic", "Happy"]
        }
        
      ]);

      function getSongs() {
        axios.get('/songs')
        .then(function(response) {
            setSongs(response.data);
            console.log(songs)
        }).catch(function (error) {
            // en cas d’échec de la requête
            console.log(error);
          })
    }

    // getSongs();

    return <>
        <h1>CATALOGUE</h1>
        <div className="container">
            <div className="catalog overflow-y-scroll d-flex flex-fill flex-column mb-3 bg-dark rounded border border-primary border-5">
                <div className="list-group list-group-horizontal list-group-flush flex-grow d-flex align-items-center">
                    <div className="p-2">
                        <audio id="sound1" src="../ressources/other/saxvid.mp3" preload="auto"></audio>
                        <img className="playbutton" /* onClick="document.getElementById('sound1').play();" */ src="../ressources/svg/Composant 14 – 4.svg" />
                    </div>
                    <div className="p-2 text-light fw-bold">
                        Le titre de la musique
                    </div>
                    <div className="p-2 text-light flex-grow-1 d-flex">
                        <div className="mx-2">
                            <button type="button" value="Style" data-bs-toggle="button" className="btn btn-outline-primary">Style 1</button>
                            <button type="button" value="Style" data-bs-toggle="button" className="btn btn-outline-primary">Style 2</button>  
                        </div>
                        <div className="mx-2">
                            <button type="button" value="Intrument" data-bs-toggle="button" className="btn btn-outline-info">Instrument 1</button>
                            <button type="button" value="Intrument" data-bs-toggle="button" className="btn btn-outline-info">Instrument 2</button>
                        </div>
                        <div className="mx-2">
                            <button type="button" value="Mood" data-bs-toggle="button" className="btn btn-outline-danger">Mood 1</button>
                            <button type="button" value="Mood" data-bs-toggle="button" className="btn btn-outline-danger">Mood 2</button>
                        </div>
                    </div>
                    <div className="p-2 text-light">
                        Acheter, favoris...
                    </div>
                </div>
                {songs.map((song) => {
                    return <Song song={song} key={song.title} />
                })}
            </div>
        </div>
    </>
}

export default Catalog;