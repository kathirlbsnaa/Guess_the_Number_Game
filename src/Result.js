import React from 'react';

function Result({ secretnum, term }) {
    let result;
    const termNum = parseInt(term, 10);

    if (isNaN(termNum)) {
        result = 'Invalid';
    } else if (secretnum > termNum) {
        result = 'Lower';
    } else if (secretnum < termNum) {
        result = 'Higher';
    } else if (secretnum === termNum) {
        result = 'Right';
    } else 
    {
        result = 'Enter a valid number';
    }

    return <h1>You guessed: {result}</h1>;
}

export default Result;
