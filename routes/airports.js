const express = require('express');
const app = express.Router();
const {stats, reviews} = require('../controllers/airports')

app.get('/:airport_name/reviews', reviews)
app.get('/:airport_name/stats', stats)

module.exports = app