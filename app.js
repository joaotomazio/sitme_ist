const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('dev'))

app.use('/', require('./routes'))

app.listen(port, () => console.log(`SitMeIST backend app listening on port ${port}!`))