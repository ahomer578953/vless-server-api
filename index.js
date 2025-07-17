const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 3000;

// صفحة رئيسية بسيطة
app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

// نقطة توليد بيانات الـ VLESS (مثال)
app.get('/generate', (req, res) => {
  const injectorData = {
    message: "Here is your injection data",
    uuid: "abcdef12-3456-7890-abcd-ef1234567890",
    flow: "xtls-rprx-vision",
    additionalInfo: "You can customize this object"
  };
  res.json(injectorData);
});

// نقطة التحقق من ربط Cloud Run مع سيرفر Hetzner الحقيقي
app.get('/check-hetzner', async (req, res) => {
  try {
    // هنا ضع عنوان السيرفر الحقيقي (Hetzner IP أو رابط API الخاص به)
    const hetznerServerUrl = 'http://91.99.178.163/check'; // مثال، غيره حسب API سيرفرك

    const response = await axios.get(hetznerServerUrl, { timeout: 5000 });

    if (response.status === 200) {
      res.json({
        status: "success",
        message: "Hetzner server is reachable",
        hetznerResponse: response.data
      });
    } else {
      res.status(502).json({
        status: "fail",
        message: `Hetzner server returned status ${response.status}`
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to reach Hetzner server",
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


