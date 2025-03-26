const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
app.get('/', (req, res) => {
  res.send('Hello from Dockerized App!');
});

app.listen(PORT, () => {
  console.log('App running on port ${PORT}');
});

