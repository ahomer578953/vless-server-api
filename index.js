const express = require('express');
const axios = require('axios'); // تأكد من تثبيت axios: npm install axios

const app = express();
const port = process.env.PORT || 3000;

const hetznerServerIP = "91.99.178.163";

app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

app.get('/check-hetzner', async (req, res) => {
  try {
    const response = await axios.get(`http://${hetznerServerIP}`); 
    res.json({ status: "connected", data: response.data });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
