import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from PIL import Image
import tensorflow as tf
import numpy as np
import io


app = Flask(__name__)
CORS(app)

class_names = ['Clam', 'Crab', 'Dolphin', 'Eel',
               'Fish', 'Jelly Fish', 'Lobster',
               'Octopus', 'Otter', 'Puffer', 'Sea Horse',
               'Sea Ray', 'Sea Turtle', 'Sea Urchin', 'Seal',
               'Shark', 'Shrimp', 'Squid', 'Starfish', 'Whale']

MODEL_DIR = os.path.join(os.getcwd(), 'backend/model_2_saved')
model = tf.keras.Sequential([
    tf.keras.layers.TFSMLayer(MODEL_DIR, call_endpoint='serving_default')
])


def preprocess_image(image):
    image = image.resize((180, 180))
    img_array = tf.keras.utils.img_to_array(image)
    img_array = tf.expand_dims(img_array, 0)

    return img_array


@app.route("/")
def home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    image_file = request.files['image']
    img = Image.open(image_file.stream)

    img_array = preprocess_image(img)

    predictions = model(img_array)
    score = tf.nn.softmax(predictions['output_0'])

    predicted_class = class_names[np.argmax(score)]
    confidence = 100 * np.max(score)

    return jsonify({'class': str(predicted_class), 'confidence': float(confidence)})


if __name__ == '__main__':
    app.run(debug=True)
