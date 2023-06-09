import React from "react";

function Song(props) {
    // return (
    //   <div classNameName='todo'>
    //     <span style={{ textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
    //     <div>
    //       <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{" "}
    //       <Button variant="outtline-danger" onClick={() => removeTodo(index)}>X</Button>
    //     </div>
    //   </div>
    // )
    console.log(props.song.title)
    // return (<p>{props.song.title}</p>);
    return (
        <div className="list-group list-group-horizontal list-group-flush flex-grow d-flex align-items-center">
                    <div className="p-2">
                        <audio id="sound1" src="../ressources/other/saxvid.mp3" preload="auto"></audio>
                        <img className="playbutton" /* onClick="document.getElementById('sound1').play();" */ src="../ressources/svg/Composant 14 – 4.svg" />
                    </div>
                    <div className="p-2 text-light fw-bold">
                        {props.song.title}
                    </div>
                    <div className="p-2 text-light flex-grow-1 d-flex">
                        <div className="mx-2">
                            {props.song.styles.map((style) => {
                                return <button type="button" value="Style" data-bs-toggle="button" className="btn btn-outline-primary">{style}</button>
                            })}
                        </div>
                        <div className="mx-2">
                        {props.song.instruments.map((instrument) => {
                                return <button type="button" value="Style" data-bs-toggle="button" className="btn btn-outline-info">{instrument}</button>
                            })}
                        </div>
                        <div className="mx-2">
                            {props.song.moods.map((mood) => {
                                    return <button type="button" value="Style" data-bs-toggle="button" className="btn btn-outline-danger">{mood}</button>
                            })}
                        </div>
                    </div>
                    <div className="p-2 text-light">
                        {props.song.price} € ; {props.song.length}
                    </div>
                </div>
    )
  }

  export default Song;