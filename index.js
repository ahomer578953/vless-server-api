const express = require('express');
const app = express();
const axios = require('axios'); // تحتاج تثبت axios بـ npm install axios

const hetznerServerIP = "91.99.178.163"; // مثال

app.get('/check-hetzner', async (req, res) => {
  try {
    const response = await axios.get(`http://${hetznerServerIP}`); // أو أي بورت وendpoint عندك بالسيرفر
    res.json({ status: "connected", data: response.data });
  } catch (error) {
    res.json({ status: "failed", error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
