const express = require('express');
const path = require('path');
const app = express();
const CONFIG = require('../config');

app.use(express.static(CONFIG.BUILD_PATH));
app.use(express.static(CONFIG.PUBLIC_PATH));

app.get('/', function (req, res) {
  res.sendFile(path.join(CONFIG.BUILD_PATH, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`App started on port: ${PORT}`)
});
