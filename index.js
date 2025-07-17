const express = require('express');
const axios = require('axios');  // تأكد أنك نصبت axios

const app = express();
const port = process.env.PORT || 3000;

const hetznerIP = "91.99.178.163"; // غيرها إلى IP الخاص بسيرفر Hetzner

app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

// نقطة تحقق اتصال Hetzner
app.get('/check-hetzner', async (req, res) => {
  try {
    // نفترض أن هناك خدمة HTTP تستجيب على بورت 80 أو 443 في Hetzner
    const response = await axios.get(`http://${hetznerIP}:80`);
    if (response.status === 200) {
      res.json({ status: "success", message: "Connected to Hetzner server successfully" });
    } else {
      res.json({ status: "fail", message: "Hetzner server responded with status: " + response.status });
    }
  } catch (error) {
    res.json({ status: "fail", message: "Could not connect to Hetzner server", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

