import React from 'react';
import '../../../styles/calculator/storecalculation/ResultCalculation.css'
import { useNavigate } from 'react-router-dom';

function ResultCalculation({ sum, onClose }) {
    const navigate = useNavigate();
    let message, button;
    if (sum === 0) {
        message = "Please calculate your emission first.";
    } else if (sum > 1000) {
        message = `You emitted total ${sum} KG CO2. You exceed the global limit, Buy Credits. `;
        button = <button className='button-32' onClick={navigate('/signup')}>Buy</button>;
    }
    else if (sum < 1000 && sum > 0) {
        message = `You emitted total ${sum} KG CO2. Your Carbon Emission is under global limit. `;
    }
    // else if (sum < 1000 && sum > 0) {
    //     message = `You emitted total ${sum} KG CO2. You are eligible to sell credits.`;
    //     button = <button className='button-33'>Sell</button>;
    // } 
    // else {
    //     message = `Emission is between 4000 to 7000`
    // }

    return (
        <>
            {/* <div> */}
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <div className='messAndBtn'>
                        <p>{message}</p>
                        {button && <div>{button}</div>}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default ResultCalculation;
