const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/check-hetzner', (req, res) => {
  // تحقق بسيط: ممكن تضيف تحقق من IP أو رمز أو غيره
  const wsURL = 'wss://your-hetzner-domain/ws'; // ← عدّل هذا بالرابط الصحيح

  return res.status(200).json({
    status: 'ok',
    forward: wsURL
  });
});

app.get('/', (req, res) => {
  res.send('OK: VLESS API');
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

