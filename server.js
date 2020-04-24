'use strict';

const express = require('express');
const randomString = require('randomstring');
const ip = require('ip');

const ipAddress = ip.address();

const xxx = randomString.generate({
  length: 7,
  charset: 'numeric'
});

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

var results = {
  id : xxx,
  ip:ipAddress,
  books : [
      {isbn:1,name:"Java in 24 days"},
      {isbn:2,name:"Python in 24 days"},
      {isbn:3,name:".Net in 24 days"},
      {isbn:4,name:"go in 24 days"}
  ]
};

// App
const app = express();
app.get('/', (req, res) => {
  //res.send('Hello World : ' + xxx);
  res.json(results);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);