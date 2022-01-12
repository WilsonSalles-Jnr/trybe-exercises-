const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let obj = {name: 'Wilson Salles Junior', age: 0}

app
  .route('/greetings')
  .get((_req, res) => {
    if (obj.age > 17) return res.status(200).json(obj.name)
    res.status(401).json({mensagem: "Não autorizado"})
  })
  .post((req, res) => {
    const { age } = req.body;
    obj.age = parseInt(age);
    obj.name = `Hello, ${obj.name}`;
    res.status(201).json({mensagem: 'Nome alterado'})
  })

app.listen(3001, () => console.log('inicializou'));