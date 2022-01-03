import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ListClues({ clues }){
    
    return (
        <>  
            {clues.map((clue, pos) => <div>{pos + 1}. {clue}</div> )}
        </>
    );
}

export default ListClues