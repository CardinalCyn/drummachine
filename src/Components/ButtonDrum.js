import React from "react";

const ButtonDrum=({clip, setDisplayDescription})=>{
    //used to check event letter, and see if it matches the button's label
    const handleKeyPress=(event)=>{
        if(event.keyCode===clip.label.charCodeAt(0)){
            playAudioClips();
        }
    }
    React.useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
        return()=>{
            document.removeEventListener("keydown",handleKeyPress);
        }
    });
    //updates preview description on click, and plays the audio
    const playAudioClips=()=>{
        setDisplayDescription(clip.displayDescription);
        let newClip=document.getElementById(clip.label);
        newClip.play();
    }
    return(
        <div>
            <button 
            className="drum-pad btn btn-primary p-4 m-3"
            id={clip.displayDescription}
            onClick= {()=>playAudioClips()}
            >
                <audio className="clip" id={clip.label} src={clip.fileLink}></audio>
                {clip.label}
            </button>
        </div>
    )
}
export default ButtonDrum;