import React, {useState} from 'react';

function ImageUpload({ onFileSelect }) {
    const [previewSrc, setPreviewSrc] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setPreviewSrc(URL.createObjectURL(file));
            onFileSelect(file);
          } else {
            setPreviewSrc(null);
            onFileSelect(null);
          }
    }

    return (
        <div className='container d-flex flex-column align-items-center justify-content-center mt-5'>
            <form className='text-center'>
                <div className='mb-3'>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleImageChange}/>
                </div>
                <div className='mb-3'>
                            <img
                        id="image-preview"
                        src={previewSrc}
                        alt="Image Preview"
                        style={{ maxWidth: '300px', marginTop: '10px' }}
                        className='img-fluid'/>
                </div>
            </form>
        </div>
    )
}

export default ImageUpload