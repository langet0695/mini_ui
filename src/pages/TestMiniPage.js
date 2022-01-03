import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListLetters from './../components/ListLetters.js';
import { FaRandom, FaRegQuestionCircle, FaCheck, FaRegEye, FaArrowUp, FaArrowDown } from "react-icons/fa";
import ListClues from '../components/ListClues.js';
import HelpInfo from '../components/HelpInfo.js';
import MiniBuilder from '../components/MiniBuilder.js';

//
//THIS PAGE IS FOR TESTING ONLY
//

function MiniPage({ ValidMinis }) {

    const [mini_pos, setMini] = useState(Math.floor(Math.random() * ValidMinis.length));
    const [submission, setSubmission] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
    const [answerStatus, setStatus] = useState("")
    const [showHelp, setHelp] = useState("False")
    const [reveal, setReveal] = useState("False")
    const activeCell = useRef(null)
    const [currentCellPos, setCurrentCellPos] = useState(null)
    const [highlightStatus, setHighlight] = useState("horizontal-0")

    async function updateSubmission(letter, pos){
            const tmp_submission = submission.slice()
            tmp_submission.splice(pos, 1, letter.toUpperCase()) 
            setSubmission(tmp_submission)
            pos = parseInt(pos, 10)
            if(letter != ""){
                if(highlightStatus.includes("horizontal")){
                    if(pos <= 25){ 
                        pos += 1
                            while (ValidMinis[mini_pos][0][pos] === ""){
                                pos += 1
                                console.log(pos)
                            }
                        await setCurrentCellPos(pos);
                        await updateHighlight(pos); 
                    }
                }
                if(highlightStatus.includes("vertical")){
                    if(pos <= 19){
                        pos += 5
                        while (ValidMinis[mini_pos][0][pos] === ""){
                            pos += 1
                            console.log(pos)
                        }
                    await setCurrentCellPos(pos);
                    await updateHighlight(pos); 
                    }
                    else{
                        pos = currentCellPos - 19
                        while (ValidMinis[mini_pos][0][pos] === ""){
                            pos += 1
                            console.log(pos)
                        }
                    await setCurrentCellPos(pos);
                    await updateHighlight(pos); 
                    }
                }
            }
            await activeCell.current.focus();
    }

    function updateHighlight(pos){
        if(pos === currentCellPos){
            if(highlightStatus.includes("horizontal")){
                setHighlight("vertical-" + pos)
            }
            else{
                setHighlight("horizontal-" + pos)
            }
        }
        else{
            if(highlightStatus.includes("horizontal")){
                setHighlight("horizontal-" + pos)
                setCurrentCellPos(pos);
            }
            else{
                setHighlight("vertical-" + pos)
                setCurrentCellPos(pos);
            }
        }
    }

    function highlight(pos) {
        const highlight_description = highlightStatus.split("-")
        const index = parseInt(highlight_description[1], 10)
        pos = parseInt(pos, 10)

        if(highlightStatus.includes("vertical")){
            if(index%5 === pos%5){
                return "letter_highlight"
            }
            else{
                return "no_highlight"
            }
        }
        else{
            if(Math.floor(index/5) === Math.floor(pos/5)){
                return "letter_highlight"
            }
            else{
                return "no_highlight"
            }
        }
    }

    function randomize(e){
        setMini(Math.floor(Math.random() * ValidMinis.length))
        setSubmission(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
    }

    function revealAnswers(){
        setReveal("True")
    }

    function checkSubmission(input, answer){
        let match = "True"
        for (let pos=0; pos<=input.length ; pos++){
            if (input[pos] != answer[pos]){
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
                {( (showHelp === "True") ? <HelpInfo showHelp={showHelp}></HelpInfo> : <MiniBuilder ValidMinis={ValidMinis} submission={submission} updateSubmission={updateSubmission} mini_pos={mini_pos} reveal={reveal} currentCellPos={currentCellPos} activeCell={activeCell} updateHighlight={updateHighlight} highlight={highlight}></MiniBuilder> )}
                <div class="mini_controls">
                    <p>
                        Mini controls
                        {submission}
                        {answerStatus}
                        <br></br>
                        Current State: {currentCellPos}
                        <br></br>
                        Current Answer Letter: {ValidMinis[mini_pos][0]}
                        <br></br>
                        Current Highlight Status: {highlightStatus}
                    </p>
                    <div class="controller_box">
                        <div class="controller">
                            <div class="icon_box"><FaRegQuestionCircle class="icon" onClick={updateHelp}/></div>
                            <div class="icon_box"><FaRandom class="icon" onClick={randomize}/></div>
                            <div class="icon_box"><FaArrowUp class="icon"/></div>
                            <div class="icon_box"><FaArrowDown class="icon"/></div>
                            <div class="icon_box"><FaCheck class="icon" onClick={e => checkSubmission(submission, ValidMinis[mini_pos][0])}/></div>
                            <div class="icon_box"><FaRegEye class="icon" onClick={revealAnswers}/></div>
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


 
