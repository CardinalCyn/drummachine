import React from "react";
import './App.css';
import MyErrorBoundary from "./MyErrorBoundary";

const App=()=>{
    //importing audio clips, label is the name for the key, displaydescription is for the name of the clip, and file link is the link
    /*const audioClips=[
        {label: "Q", displayDescription:"amongus", fileLink:"https://drive.google.com/uc?export=download&id=1cQybTYGAU7h2cvSCuIuDR0jU51FXmGfe"},
        {label:"W", displayDescription:"bingchilling", fileLink:"https://drive.google.com/uc?export=download&id=19mxQPg9-7sbNDv25QElzM9NoZN5dCfY9"},
        {label:"E", displayDescription:"carrot", fileLink:"https://drive.google.com/uc?export=download&id=1YlMKfsjAAH-nLWRXLfguZjAzQfLuojgZ"},
        {label: "A", displayDescription:"china", fileLink:"https://drive.google.com/uc?export=download&id=1Fpou-9zit_5uppV6aEzVehPqTW9_o2wb"},
        {label:"S", displayDescription:"nani", fileLink:"https://drive.google.com/uc?export=download&id=1Jlt0LNiwCDpov-Z6DTF48OBuoowU8Jbx"},
        {label:"D", displayDescription:"sharingan", fileLink:"https://drive.google.com/uc?export=download&id=1f908gDa2ekFzbGHUNhy00CB12oUIwFfI"},
        {label: "Z", displayDescription:"uwu", fileLink:"https://drive.google.com/uc?export=download&id=1DUCmYRFzSYfZeaf8mSVmxOcDWwHVBWCE"},
        {label:"X", displayDescription:"wow", fileLink:"https://drive.google.com/uc?export=download&id=1IG082FEfx73n5PEUUFihdjlLK5JqywyR"},
        {label:"C", displayDescription:"yo", fileLink:"https://drive.google.com/uc?export=download&id=1JIqPwLjwF2Gx7pXKAf2Iw0y12F0EnmTb"},
    ];
    */
    const labels=["Q","W","E","A","S","D","Z","X","C"];
    const playAudioClips=(displayDescription,label)=>{
        document.getElementById("display").innerText=displayDescription;
        let newClip=document.getElementById(label);
        newClip.play();
    }
    const handleKeyPress=(event)=>{
        for(let i=0;i<labels.length;i++){
            if(event.keyCode===labels[i].charCodeAt(0)){
                playAudioClips(Math.random().toString(),labels[i]);
            }
        }
    }
    React.useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
        return()=>{
            document.removeEventListener("keydown",handleKeyPress);
        }
    });
    //used for updating the div with the display description as text
    
    
    return(
        //maps each audio clip to a button, unique key is the label, each audio clip object is passed into the button, and the setDisplayDescription function is sent in so that when a button is clicked, it updates on screen
    <div id= "drum-machine">
        <MyErrorBoundary>
        <h1>meme soundboard</h1>
        <div id="display"></div>
        <div id="buttonContainer">
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="amongus"
                onClick= {()=>playAudioClips("amongus","Q")}
            >
                <audio className="clip" id="Q" src="https://drive.google.com/uc?export=download&id=1cQybTYGAU7h2cvSCuIuDR0jU51FXmGfe"></audio>
                Q
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="bingchilling"
                onClick= {()=>playAudioClips("bingchilling","W")}
            >
                <audio className="clip" id="W" src="https://drive.google.com/uc?export=download&id=19mxQPg9-7sbNDv25QElzM9NoZN5dCfY9"></audio>
                W
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="carrot"
                onClick= {()=>playAudioClips("carrot","E")}
            >
                <audio className="clip" id="E" src="https://drive.google.com/uc?export=download&id=1YlMKfsjAAH-nLWRXLfguZjAzQfLuojgZ"></audio>
                E
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="china"
                onClick= {()=>playAudioClips("china","A")}
            >
                <audio className="clip" id="A" src="https://drive.google.com/uc?export=download&id=1Fpou-9zit_5uppV6aEzVehPqTW9_o2wb"></audio>
                A
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="nani"
                onClick= {()=>playAudioClips("nani","S")}
            >
                <audio className="clip" id="S" src="https://drive.google.com/uc?export=download&id=1Jlt0LNiwCDpov-Z6DTF48OBuoowU8Jbx"></audio>
                S
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="sharingan"
                onClick= {()=>playAudioClips("sharingan","D")}
            >
                <audio className="clip" id="D" src="https://drive.google.com/uc?export=download&id=1f908gDa2ekFzbGHUNhy00CB12oUIwFfI"></audio>
                D
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="uwu"
                onClick= {()=>playAudioClips("uwu","Z")}
            >
                <audio className="clip" id="Z" src="https://drive.google.com/uc?export=download&id=1DUCmYRFzSYfZeaf8mSVmxOcDWwHVBWCE"></audio>
                Z
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="wow"
                onClick= {()=>playAudioClips("wow","X")}
            >
                <audio className="clip" id="X" src="https://drive.google.com/uc?export=download&id=1IG082FEfx73n5PEUUFihdjlLK5JqywyR"></audio>
                X
            </button>
            <button 
                className="drum-pad btn btn-primary p-4 m-3"
                id="yo"
                onClick= {()=>playAudioClips("yo","C")}
            >
                <audio className="clip" id="C" src="https://drive.google.com/uc?export=download&id=1JIqPwLjwF2Gx7pXKAf2Iw0y12F0EnmTb"></audio>
                C
            </button>
        </div>
        </MyErrorBoundary>
    </div>);
}

export default App