const config = require('./config')
const mongoose = require('mongoose')

const mongoConf = `mongodb://${config.dbHost || 'localhost'}:${config.dbPort || 27017}/${config.dbName}`

mongoose.connect(mongoConf,	{ useNewUrlParser: true })

mongoose.connection.on('error', (error) => {
  console.error(`Unable to connect to database: ${mongoConf}`);
  console.error(error);
});

mongoose.connection.on('connected', () => {
  console.log(`connected to database: ${mongoConf}`);
});