import React from "react";

const ButtonDrum=({clip, playAudioClips})=>{

    return(
        <div>
            <button 
            className="drum-pad btn btn-primary p-4 m-3"
            id={clip.displayDescription}
            onClick= {()=>playAudioClips(clip)}
            >
                <audio className="clip" id={clip.label} src={clip.fileLink}></audio>
                {clip.label}
            </button>
        </div>
    )
}
export default ButtonDrum;