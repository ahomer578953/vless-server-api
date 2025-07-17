const express = require('express');
const app = express();

// Cloud Run يعمل على منفذ يأتي من المتغير PORT
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('VLESS Handshake API ✅');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
