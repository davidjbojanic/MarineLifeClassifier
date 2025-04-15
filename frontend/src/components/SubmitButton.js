import React from "react";
import PredictionResults from "./PredictionResults";

function SubmitButton({onClick}) {
    
    return (
            <button className='App-button' style={{ marginTop: '50px', width: '75%'}} onClick={onClick}>
                Submit for Analysis
            </button>
    )
}

export default SubmitButton