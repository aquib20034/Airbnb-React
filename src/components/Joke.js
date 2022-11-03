import React from 'react';
import './Joke.css';

export default function Joke(props) {
    return (
        <div className="joke-card">
            
            <h3>{props.setup}</h3>
            <p>{props.punchline}</p>



        </div>
    )
}