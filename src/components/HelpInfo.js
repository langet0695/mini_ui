import React from 'react';
import { FaRandom, FaRegQuestionCircle, FaCheck, FaRegEye, FaArrowUp, FaArrowDown } from "react-icons/fa";

function Help( {showHelp} ){

    return (
        <>  
            <div class="mini_content">
                <div class="indent">
                    <h1>
                        How to Play
                    </h1>
                    <p>
                        Use the clues on to the right to solve the mini by guessing the words they describe.
                        <p class="indent">
                            + Randomize and reset the board using <FaRandom></FaRandom>
                            <br></br>
                            + Use <FaArrowUp></FaArrowUp> to increase or <FaArrowDown></FaArrowDown> to decrease difficulty of the mini
                            <br></br>
                            + Submit your grid through <FaCheck></FaCheck>
                            <br></br>
                            + Reveal solution with <FaRegEye></FaRegEye>
                        </p>
                        After your first submission elements will be highlighted according to their accuracy. 
                    </p>
                    <p>
                        <h3>
                            Example:
                        </h3>
                        HINT: A wolf is not this ____.
                        <br></br>
                        The letters “T”, “A”, and “E”  letter are correct while “P” in row 1 is incorrect as the answer to the hint is "TAME". 
                        <div class="help_row">
                            <div class="mini">
                                <div class="letter_box"> </div>
                                <div class="letter_box"> <input class="correct_letter" type="text" id="1" name="answer" value="T"/></div>
                                <div class="letter_box"> <input class="correct_letter" type="text" id="1" name="answer" value="A"/></div>
                                <div class="letter_box"> <input class="incorrect_letter" type="text" id="1" name="answer" value="P"/></div>
                                <div class="letter_box"> <input class="correct_letter" type="text" id="1" name="answer" value="E"/></div>
                            </div>
                        </div>
                    </p>
                </div>
            </div> 
        </>
    );
}

export default Help