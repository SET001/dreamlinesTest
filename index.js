const express = require('express')
const app = express()
const config = require('./config')

const bodyParser = require('body-parser')
const api = require('./routes')

require('./mongo')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', api)

app.listen(config.port, () => {
  console.log(`${config.appName} listening on port ${config.port}!`)
})