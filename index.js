const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

// endpoint للإيداع بيانات VLESS أو حقن config
app.get('/generate', (req, res) => {
  const injectorData = {
    message: "Here is your injection data",
    uuid: "abcdef12-3456-7890-abcd-ef1234567890",
    flow: "xtls-rprx-vision",
    additionalInfo: "You can customize this object"
  };
  res.json(injectorData);
});

// endpoint جديد لفحص اتصال Hetzner
app.get('/check-hetzner', async (req, res) => {
  try {
    // استبدل هذا بالـ IP أو رابط السيرفر الحقيقي الخاص بك
    const hetznerServerUrl = 'http://91.99.178.163:3000'; // مثلا

    // نجرب نرسل طلب GET للسيرفر الحقيقي
    const response = await axios.get(hetznerServerUrl);

    // نرجع الحالة والبيانات
    res.json({
      status: 'success',
      hetznerStatusCode: response.status,
      hetznerResponseData: response.data
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
