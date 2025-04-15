import React, {useState} from "react"
import ImageUpload from "./ImageUpload"
import PredictionResults from "./PredictionResults"

function AnalysisTable() {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="container mt-5" style={{ marginBottom: '6rem' }}>
            <div className="row">
                <div className="col-md-6">
                    <h4>Upload</h4>
                    <ImageUpload onFileSelect={setSelectedFile}/>
                </div>
                <div className="col-md-6">
                    <h4>Identification</h4>
                    <div id="result">
                      <PredictionResults selectedFile={selectedFile}/>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default AnalysisTable