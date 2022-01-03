import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ListLetters({ ValidMini, submission, updateSubmission, currentCellPos, activeCell, updateHighlight, highlight }){

    

    return (
        <>  
            {
                ValidMini.map(function(letter, key) {
                    if (letter===""){ 
                            return (
                                <>
                                <div class="no_letter_box">
                                    {/* <label>
                                        <input class="no_letter" type="text" id={key} name="blank" maxLength="1" placeholder=" "/>
                                    </label> */}
                                </div>
                                </>
                            );
                        }
                    else { 
                            return (
                                <>
                                <div class="letter_box">
                                    <div class="pos_holder"> 
                                    {/* populate with state holding row once calculated */}
                                    </div>
                                    <label >
                                        <input class="letter" type="text" id={highlight(key)} name="answer" value={submission[key]} maxLength="1" onChange={e => updateSubmission(e.target.value, key)} ref={(currentCellPos === key) ? activeCell : null} onClick={e => updateHighlight(key)} />
                                    </label>
                                </div>
                                </>
                            ); 
                        }
                    } 
                )
            }
        </>
    );
}

export default ListLetters