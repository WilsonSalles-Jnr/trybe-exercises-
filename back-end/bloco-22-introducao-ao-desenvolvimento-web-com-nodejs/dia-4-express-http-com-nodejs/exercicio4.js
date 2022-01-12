const express = require('express');

const app = express();

let obj = {name: '', age: 0}

app
  .route('/hello/:name/:age')
  .get((req, res) => {
    const { name, age } = req.params;
    res.status(200).json({mensagem: `Seu nome é ${name} e você tem ${age} anos de idade`})
  })

app.listen(3001, () => console.log('inicializou'));