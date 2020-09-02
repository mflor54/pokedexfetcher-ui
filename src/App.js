import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {

    useEffect(() => {
        alanBtn({
            key : process.env.REACT_APP_ALAN_KEY,
            onCommand : ({ command }) => {
                if(command === 'testCommand') {
                    alert('This code was executed');
                }
            },
            rootEl : document.querySelector('.pokeball'),
            left : 'none',
            top : 'none',
            right : 'none',
            bottom : 'none'
        })
    }, []);

    return (
        <div className="app-container">
            <div className="header"></div>
            <div className="content">
                <div className="pokeball"></div>
            </div>
        </div>
    )
}

export default App;
