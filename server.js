const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/generate', async (req, res) => {
  const { imageDataUrl, theme, headline, caption } = req.body;

  console.log("Received request:");
  console.log({ theme, headline, caption, image: imageDataUrl?.slice(0, 30) + '...' });

  console.log("Using API Key:", process.env.OPENAI_API_KEY); // Debug line

  const content = [
    { type: 'text', text: `Please transform this photo into a cartoon.\nTheme: ${theme}\nHeadline: ${headline}\nCaption: ${caption}` }
  ];

  if (imageDataUrl) {
    content.push({
      type: 'image_url',
      image_url: { url: imageDataUrl }
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You are AnimateMe, a fun and friendly AI that transforms uploaded photos into cartoon-style illustrations.' },
          { role: 'user', content }
        ],
        max_tokens: 1000
      })
    });

    const data = await response.json();
    console.log("OpenAI response:", data);
    res.json(data);
  } catch (error) {
    console.error("Error talking to OpenAI:", error);
    res.status(500).json({ error: 'Something went wrong with the OpenAI request.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
