// const connection = require("../models/connections");


module.exports = async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  if (!password || password === "") { return res.status(400).json({error: true, message: "necessário informar o password"})}
  if (!firstName || firstName === "") { return res.status(400).json({error: true, message: "necessário informar o firstname"})}
  if (!lastName || lastName === "") { return res.status(400).json({error: true, message: "necessário informar o lastname"})}
  if (!email || email === "") { return res.status(400).json({error: true, message: "necessário informar o email"})}
  if (password.length < 6) { return res.status(400).json({error: true, message: "O campo 'password' deve ter pelo menos 6 caracteres"})}
  const result = await connection.execute('INSERT INTO users (first_name, last_name, email, PASSWORD) VALUES (?, ?, ?, ?', [firstName, lastName, email, password] )
  res.status(201).json({'result': 'error'})
}