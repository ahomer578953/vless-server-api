const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('VLESS Server API is running 🚀');
});

app.get('/generate', (req, res) => {
  const injectorData = {
    message: "Here is your injection data",
    uuid: "abcdef12-3456-7890-abcd-ef1234567890",
    flow: "xtls-rprx-vision",
    additionalInfo: "You can customize this object"
  };
  res.json(injectorData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
