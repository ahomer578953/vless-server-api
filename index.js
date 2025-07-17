const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const userAgent = req.get('User-Agent') || '';

  // تحقق اختياري من نوع الاتصال (ممكن تشيل هذا الشرط لو حاب)
  if (!userAgent.includes('v2ray') && !userAgent.includes('okhttp') && !userAgent.includes('curl')) {
    return res.status(403).send('Access Denied');
  }

  // إرسال رابط VLESS الحقيقي
  return res.json({
    vless: "vless://abcdef12-3456-7890-abcd-ef1234567890@91.99.178.163:443?encryption=none&security=tls&type=ws&host=google.com&path=/ws#Hetzner-VLESS"
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
