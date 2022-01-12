const express = require('express');
const fs = require('fs').promises;
const bodyParser = require('body-parser');
const simpsons = require('./simpsons.json')

const app = express();
app.use(bodyParser.json())

app.get('/simpsons', (_req, res) => {
  res.status(200).json(simpsons)
})
app.post('/simpsons', (req, res) => {
  const {id, name} = req.body
  if (id.length === 0 || name.length === 0) return res.status(500)
  simpsons.push({ id, name });
  res.status(201).json({status: 200})
})
// const read = async () => {
//   const response = await fs.readFile('./simpsons.json', 'utf-8')
//   // return console.log(response)
//   console.log(simpsons)
// }
app.listen(3001)
// read()