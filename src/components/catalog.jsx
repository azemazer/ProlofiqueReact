import React from "react";
import axios from "./axios";

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
        }
      ]);
    
    return <>
        <h1>CATALOGUE</h1>
        <div class="container">
            <div class="catalog overflow-y-scroll d-flex flex-fill flex-column mb-3 bg-dark rounded border border-primary border-5">
                {/* <div class="list-group list-group-horizontal list-group-flush flex-grow d-flex align-items-center">
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
                </div> */}
                <Song
                song = {songs}
                ></Song>
            </div>
        </div>
    </>
}

function Songs() {
    var songs = {}
    axios.get('/songs')
    .then(function(response) {
        songs = response
        console.log(songs)
    }).catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      })
    return songs
}

function Song({song, index}) {
    // return (
    //   <div className='todo'>
    //     <span style={{ textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
    //     <div>
    //       <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{" "}
    //       <Button variant="outtline-danger" onClick={() => removeTodo(index)}>X</Button>
    //     </div>
    //   </div>
    // )
    return (
        <div class="list-group list-group-horizontal list-group-flush flex-grow d-flex align-items-center">
                    <div class="p-2">
                        <audio id="sound1" src="../ressources/other/saxvid.mp3" preload="auto"></audio>
                        <img class="playbutton" onclick="document.getElementById('sound1').play();" src="../ressources/svg/Composant 14 – 4.svg" />
                    </div>
                    <div class="p-2 text-light fw-bold">
                        {song.title}
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
                        {song.price} € ; {song.length}
                    </div>
                </div>
    )
  }
export default Catalog;