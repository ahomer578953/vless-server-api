const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// نقطة البداية للتأكد من أن السيرفر يعمل
app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

// نقطة تحقق من الاتصال بسيرفر Hetzner
app.get('/check-hetzner', async (req, res) => {
  try {
    const response = await axios.get('http://91.99.178.163');
    res.send(`Hetzner response status: ${response.status}`);
  } catch (error) {
    res.status(500).send(`Failed to connect to Hetzner server: ${error.message}`);
  }
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

