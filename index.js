const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const config = require('./config')
const api = require('./routes')
const mongoose = require('mongoose')

const mongoConf = `mongodb://${config.dbHost || 'localhost'}:${config.dbPort || 27017}/${config.dbName}`

mongoose.connect(mongoConf,
	{ useNewUrlParser: true }
)

mongoose.connection.on('error', (error) => {
	console.error(`Unable to connect to database: ${mongoConf}`);
	console.error(error);
});

mongoose.connection.on('connected', () => {
	console.error(`connect to database: ${mongoConf}`);
});

const unpackGeoData = data => zipObj([], data);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', api)

app.listen(config.port, () => {
  console.log(`${config.appName} listening on port ${config.port}!`)
})