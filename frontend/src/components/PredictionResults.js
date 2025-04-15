
import React, {useState} from "react"
import SubmitButton from "./SubmitButton";

function PredictionResults({ selectedFile }) {
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile) {
            alert("Please select an image file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                body: formData,
            });
            
            const data = await response.json();
            if (data.class !== undefined) {
                setPrediction(`The animal is: ${data.class} 
                with ${data.confidence.toFixed(2)}% confidence`);
            } else {
                setPrediction(`Error: ${data.error}`);
            }
    } catch (error) {
        setPrediction(`Error: ${error.message}`);
    }
    };

    return (
        <div>
            <SubmitButton onClick={handleSubmit}/>
            <div className="alert alert-primary" style={{fontSize: '1.2rem'}}>{prediction}</div>
        </div>
    )
}

export default PredictionResults