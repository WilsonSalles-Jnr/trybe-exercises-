const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.json({mensagem: 'pong'});
})

app.listen(3001,() => {
  console.log('entrou na 3001')
})