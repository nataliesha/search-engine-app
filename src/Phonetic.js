import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
    let audio = new Audio(props.phonetic.audio)

const start = () => {
    audio.play()
}

    return (
        <div className="phonetic">
            <button className="phonetic-button" onClick={start}>▶︎ Listen</button>
            <span className="pronounce">({props.phonetic.text})</span>
        </div>
    );

}