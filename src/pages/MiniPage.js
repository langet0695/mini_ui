import React, { useState } from 'react';
import ListLetters from './../components/ListLetters.js';
import { FaRandom, FaRegQuestionCircle, FaCheck, FaRegEye, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ListClues from '../components/ListClues.js';
import HelpInfo from '../components/HelpInfo.js';


function MiniPage({ ValidMinis }) {

    const [mini_pos, setMini] = useState(Math.floor(Math.random() * ValidMinis.length));
    const [submission, setSubmission] = useState(["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"])
    const [answerStatus, setStatus] = useState("")
    const [showHelp, setHelp] = useState("False")

    function updateSubmission(letter, pos){
        const tmp_submission = submission.slice()
        tmp_submission.splice(pos, 1, letter) 
        setSubmission(tmp_submission)
    }

    function randomize(e){
        setMini(Math.floor(Math.random() * ValidMinis.length))
    }

    function checkSubmission(input, answer){
        let match = "True"
        for (let pos=0; pos<=input.length ; pos++){
            if (input[pos] !== answer[pos]){
                match = "False"
                break;
            }
        }
        if (match === "True"){
            setStatus("Correct")
        }
        else {
            setStatus("Incorrect")
        }
    }

    function updateHelp(){
        (showHelp === "False") ? setHelp("True") : setHelp("False")
    }

    return (
        <>
            <div class="information_container"> 
                Results
                <h1> Your input was... {answerStatus}</h1>
            </div>
            <div class="mini_container"> 
                <HelpInfo showHelp={showHelp}></HelpInfo>
                <div class="mini_content">
                    MINI Content
                    <div class="mini_box">
                        <div class="mini">
                            <form>
                            < ListLetters ValidMini={ValidMinis[mini_pos][[0]]} submission={submission} updateSubmission={updateSubmission}></ListLetters>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mini_controls">
                    <p>
                        Mini controls
                        {/* {submission}
                        {answerStatus} */}
                    </p>
                    <div class="controller_box">
                        <div class="controller">
                            <div class="icon_box"><FaRegQuestionCircle class="icon" onClick={updateHelp}/></div>
                            <div class="icon_box"><FaRandom class="icon" onClick={randomize}/></div>
                            <div class="icon_box"><FaArrowUp class="icon"/></div>
                            <div class="icon_box"><FaArrowDown class="icon"/></div>
                            <div class="icon_box"><FaCheck class="icon" onClick={e => checkSubmission(submission, ValidMinis[mini_pos][0])}/></div>
                            <div class="icon_box"><FaRegEye class="icon"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="information_container"> 
                <h3>CLUES</h3>
                <div>
                    Across:
                    <ListClues clues={ValidMinis[mini_pos][1]}></ListClues>
                </div>
                <br></br>
                <div>
                    Down:
                    <ListClues clues={ValidMinis[mini_pos][2]}></ListClues>
                </div>
            </div>
        </>
    );
}

export default MiniPage


 
