import React,{useState} from "react";
import {flushSync} from "react-dom";
import './App.css';
import ButtonDrum from "./Components/ButtonDrum";
import MyErrorBoundary from "./MyErrorBoundary";

const App=()=>{
    //importing audio clips, label is the name for the key, displaydescription is for the name of the clip, and file link is the link
    const audioClips=[
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
    //handlekeypress and useeffect add event listeners, used to see if a key press matches a button's label and if it does, play that button
    const handleKeyPress=(event)=>{
        for(let i=0;i<audioClips.length;i++){
            if(event.keyCode===audioClips[i].label.charCodeAt(0)){
                playAudioClips(audioClips[i]);
            }
        }   
    }
    React.useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);
        return()=>{
            document.removeEventListener("keydown",handleKeyPress);
        }
    });
    //sets description of preview, gets the audio element of a button by its id, and plays it. flushsync is used to make it so that the tests work, idk how it works, makes the call syncronous or smth
    const playAudioClips=(clip)=>{
        flushSync(()=>{
            setDisplayDescription(clip.displayDescription);
        })
        let newClip=document.getElementById(clip.label);
        newClip.play();
    }
    //state of display description, used to describe the audio clip last plyed
    const [displayDescription, setDisplayDescription]=useState("Click a button!");
    return(
        //maps each audio clip to a button, unique key is the label, each audio clip object is passed into the button, and the setDisplayDescription function is sent in so that when a button is clicked, it updates on screen
    <div id= "drum-machine">
        <MyErrorBoundary>
        <h1>meme soundboard</h1>
        <p id="display">{displayDescription.toString()}</p>
        <div id="buttonContainer">
            {audioClips.map((clip)=>(
                <ButtonDrum setDisplayDescription={setDisplayDescription} key= {clip.label} clip={clip} playAudioClips={playAudioClips}/>
            ))}
        </div>
        </MyErrorBoundary>
    </div>);
}

export default App