const bodyParser = require('body-parser');
const express = require('express');
const postUser = require('./middleware/postUser');
const connection = require('./models/connections');

const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  if (!password || password === "") { return res.status(400).json({error: true, message: "necessário informar o password"})}
  if (!firstName || firstName === "") { return res.status(400).json({error: true, message: "necessário informar o firstname"})}
  if (!lastName || lastName === "") { return res.status(400).json({error: true, message: "necessário informar o lastname"})}
  if (!email || email === "") { return res.status(400).json({error: true, message: "necessário informar o email"})}
  if (password.length < 6) { return res.status(400).json({error: true, message: "O campo 'password' deve ter pelo menos 6 caracteres"})}
  const [result] = await connection.execute('INSERT INTO users (first_name, last_name, email, PASSWORD) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password] )
  console.log(result)
  res.status(201).json({id: result.insertId, firstName, lastName, email})
});

app.get('/user', async (req, res) => {
  const [result] = await connection.execute('SELECT * FROM users')
  res.status(200).json(result);
})

app.listen(3001, () => { console.log('rodando')});
