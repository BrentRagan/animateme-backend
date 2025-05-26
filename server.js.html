<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AnimateMe</title>
  <style>
    :root {
      --primary-color: #6f229d;
      --accent-color: #36daf5;
      --dark-color: #020525;
      --highlight-color: #e53ee4;
      --background-color: #0c1549;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: var(--background-color);
      color: white;
      margin: 0;
      padding: 0;
    }

    .hero {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('hero.jpg');
      height: 50vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hero-text {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 20px;
      border-radius: 10px;
    }

    .container {
      padding: 20px;
      max-width: 600px;
      margin: auto;
    }

    input, select, button, textarea {
      display: block;
      margin: 10px 0;
      padding: 10px;
      font-size: 1em;
      width: 100%;
      border: none;
      border-radius: 5px;
    }

    input, textarea, select {
      background-color: #fff;
      color: #000;
    }

    button {
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: var(--highlight-color);
    }

    #response {
      margin-top: 20px;
      white-space: pre-wrap;
      background-color: var(--dark-color);
      padding: 10px;
      border-radius: 5px;
    }

    img {
      max-width: 100%;
      margin-top: 10px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <div class="hero">
    <div class="hero-text">
      <h1>Welcome to AnimateMe</h1>
      <p>Transform your photos into vibrant cartoon-style illustrations</p>
    </div>
  </div>

  <div class="container">
    <label for="imageInput">Upload an image:</label>
    <input type="file" id="imageInput" accept="image/*">
    <img id="previewImage" alt="Image preview will appear here" style="display:none;">

    <label for="theme">Describe your desired theme:</label>
    <input type="text" id="theme" name="theme" placeholder="e.g., A magical forest with glowing mushrooms">

    <label for="headline">Message Headline:</label>
    <input type="text" id="headline" placeholder="e.g., Happy Birthday, Alex!">

    <label for="caption">Message Caption:</label>
    <textarea id="caption" rows="3" placeholder="Write a caption or message..."></textarea>

    <button onclick="sendMessage()">Generate Cartoon</button>

    <div id="response"></div>
  </div>

  <script>
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');

    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          previewImage.src = reader.result;
          previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        previewImage.style.display = 'none';
      }
    });

    async function sendMessage() {
      const file = imageInput.files[0];
      const theme = document.getElementById('theme').value;
      const headline = document.getElementById('headline').value;
      const caption = document.getElementById('caption').value;
      const responseDiv = document.getElementById('response');

      responseDiv.innerText = 'Processing...';

      if (file) {
        const reader = new FileReader();
        reader.onloadend = async function () {
          const base64Image = reader.result;
          await callBackend(base64Image, theme, headline, caption);
        };
        reader.readAsDataURL(file);
      } else {
        await callBackend(null, theme, headline, caption);
      }
    }

    async function callBackend(imageDataUrl, theme, headline, caption) {
      const responseDiv = document.getElementById('response');

      try {
        const res = await fetch('https://your-backend-url.onrender.com/generate', { // Replace with your deployed backend URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ imageDataUrl, theme, headline, caption })
        });

        const data = await res.json();
        if (data.choices && data.choices[0]) {
          responseDiv.innerText = data.choices[0].message.content;
        } else {
          responseDiv.innerText = 'No result received.';
        }
      } catch (error) {
        console.error(error);
        responseDiv.innerText = 'An error occurred. Please try again later.';
      }
    }
  </script>
</body>
</html>
