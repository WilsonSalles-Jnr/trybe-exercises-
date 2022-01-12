const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let obj = {name: 'Wilson Salles Junior'}

app
  .route('/hello')
  .get((_req, res) => {res.json(obj)})
  .post((req, res) => {
    obj.name = `Hello, ${obj.name}`;
    res.status(201).json({mensagem: 'Nome alterado'})
  })

app.listen(3001, () => console.log('inicializou'));