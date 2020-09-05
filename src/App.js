import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const ALAN_KEY = process.env.REACT_APP_ALAN_KEY || '';

const App = () => {

    useEffect(() => {
        alanBtn({
            key : ALAN_KEY,
            onCommand : ({ command }) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            },
            rootEl : document.querySelector('.pokeball'),
            left : 'none',
            top : 'none',
            right : 'none',
            bottom : 'none',
            position : 'relative'
        })
    }, []);

    return (
        <div className="app-container">
            <div className="header">
                <img src="pokefetcher_36.jpeg" alt="Logo saying Pokefetcher"></img>
            </div>
            <div className="content">
                <div className="instructions">
                    <h3>Instructions</h3>
                    <div>
                        Press the microphone button and say the following to begin
                    </div>
                    <div>
                    1 : I want to learn about a pokemon OR Tell me about a pokemon
                    </div>
                    <div>
                    2 : Wait for a response and answer back with the pokemon you're interested in
                    </div>
                </div>
                <div className="pokeball"></div>
            </div>
        </div>
    )
}

export default App;
