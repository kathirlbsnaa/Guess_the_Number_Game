import React, { useState } from 'react';
import Result from './Result';
import './App.css';

const secretnum = Math.floor(Math.random() * 10) + 1;

function App() {
    const [term, setTerm] = useState("");

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="container">
            <div className="head">
                <label htmlFor="term">Guess the Number between 1 to 10</label>
            </div>
            <input id="term" type="text" name="term" onChange={handleChange} />
            <Result secretnum={secretnum} term={term} />
        </div>
    );
}

export default App;
