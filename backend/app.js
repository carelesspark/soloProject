const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8080;
const server = require('./router/server');


app.use('/', server);
app.use(cors());

app.listen(port, () => {
  console.log(`서버가 열렸습니다 : ${port}`);
});