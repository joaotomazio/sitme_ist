const app = module.exports = require('express')()

app.use('/api', require('./api'))

app.all('*', (req, res) => {
  res.sendStatus(404)
})