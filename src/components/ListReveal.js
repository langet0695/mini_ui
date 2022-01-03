import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ListReveal({ ValidMini, submission, updateSubmission }){


    return (
        <>  
            {
                ValidMini.map(function(letter, key) {
                    if (letter===""){ 
                            return (
                                <>
                                <div class="letter_box">
                                    {/* <label>
                                        <input class="no_letter" type="text" id={key} name="blank" maxLength="1" placeholder=" "/>
                                    </label> */}
                                </div>
                                </>
                            );
                        }
                    else { 
                            if(submission[key] === letter){
                                return (
                                    <>
                                    <div class="letter_box">
                                        <label>
                                            <input class="correct_letter" type="text" id={key} name="answer" value={letter} maxLength="1" onChange={e => updateSubmission(e.target.value, e.target.id)}/>
                                        </label>
                                    </div>
                                    </>
                                ); 
                            }
                            else{
                                return (
                                    <>
                                    <div class="letter_box">
                                        <label>
                                            <input class="incorrect_letter" type="text" id={key} name="answer" value={letter} maxLength="1" onChange={e => updateSubmission(e.target.value, e.target.id)}/>
                                        </label>
                                    </div>
                                    </>
                                ); 
                            }
                        }
                    } 
                )
            }
        </>
    );
}

export default ListReveal