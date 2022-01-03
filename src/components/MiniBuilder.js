import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListLetters from './../components/ListLetters.js';
import ListReveal from './ListReveal.js';

function MiniBuilder({ ValidMinis, submission, updateSubmission, mini_pos, reveal, currentCellPos, activeCell, updateHighlight, highlight }){

    return (
        <>  
            <div class="mini_content">
                    MINI Content
                    <div class="mini_box">
                        <div class="mini">
                            <form>
                            {
                                (reveal === "True") ?
                                < ListReveal ValidMini={ValidMinis[mini_pos][[0]]} submission={submission} updateSubmission={updateSubmission}></ListReveal> :
                                < ListLetters ValidMini={ValidMinis[mini_pos][[0]]} submission={submission} updateSubmission={updateSubmission} currentCellPos={currentCellPos} activeCell={activeCell} updateHighlight={updateHighlight} highlight={highlight}></ListLetters>
                            }
                            </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default MiniBuilder