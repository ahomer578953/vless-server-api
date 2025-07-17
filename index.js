const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const userAgent = req.get("User-Agent") || "";

  // تحقق اختياري
  if (!userAgent.includes("v2ray") && !userAgent.includes("v2rayng")) {
    return res.status(403).send("Access Denied");
  }

  // إعدادات VLESS الحقيقية (سيرفر Hetzner)
  const config = {
    vless: "vless://abcdef12-3456-7890-abcd-ef1234567890@91.99.178.163:443?encryption=none&security=tls&type=ws&host=vless-server-api-990332140174.us-central1.run.app&path=/ws#FreeInternet"
  };

  res.json(config);
});

app.listen(port, () => {
  console.log(`VLESS Handshake server listening on port ${port}`);
});
