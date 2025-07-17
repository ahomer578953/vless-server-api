const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

// نقطة توليد بيانات VLESS (مثال)
app.get('/generate', (req, res) => {
  const injectorData = {
    message: "Here is your injection data",
    uuid: "abcdef12-3456-7890-abcd-ef1234567890",
    flow: "xtls-rprx-vision",
    additionalInfo: "You can customize this object"
  };
  res.json(injectorData);
});

// نقطة تحقق الاتصال مع سيرفر Hetzner الحقيقي
app.get('/check-hetzner', async (req, res) => {
  const hetznerIP = '91.99.178.163'; // غيّرها حسب IP السيرفر الحقيقي
  try {
    // نجرب نعمل طلب GET للسيرفر الحقيقي (مثلاً على المنفذ 80 أو 443)
    const response = await axios.get(`http://${hetznerIP}`, { timeout: 3000 });
    res.json({
      status: 'success',
      message: `Hetzner server ${hetznerIP} is reachable.`,
      statusCode: response.status
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: `Cannot reach Hetzner server ${hetznerIP}`,
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


